const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("<>Welcome to Lassia Tuoluu SHS>");
});

const PORT = process.env.PORT || 3180;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
