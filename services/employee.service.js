const Employee = require("../models")
const employees = require("../mock.js");

exports.getAllEmployees = () => {
    return employees;
}

exports.getEmployeeById = (id) => {
    return employees.find(n => id === n.id);
}

exports.getEmployeeIndexById = (id) => {
    return employees.findIndex(n => id === n.id);
}

exports.createEmployee = (id, name, age, stillEmployee) => {
    const newEmployee = new Employee(id, name, age, stillEmployee);
    return newEmployee;
}

