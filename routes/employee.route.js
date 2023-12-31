const express = require("express");

const controller = require("../controller")

const router = express.Router();

const middlewares = require("../middlewares");

router.route("/").get(controller.employeeController.getAllEmployees); // Bütün çalışanları getir.
router.route("/:id").get(controller.employeeController.getEmployeeById); // Id'si verilen çalışanı getir.
router.route("/").post(middlewares.postDataChecker.checkPostData,controller.employeeController.createEmployee); // Çalışan oluştur
router.route("/:id").delete(controller.employeeController.deleteEmployee);// Id'si verilen Çalışan Sil
router.route("/:id").put(middlewares.postDataChecker.checkPostData,controller.employeeController.updateEmployee); // Id'si verilen çalışanı güncelle


module.exports = router;