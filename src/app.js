const express = require("express");
const app = express();
const config = require("./config/config");
const mongoose = require("mongoose");

// Database connection
mongoose.connect(config.database.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(config.server.port, () => {
  console.log(`blog-api listening on port ${config.server.port}`);
});
