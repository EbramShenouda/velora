package com.velora.repository;

import com.velora.model.EditorialSoul;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EditorialSoulRepository extends MongoRepository<EditorialSoul, String> {
    List<EditorialSoul> findAllByOrderByOrderIndexAsc();
}
