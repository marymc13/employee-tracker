use tracker;

INSERT INTO department (department_name)
VALUES
('Sales'),
('Service'),
('Repairs'),
('Returns');


INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Supervisor', 90000, 1),
('Sales Associate', 60000, 1),
('Customer Service', 70000, 2),
('Product Repair', 75000, 3),
('Returns Coordinator', 80000, 4),
('Returns Associate', 60000, 4);

INSERT INTO employees (first_name, last_name, roles_id)
VALUES
('Mark', 'Wallace', 1),
('James', 'Smith', 1),
('Mary', 'Swanson', 2),
('John', 'Barnes', 3),
('Bill', 'Monty', 4),
('Lori', 'Williams', 4); 





