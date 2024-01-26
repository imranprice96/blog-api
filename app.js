const express = require("express");
const app = express();
const config = require("./src/config");

app.get("/", (req, res) => {
  return res.send("test response");
});

app.listen(config.server.port, () => {
  console.log(`blog-api listening on port ${config.server.port}`);
});
