const Employee = require("../models")
const employees = require("../mock.js");

exports.getAllEmployees = () => {
    return employees;
}

exports.getEmployeeById = (id) => {
    return employees.find(n => id === n.id);
}

exports.createEmployee = (id, name, stillEmployee) => {
    const newEmployee = new Employee(id, name, stillEmployee);
    return newEmployee;
}