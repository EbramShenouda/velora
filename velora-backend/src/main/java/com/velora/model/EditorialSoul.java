package com.velora.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "editorial_souls")
public class EditorialSoul {

    @Id
    private String id;
    private int orderIndex;
    private String tag;
    private String title;
    private String shortDescription;
    private String fullDescription;
    private String imageUrl;

    public EditorialSoul() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public int getOrderIndex() { return orderIndex; }
    public void setOrderIndex(int orderIndex) { this.orderIndex = orderIndex; }

    public String getTag() { return tag; }
    public void setTag(String tag) { this.tag = tag; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getShortDescription() { return shortDescription; }
    public void setShortDescription(String shortDescription) { this.shortDescription = shortDescription; }

    public String getFullDescription() { return fullDescription; }
    public void setFullDescription(String fullDescription) { this.fullDescription = fullDescription; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
