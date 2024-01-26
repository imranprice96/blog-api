const mongoose = require("mongoose");
require("dotenv").config();

const config = {
  database: {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pq3rhn5.mongodb.net/blog-api?retryWrites=true&w=majority`,
  },
  server: {
    port: 3000,
  },
};

module.exports = config;
