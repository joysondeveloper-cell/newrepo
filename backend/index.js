const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/admin");
mongoose.connect(
  "mongodb+srv://joyson130497_db_user:Ad2cdcswktr9L2Tw@cluster0.smf82qb.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0"
);

const EmployeeSchema = new mongoose.Schema({
  name: String,
  city: String
});

// Model -> employees collection
const Employee = mongoose.model(
  "Employee",
  EmployeeSchema,
  "employees"
);

app.get("/employees", async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });