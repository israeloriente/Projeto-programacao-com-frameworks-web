require("dotenv").config();

const express = require("express");
const cors = require("cors");
const activation = require("../src/Routes/activation");
const fuelProcess = require("../src/Routes/fuelProcess");
const utils = require("../src/Utils/url");
const appConnect = express();

appConnect.use(cors());
appConnect.use(express.json());
appConnect.use(utils.incrementBaseUrl("/activation"), activation);
appConnect.use(utils.incrementBaseUrl("/fuel"), fuelProcess);

appConnect.listen(process.env.PORTCONNECT || 3000);
