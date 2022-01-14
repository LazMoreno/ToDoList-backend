const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

//GET
router.get("/", async (req, res) => {
  const task = await Task.find();
  try {
    if (task.length === 0) {
      return res.status(400).json({ message: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't retrieve task" });
  }
});

//GET/byID
router.get("/task/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  try {
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get the task" });
  }
});

//POST
router.post("/task", async (req, res) => {
  const taskToCreate = await Task.create(req.body);
  try {
    return res.status(201).json(taskToCreate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create the task" });
  }
});

//PUT
router.put("/task/:id", async (req, res) => {
  const { id } = req.params;
  const taskToUpdate = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(taskToUpdate);
  } catch (error) {}
});

//DELETE
router.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: "Deleted sucessfully" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete the task" });
  }
});

module.exports = router;
