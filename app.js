const express = require("express");
const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.set("views", "./views");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
