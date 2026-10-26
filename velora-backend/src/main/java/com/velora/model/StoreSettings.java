package com.velora.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "settings")
public class StoreSettings {

    @Id
    private String id = "store_config";
    private String brandName = "VELORA";
    private String brandTagline = "Atelier Botanico";
    private String storeAddress = "Via Nomentana 38, 00013 Tor Lupara (RM)";
    private String deliveryArea = "tutta Roma";
    private double freeShippingThreshold = 50.0;
    private double standardDeliveryFee = 5.0;

    // Dynamic Announcement Bar
    private Announcement announcement = new Announcement();

    private Instant updatedAt = Instant.now();

    public static class Announcement {
        private String badge = "VELORA:";
        private String message = "Consegna espressa a mano garantita in tutta Roma dalla nostra bottega di Tor Lupara";
        private String secondaryNotice = "✨ Consegna Gratuita sopra 50,00 € • 💌 Biglietto a mano incluso";
        private boolean active = true;
        private String specialEvent = "standard";

        public Announcement() {}

        public String getBadge() { return badge; }
        public void setBadge(String badge) { this.badge = badge; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }

        public String getSecondaryNotice() { return secondaryNotice; }
        public void setSecondaryNotice(String secondaryNotice) { this.secondaryNotice = secondaryNotice; }

        public boolean isActive() { return active; }
        public void setActive(boolean active) { this.active = active; }

        public String getSpecialEvent() { return specialEvent; }
        public void setSpecialEvent(String specialEvent) { this.specialEvent = specialEvent; }
    }

    public StoreSettings() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getBrandName() { return brandName; }
    public void setBrandName(String brandName) { this.brandName = brandName; }

    public String getBrandTagline() { return brandTagline; }
    public void setBrandTagline(String brandTagline) { this.brandTagline = brandTagline; }

    public String getStoreAddress() { return storeAddress; }
    public void setStoreAddress(String storeAddress) { this.storeAddress = storeAddress; }

    public String getDeliveryArea() { return deliveryArea; }
    public void setDeliveryArea(String deliveryArea) { this.deliveryArea = deliveryArea; }

    public double getFreeShippingThreshold() { return freeShippingThreshold; }
    public void setFreeShippingThreshold(double freeShippingThreshold) { this.freeShippingThreshold = freeShippingThreshold; }

    public double getStandardDeliveryFee() { return standardDeliveryFee; }
    public void setStandardDeliveryFee(double standardDeliveryFee) { this.standardDeliveryFee = standardDeliveryFee; }

    public Announcement getAnnouncement() { return announcement; }
    public void setAnnouncement(Announcement announcement) { this.announcement = announcement; }

    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}

