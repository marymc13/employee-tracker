
const { prompt } = require('inquirer');
const db = require('./db');
require('console.table');


//init();

//Choice List
function loadPrompts() {
    promp([
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
    function addRole () {
        
    }
    




