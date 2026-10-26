package com.velora.controller;

import com.velora.model.Order;
import com.velora.model.Product;
import com.velora.model.StoreSettings;
import com.velora.repository.OrderRepository;
import com.velora.repository.ProductRepository;
import com.velora.repository.StoreSettingsRepository;
import org.springframework.http.ResponseEntity;
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

    public AdminProductController(ProductRepository productRepository,
                                  StoreSettingsRepository settingsRepository,
                                  OrderRepository orderRepository) {
        this.productRepository = productRepository;
        this.settingsRepository = settingsRepository;
        this.orderRepository = orderRepository;
    }

    /**
     * POST /api/admin/products - Create a new product in catalog
     */
    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        if (product.getSlug() == null || product.getSlug().isBlank()) {
            product.setSlug(product.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-"));
        }
        product.setCreatedAt(Instant.now());
        product.setUpdatedAt(Instant.now());

        Product saved = productRepository.save(product);
        return ResponseEntity.ok(saved);
    }

    /**
     * PUT /api/admin/products/{id} - Update existing product
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
                    existing.setImg(updates.getImg());
                    existing.setUpdatedAt(Instant.now());

                    Product saved = productRepository.save(existing);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * DELETE /api/admin/products/{id} - Delete product from catalog
     */
    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return ResponseEntity.ok(Map.of("success", true, "message", "Prodotto eliminato con successo."));
        }
        return ResponseEntity.notFound().build();
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
        if (updates.getDeliveryArea() != null) {
            current.setDeliveryArea(updates.getDeliveryArea());
        }
        current.setUpdatedAt(Instant.now());

        StoreSettings saved = settingsRepository.save(current);
        return ResponseEntity.ok(saved);
    }

    /**
     * GET /api/admin/orders - View all received customer orders
     */
    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAdminOrders() {
        return ResponseEntity.ok(orderRepository.findAllByOrderByCreatedAtDesc());
    }
}

