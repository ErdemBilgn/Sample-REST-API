const express = require("express");

const controller = require("../controller")

const router = express.Router();

router.route("/employees").get(controller.authController.getAllEmployees);

module.exports = router;