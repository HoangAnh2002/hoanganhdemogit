package com.hoanganh.fullstackwithangular_hoanganh.repository;


import com.hoanganh.fullstackwithangular_hoanganh.model.details.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByUserName(String username);
}
