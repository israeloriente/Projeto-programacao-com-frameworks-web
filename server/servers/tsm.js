require("dotenv").config();

const express = require("express");
const cors = require("cors");
const utils = require("../src/Utils/url");
const appTsm = express();

appTsm.use(cors());
appTsm.use(express.json());

appTsm.get("/*", function (req, res) {
  setTimeout(() => {
    return res.status(401).send(utils.sendError("TSM Server is not allowed"));
  }, utils.manufacturingLag());
});

appTsm.listen(process.env.PORTTSM || 3001);
