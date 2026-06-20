const mongoose = require("../server/node_modules/mongoose");
const initData = require("./data.js");
const Listing = require("../server/models/listing.js");


const MONGO_URL = "mongodb+srv://prince24080_db_user:prince2553%3F@cluster0.bvqdr7p.mongodb.net/wanderLust?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(async () => {
    console.log("connected to DB");
    await initDB();
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};