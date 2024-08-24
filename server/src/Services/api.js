const codeFailActivation = require("../../db/activation/codeFail.json");
const codeSuccessActivation = require("../../db/activation/codeSuccess.json");
const grantedCodesActivation = require("../../db/activation/grantedCodes.json");
const grantedCardsNo = require("../../db/grantedCardsNo.json");
const availableTerminals = require("../../db/terminals.json");
const receipt = require("../../db/receipt.json");

/////////////******* ACTIVATION ********/////////////
/**
 * Function used to verify if code passed is valid.
 * @param {*} code string code to be verified.
 * @example Success_response => {“error”: false, “card_details”: {“card_no”: 123456} }
 * @example Bad_response => {“error”: true, “error_text”: “Your code is not valid”}
 */
function verifyActivationCode(code) {
  return grantedCodesActivation.data.includes(code)
    ? codeSuccessActivation
    : codeFailActivation;
}
/**
 * Function used in alls requests to verify if card_no passed is valid.
 * @param {*} card_no string card_no passed by user.
 */
function cardNoIsValid(card_no) {
  return grantedCardsNo.data.includes(card_no) ? true : false;
}

/////////////******* TERMINAL ********/////////////
/** Return terminals found **/
function getTerminals() {
  return availableTerminals.data;
}
/** Verify if terminal requested is available **/
function getTerminalRequested(term_no) {
  return availableTerminals.data.find((terminal) => terminal.no == term_no);
}

/////////////******* REQUIRED FIELDS ********/////////////
/** Check card_no validity
 * @param card_no String code to check.
 * @returns * { error: false, data: ["pin", "odometer", "vehicle", "driver"]
 */
function getPreAuthBT() {
  let data = ["pin", "odometer", "vehicle", "driver", "max_volume"];
  const random = Math.floor(Math.random() * data.length);
  data.splice(random, random);
  return { error: false, data };
}
/** Checks if the fiels passed by user is valid.
 * For simulate error we will make a mistake if
 * odometer is "101010" or pinCode "1001".
 * @returns boolean;
 */
function requiredFieldsIsValid(fields) {
  return fields.odometer != 101010 && fields.pinCode != 1001 ? true : false;
}
/** Functions called when all is good, will be retorned
 * the pumps list of current terminal previously selected
 */
function authorizeRequiredFields(fields) {
  return {
    error: false,
    pumps: getTerminalRequested(fields.terminal.no).pumps,
  };
}
/** Returns dummy receipt example */
function getReceipt(fuelData) {
  return {
    no: receipt.no,
    created: new Date(),
    fuelType: receipt.fuelType,
    volume: fuelData.volume || receipt.volume,
    pump: fuelData.pump || receipt.pump,
    terminal: fuelData.terminal || receipt.terminal,
    site: receipt.site,
    vehicle: fuelData.plate || receipt.vehicle,
    odometer: fuelData.odometer || receipt.odometer,
    driver: receipt.driver
  };
}

module.exports = {
  verifyActivationCode,
  cardNoIsValid,
  getTerminals,
  getTerminalRequested,
  getPreAuthBT,
  requiredFieldsIsValid,
  authorizeRequiredFields,
  getReceipt,
};
