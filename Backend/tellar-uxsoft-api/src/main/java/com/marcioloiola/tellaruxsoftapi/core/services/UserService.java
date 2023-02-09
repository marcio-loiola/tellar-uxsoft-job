package com.marcioloiola.tellaruxsoftapi.core.services;

import com.marcioloiola.tellaruxsoftapi.core.models.User;
import com.marcioloiola.tellaruxsoftapi.core.models.dto.UserDto;
import com.marcioloiola.tellaruxsoftapi.core.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public UserDto createUser(User user) {
        user = userRepository.save(user);
        return convertToDto(user);
    }
    public List<UserDto> listUsers() {
        List<User> users = userRepository.findAll();
        return convertToDto(users);
    }

    public List<UserDto> findUserById(User user) {
        List<User> users = userRepository.findById(user);
        if (optional.isPresent()) {
            return convertToDto(optional.get());
        }
        return null;
    }

    public List<UserDto> findUserByCpf(User user) {
        List<User> users = userRepository.findByCpf(user);
        if (optional.isPresent()) {
            return convertToDto(optional.get());
        }
        return null;
    }


    public void deleteById(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }
    }


    public UserDto convertToDto(List<User> user) {
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




