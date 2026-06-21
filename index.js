"use strict";

// Load env vars in non-production environments
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import the main Express app
const app = require("./server/app.js");

// Export the Express app handler for Vercel
module.exports = app;
