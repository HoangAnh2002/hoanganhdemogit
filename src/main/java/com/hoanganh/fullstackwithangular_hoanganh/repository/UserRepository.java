package com.hoanganh.fullstackwithangular_hoanganh.repository;

import com.hoanganh.fullstackwithangular_hoanganh.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findUserByEmail(String email);
}
