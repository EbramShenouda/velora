package com.velora.config;

import com.velora.model.StoreSettings;
import com.velora.model.User;
import com.velora.repository.ProductRepository;
import com.velora.repository.StoreSettingsRepository;
import com.velora.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final UserRepository userRepository;
    private final StoreSettingsRepository settingsRepository;
    private final ProductRepository productRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${velora.admin.initial-user:admin}")
    private String initialUser;

    @Value("${velora.admin.initial-password:velora2026!}")
    private String initialPassword;

    public DataInitializer(UserRepository userRepository,
                           StoreSettingsRepository settingsRepository,
                           ProductRepository productRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.settingsRepository = settingsRepository;
        this.productRepository = productRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        try {
            // 1. Seed initial admin user ONLY if user collection is empty
            if (userRepository.count() == 0) {
                String encodedPassword = passwordEncoder.encode(initialPassword);
                User admin = new User(initialUser, encodedPassword, "ADMIN");
                userRepository.save(admin);
                log.info("Initialized default admin user in MongoDB: '{}'", initialUser);
            }

            // 2. Load or create store settings
            StoreSettings settings = settingsRepository.findById("store_config").orElse(null);
            if (settings == null) {
                settings = new StoreSettings();
                settings.setFreeShippingEnabled(false);
                settings.setStandardDeliveryFee(5.0);
                settings.setFreeShippingThreshold(50.0);
                settings.setDeliveryArea("tutta Roma");
                settings.setCatalogInitialized(false);
                settings = settingsRepository.save(settings);
                log.info("Initialized default store settings in MongoDB.");
            }

            // 3. One-time cleanup of legacy hardcoded demo products (p1..p8).
            // Never seed fake/demo products on startup or release: the catalog is 100% managed from the Admin Dashboard.
            if (!settings.isCatalogInitialized()) {
                List<String> legacyDemoIds = List.of("p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8");
                productRepository.deleteAllById(legacyDemoIds);
                settings.setCatalogInitialized(true);
                settingsRepository.save(settings);
                log.info("Cleaned up legacy demo products (p1..p8) once and marked catalogInitialized=true. Only admin-created products will persist.");
            }
        } catch (Exception ex) {
            log.error("Errore di connessione a MongoDB durante l'inizializzazione dati. Verifica la variabile MONGODB_URI: {}", ex.getMessage());
        }
    }
}
