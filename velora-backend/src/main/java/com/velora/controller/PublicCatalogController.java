package com.velora.controller;

import com.velora.model.Order;
import com.velora.model.Product;
import com.velora.model.StoreSettings;
import com.velora.repository.OrderRepository;
import com.velora.repository.ProductRepository;
import com.velora.repository.StoreSettingsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PublicCatalogController {

    private final ProductRepository productRepository;
    private final StoreSettingsRepository settingsRepository;
    private final OrderRepository orderRepository;

    public PublicCatalogController(ProductRepository productRepository,
                                   StoreSettingsRepository settingsRepository,
                                   OrderRepository orderRepository) {
        this.productRepository = productRepository;
        this.settingsRepository = settingsRepository;
        this.orderRepository = orderRepository;
    }

    /**
     * GET /api/products - List products with optional category / promo filtering
     */
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Boolean promo) {

        if (Boolean.TRUE.equals(promo)) {
            return ResponseEntity.ok(productRepository.findByIsPromoTrue());
        }
        if (category != null && !category.equalsIgnoreCase("all")) {
            return ResponseEntity.ok(productRepository.findByCategory(category.toLowerCase()));
        }
        return ResponseEntity.ok(productRepository.findAll());
    }

    /**
     * GET /api/products/{id} - Product detail
     */
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * GET /api/settings - Store configuration and Announcement Bar
     */
    @GetMapping("/settings")
    public ResponseEntity<StoreSettings> getStoreSettings() {
        StoreSettings settings = settingsRepository.findById("store_config")
                .orElseGet(() -> settingsRepository.save(new StoreSettings()));
        return ResponseEntity.ok(settings);
    }

    /**
     * POST /api/orders - Record new order from cart
     */
    @PostMapping("/orders")
    public ResponseEntity<?> createOrder(@RequestBody Order order) {
        if (order.getOrderId() == null || order.getOrderId().isBlank()) {
            order.setOrderId("VEL-" + System.currentTimeMillis());
        }
        order.setStatus("CONFIRMED");
        Order savedOrder = orderRepository.save(order);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "orderId", savedOrder.getOrderId(),
                "message", "Ordine registrato con successo presso VELORA Atelier Botanico."
        ));
    }
}

