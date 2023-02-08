package com.marcioloiola.tellaruxsoftapi.core.controllers;


import com.marcioloiola.tellaruxsoftapi.core.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public List<User> listUsers() {
        return List.of(new User());
    }
}
