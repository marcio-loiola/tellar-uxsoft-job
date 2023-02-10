package com.marcioloiola.tellaruxsoftapi.core.controllers;

import com.marcioloiola.tellaruxsoftapi.core.models.Project;
import com.marcioloiola.tellaruxsoftapi.core.dtos.ProjectDto;
import com.marcioloiola.tellaruxsoftapi.core.services.ProjectService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import jakarta.validation.Valid;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectService projService;

    @GetMapping
    public List<ProjectDto> listUsers() {
        return projService.findAllProjects();
    }

    @GetMapping("/projects/{id}")
    public ProjectDto findUserById(@PathVariable("id") UUID id) {
        return projService.findProjectById(id);
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public ProjectDto register(@RequestBody @Valid Project project) {
        return projService.createProject(project);
    }

    @PutMapping("/edit/{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public ProjectDto updateById(@RequestBody Project project, @PathVariable("id") UUID id) {
        return projService.updateById(project, id);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public void deleteUser(@PathVariable UUID id) {
        projService.deleteProject(id);

    }

}
