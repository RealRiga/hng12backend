require("dotenv").config();

const express = require("express");
const cors = require("cors");
const moment = require("moment-timezone");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
   // This dynamically generate current date and time of Africa/Lagos
  const currentDateTime = moment().tz("Africa/Lagos").format();
  res.json({
    email: "adeolayisa32@gmail.com",
    // This returns the dynamic date and time
    current_datetime: currentDateTime,
    github_url: "https://github.com/RealRiga/hng12backend"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
