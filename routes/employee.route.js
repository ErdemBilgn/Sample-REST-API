const express = require("express");

const controller = require("../controller")

const router = express.Router();

router.route("/").get(controller.employeeController.getAllEmployees);
router.route("/:id").get(controller.employeeController.getEmployeeById);
router.route("/").post(controller.employeeController.createEmployee);

module.exports = router;