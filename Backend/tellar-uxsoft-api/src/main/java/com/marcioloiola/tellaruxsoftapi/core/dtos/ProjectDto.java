package com.marcioloiola.tellaruxsoftapi.core.dtos;

import lombok.Data;
import com.marcioloiola.tellaruxsoftapi.core.models.Project;

import java.util.UUID;
@Data
public class ProjectDto {

    private UUID id;
    private String nome;

    private String telefone;
    private String estado;
    private String cep;
    private String cidade;
    private String bairro;
    private String endereco;
    private String numero;
    private String complemento;
    private String potencia;

    public ProjectDto() {

    }

    public ProjectDto (Project project) {
        this.id = project.getId();
        this.nome = project.getNome();
        this.telefone = project.getTelefone();
        this.estado = project.getEstado();
        this.cep = project.getCep();
        this.cidade = project.getCidade();
        this.bairro = project.getBairro();
        this.endereco = project.getEndereco();
        this.numero = project.getNumero();
        this.complemento = project.getComplemento();
        this.potencia = project.getPotencia();
    }
}
