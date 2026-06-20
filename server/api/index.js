"use strict";
// Load env vars in non-production (for local dev)
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("../app.js");

// Vercel expects a function handler export
module.exports = (req, res) => {
  app(req, res);
};
