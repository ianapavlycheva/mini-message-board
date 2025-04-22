const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

const indexRouter = require("./routes/index");
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
