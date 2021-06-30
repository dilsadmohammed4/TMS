const express = require("express");
var dashboard = require("./routes/dashboard");
var journal = require("./routes/journal");
var person = require("./routes/person");
var projects = require("./routes/projects");
var subject = require("./routes/subject");
var syllabus = require("./routes/syllabus");
var thoughtboard = require("./routes/thoughtboard");
var todolist = require("./routes/todolist");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("dashboard");
});

app.use("/dashboard", dashboard);
app.use("/journal", journal);
app.use("/person", person);
app.use("/projects", projects);
app.use("/subject", subject);
app.use("/syllabus", syllabus);
app.use("/thoughtboard", thoughtboard);
app.use("/todolist", todolist);

app.listen("3000", () => {
  console.log("server running in port 3000....");
});
