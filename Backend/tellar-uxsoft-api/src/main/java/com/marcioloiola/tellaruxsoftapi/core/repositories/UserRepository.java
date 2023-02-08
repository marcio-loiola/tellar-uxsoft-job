package com.marcioloiola.tellaruxsoftapi.core.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.marcioloiola.tellaruxsoftapi.core.models.PUser;

@Repository
public interface UserRepository extends JpaRepository<PUser, UUID> {

    Optional<PUser> findByCpf(String cpf);

    Boolean existsByCpf(String cpf);

    Boolean existsByEmail(String email);

    Optional<PUser> findByEmail(String email);

    Boolean existsById (PUser id);

    PUser deleteById (PUser id);

}
