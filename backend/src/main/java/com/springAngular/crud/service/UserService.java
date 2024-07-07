package com.springAngular.crud.service;

import java.util.List;

import com.springAngular.crud.entity.User;

public interface UserService {

    User createUser(User user);

    User updateUser(User user);

    User getUserById(Long id);

    List<User> getAllUsers();

    void deleteUser(Long id);

}
