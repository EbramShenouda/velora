package com.velora.controller;

import com.velora.model.EditorialSoul;
import com.velora.repository.EditorialSoulRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api")
public class EditorialSoulController {

    private static final Pattern SOUL_ID = Pattern.compile("^soul-([1-4])$");

    private final EditorialSoulRepository soulRepository;

    public EditorialSoulController(EditorialSoulRepository soulRepository) {
        this.soulRepository = soulRepository;
    }

    /** GET /api/souls - public cards of "Le Quattro Anime", ordered by orderIndex. */
    @GetMapping("/souls")
    public ResponseEntity<List<EditorialSoul>> getSouls() {
        return ResponseEntity.ok(soulRepository.findAllByOrderByOrderIndexAsc());
    }

    /** PUT /api/admin/souls/{id} - create or update one of soul-1..soul-4 (JWT protected). */
    @PutMapping("/admin/souls/{id}")
    public ResponseEntity<?> updateSoul(@PathVariable String id, @RequestBody EditorialSoul updates) {
        Matcher matcher = SOUL_ID.matcher(id);
        if (!matcher.matches()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(java.util.Map.of("message", "ID non valido: usare soul-1, soul-2, soul-3 o soul-4."));
        }

        EditorialSoul soul = soulRepository.findById(id).orElseGet(EditorialSoul::new);
        soul.setId(id);
        soul.setOrderIndex(Integer.parseInt(matcher.group(1)));
        soul.setTag(updates.getTag());
        soul.setTitle(updates.getTitle());
        soul.setShortDescription(updates.getShortDescription());
        soul.setFullDescription(updates.getFullDescription());
        soul.setImageUrl(updates.getImageUrl());

        return ResponseEntity.ok(soulRepository.save(soul));
    }
}
