package com.velora.config;

import com.velora.model.Product;
import com.velora.model.StoreSettings;
import com.velora.model.User;
import com.velora.repository.ProductRepository;
import com.velora.repository.StoreSettingsRepository;
import com.velora.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final StoreSettingsRepository settingsRepository;
    private final PasswordEncoder passwordEncoder;

    public DataSeeder(UserRepository userRepository,
                      ProductRepository productRepository,
                      StoreSettingsRepository settingsRepository,
                      PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.settingsRepository = settingsRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // 1. Seed Admin User
        if (userRepository.count() == 0) {
            User admin = new User("admin", passwordEncoder.encode("velora2026!"), "ADMIN");
            userRepository.save(admin);
            System.out.println(">>> [VELORA SEEDER] Created default admin user: 'admin' / 'velora2026!'");
        }

        // 2. Seed Store Settings
        if (settingsRepository.count() == 0) {
            StoreSettings settings = new StoreSettings();
            settingsRepository.save(settings);
            System.out.println(">>> [VELORA SEEDER] Initialized Store Settings with Top Announcement Bar");
        }

        // 3. Seed Catalog Products
        if (productRepository.count() == 0) {
            List<Product> initialProducts = List.of(
                    new Product("p1", "Bouquet \"Alba Provenzale\"", "bouquet-alba-provenzale", "bouquet",
                            "Bestseller • Mazzo", 48.0, 55.0, true, 12, 14,
                            "Peonie rosa cipria, ranuncoli freschi, rose David Austin ed eucalipto.",
                            "Altezza 45cm • Diametro 35cm",
                            "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
                            true, false),
                    new Product("p2", "Monstera in Vaso di Terracotta", "monstera-vaso-terracotta", "piante",
                            "Vaso Artigianale", 44.0, 44.0, false, null, 8,
                            "Pianta tropicale purificante h 75cm invasata in terracotta toscana lavorata a mano.",
                            "Altezza 75cm • Vaso Ø 24cm",
                            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
                            true, false),
                    new Product("p3", "Hat-Box \"Velluto Imperiale\"", "hat-box-velluto-imperiale", "composizioni",
                            "Luxury Box 🔥", 68.0, 85.0, true, 20, 5,
                            "18 Rose rosse Red Naomi a bocciolo grande in cappelliera rigida avorio.",
                            "Diametro 28cm • Altezza 30cm",
                            "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
                            true, false),
                    new Product("p4", "Mazzo \"Sole di Campo\"", "mazzo-sole-di-campo", "bouquet",
                            "Appena Colti", 39.0, 39.0, false, null, 18,
                            "Tulipani doppi, camomilla selvatica, craspedia dorata e rami di ulivo.",
                            "Altezza 40cm • Diametro 30cm",
                            "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
                            false, false),
                    new Product("p5", "Orchidea Phalaenopsis in Coppa", "orchidea-phalaenopsis-coppa", "piante",
                            "Vaso Ceramica", 56.0, 65.0, true, 14, 0, // Out of stock for testing
                            "Orchidea bianca a cascata a doppio stelo in vaso di ceramica smaltata verde salvia.",
                            "Altezza 60cm • Vaso Ø 18cm",
                            "https://images.unsplash.com/photo-1566907225472-514215c9e5cd?auto=format&fit=crop&w=800&q=80",
                            false, false),
                    new Product("p6", "Cuscino Floreale \"Candore\"", "cuscino-floreale-candore", "funebre",
                            "Arte Funebre", 95.0, 95.0, false, null, 10,
                            "Rose bianche avalanche, lilium orientali candidi, lisianthus e nastro in lamina d'oro.",
                            "Lunghezza 65cm • Larghezza 45cm",
                            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
                            true, true),
                    new Product("p7", "Corona Solenne \"Eternità\"", "corona-solenne-eternita", "funebre",
                            "Alta Cerimonia", 165.0, 180.0, false, null, 6,
                            "Grande corona circolare con orchidee bianche, rose crema, ulivo e cavalletto.",
                            "Diametro corona 80cm • Altezza 160cm",
                            "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
                            false, true)
            );

            productRepository.saveAll(initialProducts);
            System.out.println(">>> [VELORA SEEDER] Seeded " + initialProducts.size() + " botanical creations in MongoDB.");
        }
    }
}

