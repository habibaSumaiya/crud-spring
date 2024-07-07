package com.springAngular.crud.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springAngular.crud.entity.User;
import com.springAngular.crud.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/add")
    public User createUser(@RequestBody User user) {
        userService.createUser(user);
        return user;
    }

    @GetMapping("/getuser")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/byId/{id}")
    public ResponseEntity <User> getUserById(@PathVariable Long id) {
       User user = userService.getUserById(id);
       if (user == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User existingUser = userService.getUserById(id);
        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }
        existingUser.setName(user.getName());
        existingUser.setGender(user.getGender());
        existingUser.setEmail(user.getEmail());
        existingUser.setAddress(user.getAddress());
        existingUser.setPhone(user.getPhone());

        User updatUser = userService.updateUser(existingUser);
        return ResponseEntity.ok(updatUser);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        User existingUser = userService.getUserById(id);
        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
       
    }

}
