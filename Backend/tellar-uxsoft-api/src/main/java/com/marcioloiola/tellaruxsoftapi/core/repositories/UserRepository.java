package com.marcioloiola.tellaruxsoftapi.core.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.marcioloiola.tellaruxsoftapi.core.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

    Optional<User> findByCpf(String cpf);

    Boolean existsByCpf(String cpf);

    Boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    Boolean existsById (User id);

    User deleteById (User id);

    void deleteById(Long id);
}
