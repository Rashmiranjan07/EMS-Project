package net.javaguides.ems_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.ems_backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	

}
