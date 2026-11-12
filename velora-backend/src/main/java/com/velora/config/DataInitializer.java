package com.velora.config;

import com.velora.model.StoreSettings;
import com.velora.repository.ProductRepository;
import com.velora.repository.StoreSettingsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final StoreSettingsRepository settingsRepository;
    private final ProductRepository productRepository;

    public DataInitializer(StoreSettingsRepository settingsRepository,
                           ProductRepository productRepository) {
        this.settingsRepository = settingsRepository;
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        try {
            // 1. Load or create store settings (the admin user is handled by DataSeeder)
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

            // 2. One-time cleanup of legacy hardcoded demo products (p1..p8).
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
