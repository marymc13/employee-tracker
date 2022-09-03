
const { prompt } = require('inquirer');
const db = require('./db');
require('console.table');

loadPrompts();

//Choice List
function loadPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all Departments",
                    value: "view_departments"
                },
                {
                    name: "View all Roles",
                    value: "view_roles"
                },
                {
                    name: "View all Employees",
                    value: "view_employees"
                },
                {
                    name: "Add Department",
                    value: "add_department"
                },
                {
                    name: "Add Role",
                    value: "add_role"
                },
                {
                    name: "Add Employee",
                    value: "add_employee"
                },
                {
                    name: "Update Employee Role",
                    value: "update_employee_role"
                },
                {
                    name: "Quit",
                    value: "quit"
                }
            ]
        }
        // Call function from choice selection
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "view_departments":
                viewDepartments();
                break;
            case "view_roles":
                viewRoles();
                break;
            case "view_employees":
                viewEmployees();
                break;
            case "add_department":
                addDepartment();
                break;
            case "add_role":
                addRole();
                break;
            case "add_employee":
                addEmployee();
                break;
            case "update_employee_role":
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    })
}

//View Departments
function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => loadPrompts());
}

//Add Department
function addDepartment() {
    prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
        .then(res => {
            let name = res;
            db.createDepartment(name)
                .then(() => console.log(`Added ${name.name} to database`))
        })
        .then(() => loadPrompts());
}

//View Roles
function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => loadPrompts());
}

//Add a Role
function addRole() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, department_name }) => ({
                name: department_name,
                value: id
            }));

            prompt([
                {
                    name: "title",
                    message: "WHat is the name of the role?"
                },
                {
                    name: "salary",
                    message: "WHat is the salary?"
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "Which department has this role?",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.createRole(role)
                        .then(() => console.log(`Added ${role.title} to database`))
                        .then(() => loadPrompts())
                })
        })
}
//View Employees
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => loadPrompts());
}
//Add Employee
function addEmployee() {
    prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            name: "title",
            message: "What is the employee's title?",
        }
    ])
           // .then(res => {
              //  let firstName = res.first_name;
              //  let lastName = res.last_name;

                db.findAllRoles()
                    .then(([rows]) => {
                        let roles = rows;
                        const roleChoices = roles.map(({ id, title }) => ({
                            name: title,
                            value: id
                        }));
                        prompt({
                            type: "list",
                            name: "roleId",
                            message: "Which role does the title belong to?",
                            choices: roleChoices
                        })
                           // .then(res => {
                           //     let roleId = res.roleId;
                           // })
                    })

                    .then(employee => {
                        db.createEmployee(employee)
                            .then(() => console.log(`Added ${first_name} ${last_name} to the database`))
                            .then(() => loadPrompts())
                    })
            }
        
        







