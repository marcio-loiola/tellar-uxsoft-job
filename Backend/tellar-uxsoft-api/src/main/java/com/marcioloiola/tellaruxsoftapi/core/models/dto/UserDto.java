package com.marcioloiola.tellaruxsoftapi.core.models.dto;

import lombok.Data;
import com.marcioloiola.tellaruxsoftapi.core.models.User;

import java.util.UUID;

@Data
public class UserDto {

    private UUID id;
    private String cpf;
    private String name;
    private String email;
    private String telefone;
    private String address;
    private String cep;
    private String cidade;
    private String bairro;
    private String complemento;
    private int numero;
    public UserDto() {

    }
    public UserDto (User user) {
        this.cpf = user.getCpf();
        this.name = user.getName();
        this.email = user.getEmail();
        this.telefone = user.getTelefone();
        this.address = user.getAddress();
        this.cep = user.getCep();
        this.cidade = user.getCidade();
        this.bairro = user.getBairro();
        this.complemento = user.getComplemento();
        this.numero = user.getNumero();
    }
}
