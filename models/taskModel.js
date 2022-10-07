const mongoose = require("mongoose");
 
const taskModel = mongoose.Schema({
  title: String,
  description: String,
  start_date: String,
  end_date: String,
  category: String,
  priority: String,
  status: String
});
 
module.exports = mongoose.model("Task", taskModel);