const express = require("express");
const router = express.Router();
const Students = require("./student-model.js");

router.get("/", (req, res) => {
  Students.find()
    .then(stu => {
      res.status(200).json(stu);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Students.insert(req.body)
    .then(stu => {
      res.status(201).json(stu);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Students.remove(req.params.id)
    .then(stu => {
      res.status(200).json(stu);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
