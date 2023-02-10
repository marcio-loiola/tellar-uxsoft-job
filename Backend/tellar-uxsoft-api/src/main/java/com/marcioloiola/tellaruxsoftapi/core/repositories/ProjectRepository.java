package com.marcioloiola.tellaruxsoftapi.core.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.marcioloiola.tellaruxsoftapi.core.models.Project;


@Repository
public interface ProjectRepository extends JpaRepository<Project, UUID> {




}
