const express = require("express");
const api = require("../Services/api");
const utils = require("../Utils/url");
const router = express.Router();

// Get Terminals
router.get("/discoverTerminals", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send(api.getTerminals());
  }, utils.manufacturingLag());
});
// Try to select a terminal
router.get("/selectTerminal/:no", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send(api.getTerminalRequested(req.params.no));
  }, utils.manufacturingLag());
});
// Checks if card is valid and return required fields
router.get("/preauthBT/:cardNo", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send(api.getPreAuthBT());
  }, utils.manufacturingLag());
});
// Will try write the required fields
router.get("/writePreauthBT", function (req, res) {
  setTimeout(() => {
    const requiredFields = JSON.parse(req.query.requiredFields);
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    if (!api.requiredFieldsIsValid(requiredFields))
      return res.status(401).send(utils.sendError("Vehicle not allowed"));
    res.send(api.authorizeRequiredFields(requiredFields));
  }, utils.manufacturingLag());
});
// Will retorn 'ok' notifying success terminal selection
router.get("/selectPump", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send("ok");
  }, utils.manufacturingLag());
});
// "Receive" liters amount chosen by the user
router.get("/sendFuelAmount", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send("ok");
  }, utils.manufacturingLag());
});
// Receive current liter amount and returns with random number
router.get("/refreshLiters", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send((req.query.liters * 1.42).toFixed(1));
  }, 100);
});
// Return dummy receipt
router.get("/requestReceipt", function (req, res) {
  setTimeout(() => {
    if (!api.cardNoIsValid(req.query.card_no))
      return res.status(401).send(utils.sendError("Card not allowed"));
    res.send(api.getReceipt(JSON.parse(req.query.receipt)));
  }, utils.manufacturingLag());
});

module.exports = router;
