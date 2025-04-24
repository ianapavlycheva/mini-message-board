const express = require("express");
const router = express.Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { user, text } = req.body;
  const newMessage = {
    id: messages.length,
    user,
    text,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find((msg) => msg.id === messageId);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message });
});

module.exports = router;
