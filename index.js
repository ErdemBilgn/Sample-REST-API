const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes")
const PORT = 3000;
const app = express();



app.get("/", (req,res) => {
    res.send("Working");
})

app.use(bodyParser.json());
app.use("/v1/api", routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

