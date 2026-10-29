package com.velora.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "products")
public class Product {

    @Id
    private String id;
    private String name;
    private String slug;
    private String category; // bouquet, piante, composizioni, funebre
    private String badge;
    private double price;
    private Double originalPrice;
    private boolean isPromo;
    private Integer promoDiscountPct;
    private int stockQuantity;
    private String desc;
    private String dimensions;
    private String img;
    private boolean isFeatured;
    private boolean isFuneralTribute;
    private Instant createdAt = Instant.now();
    private Instant updatedAt = Instant.now();

    public Product() {
    }

    public Product(String id, String name, String slug, String category, String badge, double price,
                   Double originalPrice, boolean isPromo, Integer promoDiscountPct, int stockQuantity,
                   String desc, String dimensions, String img, boolean isFeatured, boolean isFuneralTribute) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.category = category;
        this.badge = badge;
        this.price = price;
        this.originalPrice = originalPrice;
        this.isPromo = isPromo;
        this.promoDiscountPct = promoDiscountPct;
        this.stockQuantity = stockQuantity;
        this.desc = desc;
        this.dimensions = dimensions;
        this.img = img;
        this.isFeatured = isFeatured;
        this.isFuneralTribute = isFuneralTribute;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public Double getOriginalPrice() { return originalPrice; }
    public void setOriginalPrice(Double originalPrice) { this.originalPrice = originalPrice; }

    public boolean isPromo() { return isPromo; }
    public void setPromo(boolean promo) { isPromo = promo; }

    public Integer getPromoDiscountPct() { return promoDiscountPct; }
    public void setPromoDiscountPct(Integer promoDiscountPct) { this.promoDiscountPct = promoDiscountPct; }

    public int getStockQuantity() { return stockQuantity; }
    public void setStockQuantity(int stockQuantity) { this.stockQuantity = stockQuantity; }

    public String getDesc() { return desc; }
    public void setDesc(String desc) { this.desc = desc; }

    public String getDimensions() { return dimensions; }
    public void setDimensions(String dimensions) { this.dimensions = dimensions; }

    public String getImg() { return img; }
    public void setImg(String img) { this.img = img; }

    public String getImageUrl() { return img; }
    public void setImageUrl(String imageUrl) {
        if (imageUrl != null && !imageUrl.isBlank()) {
            this.img = imageUrl;
        }
    }

    public boolean isFeatured() { return isFeatured; }
    public void setFeatured(boolean featured) { isFeatured = featured; }

    public boolean isFuneralTribute() { return isFuneralTribute; }
    public void setFuneralTribute(boolean funeralTribute) { isFuneralTribute = funeralTribute; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}

