const { employeeService } = require("../services");
const employees = require("../mock.js");


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
    const id = req.body.id;
    const name = req.body.name;
    const stillEmployee = req.body.stillEmployee;
    const employee = employeeService.createEmployee(id, name, stillEmployee);
    if(employee){
        console.log(employee);
        employees.push(employee);
        res.status(201).send("employee created");
    }  

}