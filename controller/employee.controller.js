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
    res.send(employee);
}

exports.createEmployee = (req,res) => {
    const data = req.body;
    const {name, age, stillEmployee} = data;
    const newId = idCreator.generateUniqueId();
    console.log(newId);
    // İsim kontrolü
    if(!name) {
        res.status(400).send("Lütfen bir isim giriniz!");
        return;
    } else {
        if (!(typeof name === "string")){
            res.status(400).send("Lütfen geçerli bir isim giriniz!");
            return;
        } 
    }

    // Yaş kontrolü
    if(!age) {
        res.status(400).send("Lütfen bir yaş giriniz!");
        return;
    } else {
        if (!(typeof age === "number")){
            res.status(400).send("Lütfen geçerli bir yaş giriniz!");
            return;
        } 
    }

    // Hala çalışan mı kontrolü

    if(!stillEmployee) {
        res.status(400).send("Lütfen çalışanın hala çalışıp çalışmadığını belirtiniz!");
        return;
    } else {
        if (!(typeof stillEmployee === "boolean")){
            res.status(400).send("Lütfen çalışanın hala çalışıp çalışmadığını istenilen formatta belirtiniz!");
            return;
        } 
    }

    const employee = employeeService.createEmployee(newId, name, age, stillEmployee);
    if(employee){
        console.log(employee);
        employees.push(employee);
        res.status(201).send("employee created");
    }  

}

exports.updateEmployee = (req,res) => {
    const paramId = parseInt(req.params.id);
    const data = req.body;
    const employeeIndex = employeeService.getEmployeeIndexById(paramId);
    if(employeeIndex > -1) {
        const {name, age, stillEmployee} = data;
        const employeeToUpdate = new Employee(paramId, name, age, stillEmployee);
        employees[employeeIndex] = employeeToUpdate;
        res.status(202).send("Employee Updated");
    }
    
}


exports.deleteEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const employeeIndex = employeeService.getEmployeeIndexById(id);
    if(employeeIndex > -1){
        console.log(employeeIndex)
        employees.splice(employeeIndex, 1);
        res.status(200).send("employee Deleted");
    }
}