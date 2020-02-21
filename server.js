const express = require("express");
const server = express();
const StudentRouter = require("./students/student-router");

server.use(express.json());
server.use("/api/students", StudentRouter);

server.get("/", (req, res) => {
  res.json("Hello World!");
});

module.exports = server;
