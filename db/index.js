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
            "SELECT department.id, department.name FROM department;"
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
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id; "
    );
};
//New Role
createRole(role) {
    return this.connection
    .promise()
    .query(
        "INSERT INTO role SET ?", role); 
};

//All Employees
findAllEmployees() {
    return this.connection
    .promise()
    .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    )
}
//New Employee
createEmployee(employee) {
    return this.connection
    .promise()
    .query(
        "INSERT INTO employee SET ?", employee)
}

//Update Employee Role
updateEmployeeRole(employeeId, roleId) {
    return this.connection
    .promise()
    .query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleId, employeeId]
    );
}

}
module.exports = new DB(connection);
