const express = require("express");
const router = express.Router();

//Index 
router.get("/", (req, res) => {
  res.send("GET for posts");

})

//show - users
router.get("/:id", (req, res) => {
  res.send("GET for  post id");
})

//POST - users
router.post("/", (req, res) => {
  res.send("POST for  posts");
})

//DELETE - users
router.delete("/:id", (req, res) => {
  res.send("DELETE for  posts id");
});

module.exports = router;