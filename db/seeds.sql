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

INSERT INTO employees (first_name, last_name, title, roles_id)
VALUES
('Mark', 'Wallace','Sales Supervisor', 1),
('James', 'Smith', 'Sales Associate',  1),
('Mary', 'Swanson', 'Customer Service', 2),
('John', 'Barnes', 'Product Repair', 3),
('Bill', 'Monty', 'Returns Coordinator', 4),
('Lori', 'Williams', 'Returns Associate', 4); 





