package com.velora.controller;

import com.velora.dto.LoginRequest;
import com.velora.dto.LoginResponse;
import com.velora.security.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            String cleanUser = loginRequest.getUsername() != null ? loginRequest.getUsername().trim() : "";
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            cleanUser,
                            loginRequest.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String canonicalUsername = authentication.getName();
            String jwt = tokenProvider.generateToken(canonicalUsername, "ADMIN");
            return ResponseEntity.ok(new LoginResponse(jwt, canonicalUsername, "ADMIN"));
        } catch (Exception ex) {
            return ResponseEntity.status(401).body(Map.of("message", "Credenziali errate. Verifica username e password/PIN."));
        }
    }
}

