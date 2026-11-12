package com.velora.config;

import com.velora.model.User;
import com.velora.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * Creates the initial Admin user only when no user exists.
 * It never touches products: the catalog contains only items created by the admin on MongoDB.
 */
@Component
public class DataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${velora.admin.initial-user:admin}")
    private String initialUser;

    @Value("${velora.admin.initial-password:velora2026!}")
    private String initialPassword;

    public DataSeeder(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        try {
            if (userRepository.count() == 0) {
                userRepository.save(new User(initialUser, passwordEncoder.encode(initialPassword), "ADMIN"));
                log.info("Created initial admin user '{}' (users collection was empty).", initialUser);
            }
        } catch (Exception ex) {
            log.error("MongoDB non raggiungibile durante la creazione dell'utente admin: {}", ex.getMessage());
        }
    }
}

