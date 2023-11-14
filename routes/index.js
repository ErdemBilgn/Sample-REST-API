const express = require("express");

const employeeRoute = require("./employee.route");

const router = express.Router();

router.use("/employees", employeeRoute);

module.exports = router;