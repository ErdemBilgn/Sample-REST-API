require("dotenv").config();
const { employeeService, idCreator } = require("../services");
const employees = require("../mock.js");
const Employee = require("../models/employee.js");

exports.getAllEmployees = (req,res) => {
    const employees = employeeService.getAllEmployees();
    res.send(employees); 
}

exports.getEmployeeById = (req,res) => {
    const id = parseInt(req.params.id);
    const employee = employeeService.getEmployeeById(id);
    if(employee) {
        res.send(employee);
    }else {
        res.status(404).send("Çalışan Bulunamadı!!")
    }
}

exports.createEmployee = (req,res) => {
    try{
        const data = req.body;
        const newId = idCreator.generateUniqueId();   
        const {name, age, stillEmployee} = data;
        const employee = employeeService.createEmployee(newId, name, age, stillEmployee);
        if(employee){
            employees.push(employee);
            res.status(201).send("Employee created!");
        }  
    } catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }


}

exports.updateEmployee = (req,res) => {
    try{
        const paramId = parseInt(req.params.id);
        const data = req.body;
        const employeeIndex = employeeService.getEmployeeIndexById(paramId);
        console.log(employeeIndex);
        if(employeeIndex > -1) {
            const {name, age, stillEmployee} = data;
            const employeeToUpdate = new Employee(paramId, name, age, stillEmployee);
            employees[employeeIndex] = employeeToUpdate;
            res.status(202).send("Employee Updated!");
        }else {
            res.status(404).send("Çalışan Bulunamadı!!")
        }
    } catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }

    
}


exports.deleteEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const employeeIndex = employeeService.getEmployeeIndexById(id);
    if(employeeIndex > -1){
        console.log(employeeIndex)
        employees.splice(employeeIndex, 1);
        res.status(200).send("Employee Deleted!");
    }else {
        res.status(404).send("Çalışan Bulunamadı!!");
    }
}
