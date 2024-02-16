const express = require("express");
const app = express();
const config = require("./config/config");
const mongoose = require("mongoose");
const compression = require("compression");
const helmet = require("helmet");

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 200,
});

// Database connection
mongoose.connect(config.database.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
app.use(compression());

// Apply rate limiter to all requests
app.use(limiter);

// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and Jquery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  })
);

app.use("/", indexRouter);
app.use("/", authRouter);

app.listen(config.server.port, () => {
  console.log(`blog-api listening on port ${config.server.port}`);
});
