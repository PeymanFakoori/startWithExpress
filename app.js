const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/firstApi", function (req, res) {
  console.log(1);
  res.send("Hello from server");
});
app.get("/users", function (req, res) {
  const users = ["Taha", "Sina"];
  res.send(users);
});
app.post("/buffer", function (req, res) {
  console.log(req.body);
  let body = req.body;
  body.date = new Date();
  body.id = Math.ceil(Math.random() * 1000);
  res.send(body);
});
app.listen(5000);
// module.method("a", "b", function(param1, param2) {
// param1....
// param2....
// });
// fs.readFile("address", function(err, data) {
// });
