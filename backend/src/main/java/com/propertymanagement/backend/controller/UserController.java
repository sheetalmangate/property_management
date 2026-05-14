package com.propertymanagement.backend.controller;

import com.propertymanagement.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.propertymanagement.backend.model.User;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService ) {

        this.userService = userService;
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello Sheetal";
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user ) {

        User createdUser = userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);

    }
}
