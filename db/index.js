const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
//All Departments
    findAllDepartments() {
        return this.connection
        .promise()
        .query(
            "SELECT department.id, department.department_name FROM department;"
        );
    }
//New Department
createDepartment(department) {
    return this.connection
    .promise()
    .query(
        "INSERT INTO department SET ?", department);
};

//All Roles
findAllRoles() {
    return this.connection
    .promise()
    .query(
        "SELECT roles.id, roles.title, department.department_name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id; "
    );
};
//New Role
createRole(role) {
    return this.connection
    .promise()
    .query(
        "INSERT INTO roles SET ?", role); 
};

//All Employees
findAllEmployees() {
    return this.connection
    .promise()
    .query(
        "SELECT employees.first_name, employees.last_name, roles.title, department.department_name AS department, roles.salary FROM employees left join roles on employees.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id;"
    )
}
//New Employee
createEmployee(employees) {
    return this.connection
    .promise()
    .query(
        "INSERT INTO employees SET ?", employees)
}

//Update Employee Role
updateEmployeeRole(employeeId, roleId) {
    return this.connection
    .promise()
    .query(
        "UPDATE employees SET roles_id = ? WHERE id = ?",
        [roleId, employeeId]
    );
}

}
module.exports = new DB(connection);
