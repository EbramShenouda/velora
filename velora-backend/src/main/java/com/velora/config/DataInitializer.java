package com.velora.config;

import com.velora.model.Product;
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
            defaults.setDeliveryArea("tutta Roma");
            settingsRepository.save(defaults);
            log.info("Initialized default store settings in MongoDB.");
        }

        // 3. Seed initial products (including Funeral Tributes) if collection is empty
        if (productRepository.count() == 0) {
            List<Product> defaults = List.of(
                new Product("p1", "Bouquet \"Alba Provenzale\"", "bouquet-alba-provenzale", "bouquet",
                    "Bestseller • Mazzo", 48.0, 55.0, true, 12, 14,
                    "Peonie rosa cipria, ranuncoli freschi, rose inglesi David Austin ed eucalipto profumato.",
                    "Altezza 45cm • Diametro 35cm",
                    "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
                    true, false),
                new Product("p2", "Monstera in Vaso di Terracotta", "monstera-vaso-terracotta", "piante",
                    "Vaso Artigianale", 44.0, 44.0, false, null, 8,
                    "Pianta tropicale purificante h 75cm invasata in terracotta toscana lavorata a mano.",
                    "Altezza totale 75cm • Vaso Ø 24cm",
                    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
                    true, false),
                new Product("p3", "Hat-Box \"Velluto Imperiale\"", "hat-box-velluto-imperiale", "composizioni",
                    "Luxury Box 🔥", 68.0, 85.0, true, 20, 5,
                    "18 Rose rosse Red Naomi a bocciolo grande in cappelliera rigida avorio con riserva d’acqua.",
                    "Diametro 28cm • Altezza 30cm",
                    "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
                    true, false),
                new Product("p4", "Mazzo \"Sole di Campo\"", "mazzo-sole-di-campo", "bouquet",
                    "Appena Colti", 39.0, 39.0, false, null, 18,
                    "Tulipani doppi, camomilla selvatica, craspedia dorata e rami di ulivo mediterraneo.",
                    "Altezza 40cm • Diametro 30cm",
                    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
                    false, false),
                new Product("p5", "Orchidea Phalaenopsis in Coppa", "orchidea-phalaenopsis-coppa", "piante",
                    "Vaso Ceramica", 56.0, 65.0, true, 14, 0,
                    "Orchidea bianca a cascata a doppio stelo in vaso di ceramica smaltata verde salvia.",
                    "Altezza 60cm • Vaso Ø 18cm",
                    "https://images.unsplash.com/photo-1566907225472-514215c9e5cd?auto=format&fit=crop&w=800&q=80",
                    false, false),
                new Product("p6", "Cuscino Floreale \"Candore\"", "cuscino-floreale-candore", "funebre",
                    "Arte Funebre", 95.0, 95.0, false, null, 10,
                    "Rose bianche avalanche, lilium orientali candidi, lisianthus e fronde nobili con nastro in oro.",
                    "Lunghezza 65cm • Larghezza 45cm",
                    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
                    true, true),
                new Product("p7", "Corona Solenne \"Eternità\"", "corona-solenne-eternita", "funebre",
                    "Alta Cerimonia", 165.0, 180.0, false, null, 6,
                    "Grande corona circolare con orchidee bianche, rose crema, ulivo e cavalletto in legno.",
                    "Diametro corona 80cm • Altezza su cavalletto 160cm",
                    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
                    false, true),
                new Product("p8", "Ficus Lyrata Bambino in Cesta", "ficus-lyrata-cesta-juta", "piante",
                    "Tendenza Arredo", 52.0, 52.0, false, null, 7,
                    "Foglie a violino scultoree in coprivaso in fibra naturale di juta intrecciata.",
                    "Altezza 85cm • Cesta Ø 26cm",
                    "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
                    false, false)
            );
            productRepository.saveAll(defaults);
            log.info("Initialized {} default products (including Funeral tributes) in MongoDB.", defaults.size());
        }
    }
}

