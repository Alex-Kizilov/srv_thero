const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");

require("dotenv").config();

const app = express();

app.disable("X-POWERED-BY");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose.connect(
  process.env.MONGO_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log(`+ DB CONENCTION`);
  }
);

mongoose.set("useCreateIndex", true);

app.get("/", (_, res) => {
  res.json({ message: "Hello, World" });
});

app.use("/auth", require("./assets/routes/authRoute.js"));

// app.use(history());
// app.use(serveStatic(__dirname + "/dist"));

app.listen(process.env.PORT || 8080, () => {
  console.log(`+ APP IN ${process.env.PORT || 8080}`);
});
