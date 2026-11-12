package com.velora.controller;

import com.velora.model.Order;
import com.velora.model.Product;
import com.velora.model.StoreSettings;
import com.velora.model.User;
import com.velora.repository.OrderRepository;
import com.velora.repository.ProductRepository;
import com.velora.repository.StoreSettingsRepository;
import com.velora.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminProductController {

    private final ProductRepository productRepository;
    private final StoreSettingsRepository settingsRepository;
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminProductController(ProductRepository productRepository,
                                  StoreSettingsRepository settingsRepository,
                                  OrderRepository orderRepository,
                                  UserRepository userRepository,
                                  PasswordEncoder passwordEncoder) {
        this.productRepository = productRepository;
        this.settingsRepository = settingsRepository;
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * POST /api/admin/products - Create a new product in catalog
     */
    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        if (product.getSlug() == null || product.getSlug().isBlank()) {
            product.setSlug(product.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-"));
        }
        if ((product.getImg() == null || product.getImg().isBlank()) && product.getImageUrl() != null) {
            product.setImg(product.getImageUrl());
        }
        product.setFuneralTribute("funebre".equalsIgnoreCase(product.getCategory()) || product.isFuneralTribute());
        product.setCreatedAt(Instant.now());
        product.setUpdatedAt(Instant.now());

        Product saved = productRepository.save(product);
        return ResponseEntity.ok(saved);
    }

    /**
     * PUT /api/admin/products/{id} - Update existing product (or upsert if not found)
     */
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id, @RequestBody Product updates) {
        return productRepository.findById(id)
                .map(existing -> {
                    existing.setName(updates.getName());
                    existing.setCategory(updates.getCategory());
                    existing.setPrice(updates.getPrice());
                    existing.setOriginalPrice(updates.getOriginalPrice());
                    existing.setPromo(updates.isPromo());
                    existing.setPromoDiscountPct(updates.getPromoDiscountPct());
                    existing.setStockQuantity(updates.getStockQuantity());
                    existing.setBadge(updates.getBadge());
                    existing.setDesc(updates.getDesc());
                    existing.setDimensions(updates.getDimensions());
                    String newImg = updates.getImageUrl() != null && !updates.getImageUrl().isBlank() 
                            ? updates.getImageUrl() 
                            : updates.getImg();
                    existing.setImg(newImg);
                    existing.setFuneralTribute("funebre".equalsIgnoreCase(updates.getCategory()) || updates.isFuneralTribute());
                    existing.setUpdatedAt(Instant.now());

                    Product saved = productRepository.save(existing);
                    return ResponseEntity.ok(saved);
                })
                .orElseGet(() -> {
                    updates.setId(id);
                    if (updates.getSlug() == null || updates.getSlug().isBlank()) {
                        updates.setSlug(updates.getName() != null
                                ? updates.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-")
                                : id);
                    }
                    updates.setUpdatedAt(Instant.now());
                    Product saved = productRepository.save(updates);
                    return ResponseEntity.ok(saved);
                });
    }

    /**
     * DELETE /api/admin/products/{id} - Permanently delete product from MongoDB catalog
     */
    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id) {
        productRepository.deleteById(id);

        // Ensure catalogInitialized flag is true so deleted items are never re-seeded on restart
        settingsRepository.findById("store_config").ifPresent(settings -> {
            if (!settings.isCatalogInitialized()) {
                settings.setCatalogInitialized(true);
                settingsRepository.save(settings);
            }
        });

        return ResponseEntity.ok(Map.of(
                "success", true,
                "id", id,
                "message", "Prodotto eliminato definitivamente da MongoDB."
        ));
    }

    /**
     * PUT /api/admin/settings - Update top announcement bar & store settings
     */
    @PutMapping("/settings")
    public ResponseEntity<StoreSettings> updateSettings(@RequestBody StoreSettings updates) {
        StoreSettings current = settingsRepository.findById("store_config")
                .orElseGet(StoreSettings::new);

        if (updates.getAnnouncement() != null) {
            current.setAnnouncement(updates.getAnnouncement());
        }
        if (updates.getBrandName() != null) {
            current.setBrandName(updates.getBrandName());
        }
        if (updates.getFreeShippingThreshold() > 0) {
            current.setFreeShippingThreshold(updates.getFreeShippingThreshold());
        }
        current.setFreeShippingEnabled(updates.isFreeShippingEnabled());
        if (updates.getStandardDeliveryFee() >= 0) {
            current.setStandardDeliveryFee(updates.getStandardDeliveryFee());
        }
        if (updates.getDeliveryArea() != null) {
            current.setDeliveryArea(updates.getDeliveryArea());
        }
        current.setUpdatedAt(Instant.now());

        StoreSettings saved = settingsRepository.save(current);
        return ResponseEntity.ok(saved);
    }

    /**
     * PUT /api/admin/credentials - Update admin username and password on MongoDB
     */
    @PutMapping("/credentials")
    public ResponseEntity<?> changeCredentials(@RequestBody Map<String, String> body, Authentication authentication) {
        String currentPassword = body.get("currentPassword");
        String newUsername = body.get("newUsername");
        String newPassword = body.get("newPassword");

        if (currentPassword == null || currentPassword.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "La password attuale è obbligatoria."));
        }
        if (newPassword == null || newPassword.length() < 6) {
            return ResponseEntity.badRequest().body(Map.of("message", "La nuova password deve contenere almeno 6 caratteri."));
        }

        String username = authentication != null ? authentication.getName() : "admin";
        User user = userRepository.findByUsername(username)
                .orElseGet(() -> userRepository.findAll().stream().findFirst().orElse(null));

        if (user == null) {
            return ResponseEntity.status(404).body(Map.of("message", "Account amministratore non trovato nel database MongoDB."));
        }

        if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
            return ResponseEntity.status(400).body(Map.of("message", "La password attuale inserita non è corretta."));
        }

        if (newUsername != null && !newUsername.isBlank()) {
            user.setUsername(newUsername.trim());
        }
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Credenziali amministratore aggiornate con successo su MongoDB.",
                "username", user.getUsername()
        ));
    }

    /**
     * GET /api/admin/orders - View all received customer orders
     */
    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAdminOrders() {
        return ResponseEntity.ok(orderRepository.findAllByOrderByCreatedAtDesc());
    }

    /**
     * PATCH /api/admin/orders/{id}/status - Update status of an order
     */
    @PatchMapping("/orders/{id}/status")
    public ResponseEntity<?> updateOrderStatus(@PathVariable String id, @RequestBody Map<String, String> body) {
        String newStatus = body.get("status");
        return orderRepository.findById(id)
                .map(order -> {
                    if (newStatus != null) {
                        order.setStatus(newStatus.toUpperCase());
                        orderRepository.save(order);
                    }
                    return ResponseEntity.ok(order);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

