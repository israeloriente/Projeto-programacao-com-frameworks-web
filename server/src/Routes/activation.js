const express = require("express");
const connectServ = require("../Services/api");
let router = express.Router();

// Verify Activation Code passed by User
router.get("/", function (req, res) {
  setTimeout(() => {
    let result = connectServ.verifyActivationCode(req.query.code);
    if (result.error) res.status(401).send(result);
    else res.send(result);
  }, 1000);
});

module.exports = router;
