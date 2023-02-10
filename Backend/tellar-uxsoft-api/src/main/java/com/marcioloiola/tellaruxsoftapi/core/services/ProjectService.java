package com.marcioloiola.tellaruxsoftapi.core.services;

import com.marcioloiola.tellaruxsoftapi.core.models.Project;
import com.marcioloiola.tellaruxsoftapi.core.dtos.ProjectDto;
import com.marcioloiola.tellaruxsoftapi.core.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public ProjectDto createProject (Project project){
        project = projectRepository.save(project);
        return convertToDto(project);
    }

    public List<ProjectDto> findAllProjects(){
        List<Project> projects = projectRepository.findAll();
        return convertListToDto(projects);
    }

    public ProjectDto findProjectById(UUID id) {
        Optional<Project> optional = projectRepository.findById(id);
        return optional.map(this::convertToDto).orElse(null);
    }

    public ProjectDto updateById(Project projectForm, UUID id) {
        Optional<Project> op = projectRepository.findById(id);
        if (op.isPresent()) {
            Project obj = op.get();
            if (projectForm.getNome() != null) {
                obj.setNome(projectForm.getNome());
            }
            if (projectForm.getEstado() != null) {
                obj.setEstado(projectForm.getEstado());
            }
            if (projectForm.getTelefone() != null) {
                obj.setTelefone(projectForm.getTelefone());
            }
            if (projectForm.getCep() != null) {
                obj.setCep(projectForm.getCep());
            }
            if (projectForm.getBairro() != null) {
                obj.setBairro(projectForm.getBairro());
            }
            if (projectForm.getEndereco() != null) {
                obj.setEndereco(projectForm.getEndereco());
            }
            if (projectForm.getNumero() != null) {
                obj.setNumero(projectForm.getNumero());
            }
            if (projectForm.getComplemento() != null) {
                obj.setComplemento(projectForm.getComplemento());
            }
            if (projectForm.getEstado() != null) {
                obj.setEstado(projectForm.getEstado());
            }
            if (projectForm.getPotencia() != null) {
                obj.setPotencia(projectForm.getPotencia());
            }
            projectRepository.save(obj);
            return convertToDto(obj);
        }
        return null;
    }

    public void deleteProject (UUID id)
    {
        if (projectRepository.existsById(id)) {
            projectRepository.deleteById(id);
        }
    }

    public ProjectDto convertToDto(Project project) {
        ProjectDto projectDto = new ProjectDto();
        projectDto.setId(project.getId());
        projectDto.setNome(project.getNome());
        projectDto.setTelefone(project.getTelefone());
        projectDto.setCep(project.getCep());
        projectDto.setCidade(project.getCidade());
        projectDto.setEstado(project.getEstado());
        projectDto.setBairro(project.getBairro());
        projectDto.setEndereco(project.getEndereco());
        projectDto.setNumero(project.getNumero());
        projectDto.setComplemento(project.getComplemento());
        projectDto.setPotencia(project.getPotencia());
        return projectDto;
    }

    public List<ProjectDto> convertListToDto(List<Project> projects) {
        return projects.stream().map(this::convertToDto).collect(Collectors.toList());
    }


}
