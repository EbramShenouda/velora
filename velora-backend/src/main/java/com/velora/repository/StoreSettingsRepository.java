package com.velora.repository;

import com.velora.model.StoreSettings;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreSettingsRepository extends MongoRepository<StoreSettings, String> {
}

