const express = require("express");
require("./config");
const Products = require("./products");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  let data = new Products(req.body);
  console.log("req.body", req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await Products.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await Products.deleteOne(req.params);
  res.send("data");
});

app.put("/update/:_id", async (req, res) => {
  console.log("req.body", req.body);
  let data = await Products.updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.post("/search", async (req, res) => {
  let data = await Products.find({ email: req.body.email });
  res.send(data);
});

app.listen(3001);
