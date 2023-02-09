package com.marcioloiola.tellaruxsoftapi.core.controllers;


import com.marcioloiola.tellaruxsoftapi.core.models.User;
import com.marcioloiola.tellaruxsoftapi.core.models.dto.UserDto;
import com.marcioloiola.tellaruxsoftapi.core.services.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.marcioloiola.tellaruxsoftapi.core.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {


    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<UserDto> listUsers() {
        return userService.listUsers();
    }

    @GetMapping("/{id}")
    public UserDto findUserById(@PathVariable("id") User id) {
        return userService.findUserById(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public UserDto register (@RequestBody @Valid User user) {
        return userService.createUser(user);
    }

    @DeleteMapping
    public void deleteUser(@RequestBody User user) {
        userRepository.delete(user);
    }


}
