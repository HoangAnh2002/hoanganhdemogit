package com.hoanganh.fullstackwithangular_hoanganh.repository;

import com.hoanganh.fullstackwithangular_hoanganh.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    Employee findEmployeeByName(String name);
    Optional<Employee> findEmployeeById(long id);
}
