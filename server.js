
const { prompt } = require('inquirer');
const db = require('./db');
require('console.table');


//init();


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
            value: "update_employee"
        },
        {
            name: "Quit",
            value: "quit"
        }
    ]
}
]).then
}


