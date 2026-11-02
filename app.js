
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3900;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
