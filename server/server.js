const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const formRoutes = require("./routes/forms");
const sectorRoutes = require("./routes/sectors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Database Connected and Server is running on port: ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/forms", formRoutes);
app.use("/sectors", sectorRoutes);
