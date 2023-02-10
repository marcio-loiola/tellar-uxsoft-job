package com.marcioloiola.tellaruxsoftapi.core.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Table(name = "projects")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Project {

    @Id
    @Column(name = "id", updatable = false, unique = true, nullable = false)
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    /*
     espaço para upar um arquivo em pdf,
    */

    @NotBlank(message = "Informe o nome do projeto")
    @Column(name = "nome", nullable = false)
    private String nome;

    @NotBlank(message = "Informe o nome do responsável")
    @Column(name = "responsavel", nullable = false)
    private String responsavel;

    @NotBlank(message = "Informe o telefone do responsável")
    @Column(name = "telefone", nullable = false)
    private String telefone;

    @NotBlank(message = "O projeto precisa ter um estado")
    @Column(name = "estado", nullable = false)
    private String estado;

    @NotBlank(message = "O projeto precisa ter um CEP")
    @Size(min= 5, max = 8, message = "Número de CEP inválido")
    @Column(name = "cep", nullable = false)
    private String cep;

    @NotBlank(message = "O projeto precisa ter uma cidade")
    @Column(name = "cidade", nullable = false)
    private String cidade;

    @NotBlank(message = "O projeto precisa ter um bairro")
    @Column(name = "bairro", nullable = false)
    private String bairro;

    @NotBlank(message = "O projeto precisa ter um endereço")
    @Column(name = "endereco", nullable = false)
    private String endereco;

    @NotBlank(message = "O projeto precisa ter um número")
    @Column(name = "numero", nullable = false)
    private String numero;

    @NotBlank(message = "O projeto precisa ter um complemento")
    @Column(name = "complemento", nullable = false)
    private String complemento;

    @NotBlank(message = "Informe a concessionária de energia")
    @Column(name = "concessionaria", nullable = false)
    private String concessionaria;

    @NotBlank(message = "Informe a potência total do projeto")
    @Column(name = "potencia", nullable = false)
    private String potencia;

    public Project (String responsavel, String telefone, String estado, String cep, String cidade, String bairro, String endereco, String numero, String complemento, String concessionaria, String potencia) {
        this.responsavel = responsavel;
        this.telefone = telefone;
        this.estado = estado;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.concessionaria = concessionaria;
        this.potencia = potencia;
    }


}
