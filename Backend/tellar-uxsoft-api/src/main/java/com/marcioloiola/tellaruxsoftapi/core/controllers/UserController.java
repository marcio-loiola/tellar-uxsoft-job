package com.marcioloiola.tellaruxsoftapi.core.controllers;


import com.marcioloiola.tellaruxsoftapi.core.models.PUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.marcioloiola.tellaruxsoftapi.core.repositories.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<PUser> listUsers() {
        return userRepository.findAll();
    }
}
