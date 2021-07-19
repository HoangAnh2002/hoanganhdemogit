package com.hoanganh.fullstackwithangular_hoanganh.service;

import com.hoanganh.fullstackwithangular_hoanganh.exception.UserNotFoundException;
import com.hoanganh.fullstackwithangular_hoanganh.model.Employee;
import com.hoanganh.fullstackwithangular_hoanganh.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public List<Employee> findAllEmployee() {
        return employeeRepository.findAll();
    }

    public Employee findEmployeeByName(String name) {
        return employeeRepository.findEmployeeByName(name);
    }

    public Employee findEmployeeById(long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User by " + id + "didnt found"));
    }

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    public Employee uppdateEmployee(Employee employee , long id) {

        Employee employee1 = employeeRepository.findEmployeeById(id).orElse(employee);
        employee1.setName(employee.getName());
        employee1.setEmail(employee.getEmail());
        employee1.setPhone(employee.getPhone());
        return employeeRepository.save(employee1);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

}
