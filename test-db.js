const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://prince24080_db_user:prince2553@cluster0.bvqdr7p.mongodb.net/wanderLust?appName=Cluster0";

async function test() {
  console.log("Attempting to connect to MongoDB...");
  try {
    await mongoose.connect(dbUrl, { serverSelectionTimeoutMS: 5000 });
    console.log("SUCCESS! Connected to MongoDB Atlas.");
    process.exit(0);
  } catch (err) {
    console.error("FAILED TO CONNECT:");
    console.error(err);
    process.exit(1);
  }
}

test();
