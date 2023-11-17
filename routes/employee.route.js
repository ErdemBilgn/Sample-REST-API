const express = require("express");

const controller = require("../controller")

const router = express.Router();

const middlewares = require("../middlewares");

router.route("/").get(controller.employeeController.getAllEmployees);
router.route("/:id").get(controller.employeeController.getEmployeeById);
router.route("/").post(middlewares.postDataChecker.checkPostData,controller.employeeController.createEmployee);
router.route("/:id").delete(controller.employeeController.deleteEmployee);
router.route("/:id").put(middlewares.postDataChecker.checkPostData,controller.employeeController.updateEmployee);


module.exports = router;