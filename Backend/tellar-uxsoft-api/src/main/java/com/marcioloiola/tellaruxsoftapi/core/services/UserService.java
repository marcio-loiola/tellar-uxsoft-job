package com.marcioloiola.tellaruxsoftapi.core.services;

import com.marcioloiola.tellaruxsoftapi.core.models.User;
import com.marcioloiola.tellaruxsoftapi.core.dtos.UserDto;
import com.marcioloiola.tellaruxsoftapi.core.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public UserDto createUser(User user) {
        user = userRepository.save(user);
        return convertToDto(user);
    }

    public List<UserDto> findAllUsers() {
        List<User> users = userRepository.findAll();
        return convertListToDto(users);
    }

    public UserDto findUserById(UUID id) {
        Optional<User> optional = userRepository.findById(id);
        return optional.map(this::convertToDto).orElse(null);
    }

    public UserDto updateById(User userForm, UUID id) {
        Optional<User> op = userRepository.findById(id);
        if (op.isPresent()) {
            User obj = op.get();
            if (userForm.getName() != null) {
                obj.setName(userForm.getName());
            }
            if (userForm.getEmail() != null) {
                obj.setEmail(userForm.getEmail());
            }
            if (userForm.getCpf() != null) {
                obj.setCpf(userForm.getCpf());
            }

            if (userForm.getAddress() != null) {
                obj.setAddress(userForm.getAddress());
            }
            if (userForm.getComplemento() != null) {
                obj.setComplemento(userForm.getComplemento());
            }
            if (userForm.getCep() != null) {
                obj.setCep(userForm.getCep());
            }
            if (userForm.getTelefone() != null) {
                obj.setTelefone(userForm.getTelefone());
            }
            if (userForm.getCidade() != null) {
                obj.setCidade(userForm.getCidade());
            }

            if (userForm.getNumero() != null) {
                obj.setNumero(userForm.getNumero());
            }
            if (userForm.getBairro() != null) {
                obj.setBairro(userForm.getBairro());
            }


            userRepository.save(obj);
            return convertToDto(obj);
        }
        return null;
    }

    public void deleteUser(UUID id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }
    }

    public UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setCpf(user.getCpf());
        userDto.setEmail(user.getEmail());
        userDto.setTelefone(user.getTelefone());
        userDto.setCep(user.getCep());
        userDto.setAddress(user.getAddress());
        userDto.setCidade(user.getCidade());
        userDto.setBairro(user.getBairro());
        userDto.setComplemento(user.getComplemento());
        userDto.setNumero(user.getNumero());
        return userDto;
    }

    private static List<UserDto> convertListToDto(List<User> users) {
        return users.stream().map(UserDto::new).collect(Collectors.toList());
    }


}




