const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const routes = require("./routes");

const { handleError } = require("./middleware/apiError");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);

app.use(bodyParser.json());

app.use(xss());
app.use(mongoSanitize());

app.use("/api", routes);

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
