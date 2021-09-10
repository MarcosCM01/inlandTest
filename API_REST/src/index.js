const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
//require("dotenv").config();
//import routes/package
const packRoutes = require("./routes/package");

app.use(express.json());
app.use(cors());
app.use("/package",packRoutes);

app.listen(3000, () => {
 console.log("app started at port 3000");
});