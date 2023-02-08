package com.marcioloiola.tellaruxsoftapi.core.models;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import javax.persistence.*;

/*@Entity
@Table(name = "users")*/
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
    private String name;
    private String cpf;

    private String email;
    private String password;
    private String confirmPassword;



    public User (String name, String cpf, String email, String password, String confirmPassword) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.cpf = cpf;
    }

}
