const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const writeData = (data) =>
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router
app.get("/", (req, res) => {
  res.json({ data });
});

app.post("/", (req, res) => {
  const { location, title, date, members, note, image } = req.body;
  data.push({
    id: Date.now(),
    location,
    title,
    date,
    members,
    note,
    image,
  });
  writeData(data);
  res.status(201).json({ message: "data berhasil ditambahkan", data });
});

app.delete("/:id", (req, res) => {
  let id = req.params.id;
  writeData(data.filter((item) => item.id != id));
  res.status(201).json({ message: "data berhasil dihapus", id });
});

app.listen(3000, () => {
  console.log(`web ini berjalan di port 3000!`);
});
