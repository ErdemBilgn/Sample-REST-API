require("dotenv").config();
const { employeeService, idCreator } = require("../services");
const fs = require("fs");
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db.json');


// Bütün çalışanları getir
exports.getAllEmployees = async (req,res) => {
    const employees = await employeeService.getAllEmployees();
    res.status(200).send(employees); 
}

// Idsi verilen çalışanı getir
exports.getEmployeeById = async (req,res) => {
    const id = parseInt(req.params.id);
    const employee = await employeeService.getEmployeeById(id);
    if(employee) {
        res.status(200).send(employee);
    }else {
        res.status(404).send("Employee could not found!")
    }
}

// Çalışan oluştur
exports.createEmployee = async (req,res) => {
    try{
        const dbDataString = fs.readFileSync(dbPath, "utf-8");
        const dbData = JSON.parse(dbDataString);
        const data = req.body;
        const newId = await idCreator.generateUniqueId();   
        const {name, age, stillEmployee} = data;
        const employee = await employeeService.createEmployee(newId, name, age, stillEmployee);
        if(employee){
            dbData.push(employee)
            const dbDataStr = JSON.stringify(dbData, null, 2);
            fs.writeFileSync(dbPath,dbDataStr);
            res.status(201).send(`Employee Created with an id of ${employee.id}!`);
        }  
    } catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }


}

//Idsi verilen çalışanı güncelle
exports.updateEmployee = async (req,res) => {
    try{
        const dbDataString = fs.readFileSync(dbPath, "utf-8");
        const dbData = JSON.parse(dbDataString);
        const paramId = parseInt(req.params.id);
        const data = req.body;
        const employeeIndex = await employeeService.getEmployeeIndexById(paramId);
        console.log(employeeIndex);
        if(employeeIndex > -1) {
            const {name, age, stillEmployee} = data;
            const employeeToUpdate = employeeService.createEmployee(paramId, name, age, stillEmployee);
            dbData[employeeIndex] = employeeToUpdate;
            const dbDataStr = JSON.stringify(dbData, null, 2);
            fs.writeFileSync(dbPath,dbDataStr);
            res.status(202).send(`Employee updated with an id of ${paramId}!`);
        }else {
            res.status(404).send("Employee could not found!")
        }
    } catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }

    
}

// Idsi verilen Çalışanı sil
exports.deleteEmployee = async (req, res) => {
    const dbDataString = fs.readFileSync(dbPath, "utf-8");
    const dbData = JSON.parse(dbDataString);
    const id = parseInt(req.params.id);
    const employeeIndex = await employeeService.getEmployeeIndexById(id);
    if(employeeIndex > -1){
        dbData.splice(employeeIndex, 1);
        const dbDataStr = JSON.stringify(dbData, null, 2);
        fs.writeFileSync(dbPath,dbDataStr);
        res.status(200).send(`Employee Deleted with an id of ${id}!`);
    }else {
        res.status(404).send("Employee could not found!");
    }
}
