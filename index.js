"use strict";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./server/app.js");

module.exports = app;
