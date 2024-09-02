import codeFailActivation from "../../db/activation/codeFail.json";
import codeSuccessActivation from "../../db/activation/codeSuccess.json";
import grantedCodesActivation from "../../db/activation/grantedCodes.json";
import grantedCardsNo from "../../db/grantedCardsNo.json";
import availableTerminals from "../../db/terminals.json";
import receipt from "../../db/receipt.json";

/////////////******* ACTIVATION ********/////////////
/**
 * Function used to verify if code passed is valid.
 * @param {string} code - string code to be verified.
 * @example Success_response => {"error": false, "card_details": {"card_no": 123456} }
 * @example Bad_response => {"error": true, "error_text": "Your code is not valid"}
 */
function verifyActivationCode(code: string) {
  return grantedCodesActivation.data.includes(code)
    ? codeSuccessActivation
    : codeFailActivation;
}

/**
 * Function used in all requests to verify if card_no passed is valid.
 * @param {string} card_no - string card_no passed by user.
 */
function cardNoIsValid(card_no: string) {
  return grantedCardsNo.data.includes(card_no);
}

/////////////******* TERMINAL ********/////////////
/** Return terminals found **/
function getTerminals() {
  return availableTerminals.data;
}

/** Verify if terminal requested is available **/
function getTerminalRequested(term_no: string) {
  return availableTerminals.data.find(
    (terminal: any) => terminal.no == term_no
  );
}

/////////////******* REQUIRED FIELDS ********/////////////
/**
 * Check card_no validity
 * @returns { error: false, data: string[] }
 */
function getPreAuthBT() {
  let data = ["pin", "odometer", "vehicle", "driver", "max_volume"];
  const random = Math.floor(Math.random() * data.length);
  data.splice(random, random);
  return { error: false, data };
}

/**
 * Checks if the fields passed by user are valid.
 * For simulate error we will make a mistake if
 * odometer is "101010" or pinCode "1001".
 * @returns boolean;
 */
function requiredFieldsIsValid(fields: { odometer: number; pinCode: number }) {
  return fields.odometer != 101010 && fields.pinCode != 1001;
}

/**
 * Functions called when all is good, will be returned
 * the pumps list of current terminal previously selected.
 */
function authorizeRequiredFields(fields: { terminal: { no: string } }) {
  const terminal = getTerminalRequested(fields.terminal.no);
  return {
    error: false,
    pumps: terminal ? terminal.pumps : [],
  };
}

/** Returns dummy receipt example */
function getReceipt(fuelData: {
  volume?: number;
  pump?: string;
  terminal?: string;
  plate?: string;
  odometer?: number;
}) {
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
    driver: receipt.driver,
  };
}

export {
  verifyActivationCode,
  cardNoIsValid,
  getTerminals,
  getTerminalRequested,
  getPreAuthBT,
  requiredFieldsIsValid,
  authorizeRequiredFields,
  getReceipt,
};
