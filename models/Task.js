const { model, Schema } = require("mongoose");

const TaskSchema = Schema({
  task: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
});
