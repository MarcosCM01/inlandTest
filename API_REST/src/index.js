const express = require("express");
const cors = require("cors");
const app = express();
//import routes/package
const packRoutes = require("./routes/package");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
 console.log("app started at port 3000");
});