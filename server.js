const mysql = require('mysql2');
const { prompt } = require('inquirer');
const db = require('./db');
const cTable = require('console.table');

init();

function init() {
    loadPrompts();
}

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
            name: "department_name",
            message: "What is the name of the department?"
        }
    ])
        .then(res => {
            let department_name = res;
            db.createDepartment(department_name)
                .then(() => console.log(`Added ${department_name} to database`))

                .then(() => loadPrompts());
        })
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
                    message: "What is the salary?"
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
 async function getAllRoles() {
    let allRoles = await db.findAllRoles()
    console.log(allRoles[0]);
    const modifiedRoles = allRoles[0].map((role) => ({
                    name: role.title,
                    value: role.id
                    
                }
                
                ) 
    )
    console.log(modifiedRoles);
    return modifiedRoles

}
//Add Employee
function addEmployee() {
    prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
        },
        {
            name: "title",
            type: "input",
            message: "What is the employee's title?"
        },
        {
            name: "roles_id",
            type: "list",
            message: "What is the employee's new role?",
            choices: getAllRoles
        }

    ])

        .then(async (res) => {
            console.log(res);
            // let firstName = res.first_name;
            // let lastName = res.last_name;
            // let role = res.roles_id
         let storedData = await db.createEmployee(res)
         console.log(storedData);
         loadPrompts()

           
        })


}
function updateEmployeeRole() {
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
            name: "roles_id",
            type: "list",
            message: "What is the employee's new role?",
            choices: getAllRoles
        }
    ])
            .then(async (employee)  => {
                let updatedData = await db.updateEmployeeRole(employee);
                loadPrompts()
                    // .then((roles) => console.log(`Updated ${roles} to the database.`))
                    // .then(() => loadPrompts())
            })
            
        }








