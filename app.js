const express = require("express");
const app = express();
const path = require("path");
const router = require("./router.js");
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
