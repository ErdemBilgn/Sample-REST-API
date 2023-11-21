
const fs = require("fs");
const Employee = require("../models")
const path = require('path');
const dbPath = path.join(__dirname, '..', 'db.json');

exports.getAllEmployees = async () => {
    try{   
        const jsonString = await fs.readFileSync(dbPath, "utf-8");
        const data = JSON.parse(jsonString);
        return data;
    } catch(err) {
        console.log(err);
    }
}


exports.getEmployeeById = async (id) => {
    try{
        const jsonString = await fs.readFileSync(dbPath, "utf-8");
        const data = JSON.parse(jsonString);
        return data.find(n => id === n.id);
    }catch(err){
        console.log(err);
    }
}

exports.getEmployeeIndexById = async (id) => {
    try{
        const jsonString = await fs.readFileSync(dbPath, "utf-8");
        const data = JSON.parse(jsonString);
        return data.findIndex(n => id === n.id);
    }catch(err){
        console.log(err);
    }
    
}

exports.createEmployee = (id, name, age, stillEmployee) => {
    const newEmployee = new Employee(id, name, age, stillEmployee);
    return newEmployee;
}



