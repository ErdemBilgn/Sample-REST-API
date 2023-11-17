require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes")
const middlewares = require("./middlewares");
const app = express();

app.use(bodyParser.json());
app.use(middlewares.headerChecker.checkHeaders);
app.use("/v1/api", routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

