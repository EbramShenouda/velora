package com.velora.config;

import com.velora.model.StoreSettings;
import com.velora.model.User;
import com.velora.repository.StoreSettingsRepository;
import com.velora.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final UserRepository userRepository;
    private final StoreSettingsRepository settingsRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${velora.admin.initial-user:admin}")
    private String initialUser;

    @Value("${velora.admin.initial-password:velora2026!}")
    private String initialPassword;

    public DataInitializer(UserRepository userRepository,
                           StoreSettingsRepository settingsRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.settingsRepository = settingsRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // 1. Seed initial admin user if collection is empty
        if (userRepository.count() == 0) {
            String encodedPassword = passwordEncoder.encode(initialPassword);
            User admin = new User(initialUser, encodedPassword, "ADMIN");
            userRepository.save(admin);
            log.info("Initialized default admin user in MongoDB: '{}'", initialUser);
        }

        // 2. Seed initial store settings if not present
        if (!settingsRepository.existsById("store_config")) {
            StoreSettings defaults = new StoreSettings();
            defaults.setFreeShippingEnabled(false);
            defaults.setStandardDeliveryFee(5.0);
            defaults.setFreeShippingThreshold(50.0);
            settingsRepository.save(defaults);
            log.info("Initialized default store settings in MongoDB.");
        }
    }
}

