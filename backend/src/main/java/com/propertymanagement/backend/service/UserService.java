package com.propertymanagement.backend.service;

import org.springframework.stereotype.Service;
import com.propertymanagement.backend.repository.UserRepository;
import com.propertymanagement.backend.model.User;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User registerUser(User user) {

        if(userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Unable to complete registration with the provided information.");
        }

        if(user.getPassword() == null || user.getPassword().isEmpty()) {
            user.setPassword("user123");
        }
        return userRepository.save(user);
    }
}
