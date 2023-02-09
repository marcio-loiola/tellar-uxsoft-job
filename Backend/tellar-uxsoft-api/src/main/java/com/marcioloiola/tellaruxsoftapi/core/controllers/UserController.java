package com.marcioloiola.tellaruxsoftapi.core.controllers;


import com.marcioloiola.tellaruxsoftapi.core.models.User;
import com.marcioloiola.tellaruxsoftapi.core.dtos.UserDto;
import com.marcioloiola.tellaruxsoftapi.core.services.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import jakarta.validation.Valid;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {


    @Autowired
    private UserService userService;


    @GetMapping
    public List<UserDto> listUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/users/{id}")
    public UserDto findUserById(@PathVariable("id") UUID id) {
        return userService.findUserById(id);
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public UserDto register (@RequestBody @Valid User user) {
        return userService.createUser(user);
    }

    @PutMapping("/edit/{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public UserDto updateById(@RequestBody User userForm, @PathVariable("id") UUID id) {
        return userService.updateById(userForm, id);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public void deleteUser(@PathVariable UUID id) {
        userService.deleteUser(id);
    }


}
