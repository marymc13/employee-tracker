INSERT INTO department (department_name)
VALUES
('Sales'),
('Service'),
('Repairs'),
('Returns'),

INSERT INTO roles (title, salary, department_id)
('Sales Supervisor', 90000, 1),
('Sales Associate', 60000, 1),
('Customer Service', 70000, 2),
('Product Repair', 75000, 3),
('Returns Coordinator', 80000, 4),
('Returns Associate', 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
('Mark', 'Wallace', 1, 1),
('James', 'Smith', 1, NULL),
('Mary', 'Swanson', 2, NULL),
('John', 'Barnes', 3, NULL),
('Bill', 'Monty', 4, NULL),
('Lori', 'Williams', 4, 5); 





