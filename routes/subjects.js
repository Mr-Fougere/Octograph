const express = require("express");
const router = express.Router();
const Subject = require("../models/subject");

// Getting All
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creatin one
router.post("/", async (req, res) => {
  const subject = new Subject({
    name: req.query.name,
    type: req.query.type,
  });
  try {
    const newSubject = await subject.save();
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(400);
  }
});

// Getting One
router.get("/:id", getSubject, (req, res) => {
  res.send(res.subject);
});

// Updating ONE
router.patch("/:id", getSubject, async (req, res) => {
  if (req.query.name != null) {
    res.subject.name = req.query.name;
  }
  if (req.query.type != null) {
    res.subject.type = req.query.type;
  }
  try {
    const updatedSubject = await res.subject.save();
    res.json(updatedSubject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete ONE
router.delete("/:id", getSubject, async (req, res) => {
  console.log(res.subject);
  try {
    await res.subject.deleteOne();
    res.json({ message: "Deleted Subject" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubject(req, res, next) {
  let subject;
  try {
    subject = await Subject.findById(req.params.id);
    if (subject == null) {
      return res.status(404).json({ message: "Cannot find subject" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subject = subject;
  next();
}

module.exports = router;
