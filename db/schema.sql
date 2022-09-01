DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(30),
   salary DECIMAL NOT NULL,
   department_id INT UNSIGNED NOT NULL,
   INDEX dep_ind (department_id),
   CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employees(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    roles_id INT UNSIGNED NOT NULL,
    INDEX role_ind (roles_id),
    CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE CASCADE  
);