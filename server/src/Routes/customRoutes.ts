import express, { Request, Response } from "express";
import * as api from "../Services/api";
import * as utils from "../Utils/url";

const router = express.Router();

// Get Terminals
router.get("/discoverTerminals", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  res.send(api.getTerminals());
});

// Try to select a terminal
router.get("/selectTerminal/:no", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  res.send(api.getTerminalRequested(req.params.no as string));
});

// Checks if card is valid and return required fields
router.get("/preauthBT/:cardNo", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  res.send(api.getPreAuthBT());
});

// Will try write the required fields
router.get("/writePreauthBT", (req: Request, res: Response) => {
  const requiredFields = JSON.parse(req.query.requiredFields as string);
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  if (!api.requiredFieldsIsValid(requiredFields))
    return res.status(401).send(utils.sendError("Vehicle not allowed"));
  res.send(api.authorizeRequiredFields(requiredFields));
});

// Will return 'ok' notifying success terminal selection
router.get("/selectPump", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  res.send("ok");
});

// "Receive" liters amount chosen by the user
router.get("/sendFuelAmount", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  res.send("ok");
});

// Receive current liter amount and returns with random number
router.get("/refreshLiters", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  const liters = parseFloat(req.query.liters as string);
  res.send((liters * 1.42).toFixed(1));
});

// Return dummy receipt
router.get("/requestReceipt", (req: Request, res: Response) => {
  if (!api.cardNoIsValid(req.query.card_no as string))
    return res.status(401).send(utils.sendError("Card not allowed"));
  const receipt = JSON.parse(req.query.receipt as string);
  res.send(api.getReceipt(receipt));
});

export default router;
