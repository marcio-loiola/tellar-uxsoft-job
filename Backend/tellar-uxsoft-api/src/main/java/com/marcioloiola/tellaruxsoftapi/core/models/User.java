package com.marcioloiola.tellaruxsoftapi.core.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import org.hibernate.validator.constraints.br.CPF;


import java.util.UUID;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


import jakarta.persistence.Entity;
@Entity

@Table(name = "users")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @Column(name = "id", updatable = false, unique = true, nullable = false)
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    @NotBlank( message = "O nome não pode estar vazio")
    @Column(name = "nome", nullable = false)
    private String name;

    @NotBlank(message = "CPF Inválido")
    @Size(min= 11, max = 14, message = "Número de CPF inválido")
    @CPF(message = "CPF Inválido")
    @Column(name = "cpf", unique = true, nullable = false)
    private String cpf;
    @NotBlank(message = "A senha não pode estar vazia")
    @Column( name = "senha", nullable = false)

    private String password;

    @Transient
    private String confirmPassword;

    @NotBlank( message = "Email não pode estar vazio")
    @Email( message = "Email inválido")
    @Column(unique = true, nullable = false)
    private String email;

    @NotBlank(message = "Telefone não pode estar vazio")
    @Column(name = "telefone", nullable = false)
    private String telefone;

    @NotBlank(message = "Endereço não pode estar vazio")
    @Column(name = "endereco", nullable = false)
    private String address;

    @NotBlank(message = "O projeto precisa ter um CEP")
    @Size(min= 5, max = 8, message = "Número de CEP inválido")
    @Column(name = "cep", nullable = false)
    private String cep;
    private String cidade;
    private String bairro;
    private String complemento;

    private String numero;

    public User(String name, String cpf, String email, String password, String confirmPassword, String telefone, String address, String cep, String cidade, String bairro, String complemento, String numero) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.cpf = cpf;
        this.telefone = telefone;
        this.address = address;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.complemento = complemento;
        this.numero = numero;
    }





}
