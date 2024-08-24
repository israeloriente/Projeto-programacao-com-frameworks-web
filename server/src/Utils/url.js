const env = require("../../environment.js");

/**
 * Add the prefix API
 * @param {*} url to be concatenated.
 * @returns Url with prefix.
 * @example '/api/v1/' + 'activation' => '/api/v1/activation'.
 */
function incrementBaseUrl(url) {
  return env.prefix + url;
}

/** Simulates connection instability in milliseconds
 * @returns Number between 80 - 3000.
 */
function manufacturingLag(minimum, maximum) {
  let min = minimum || 80;
  let max = maximum || 3000;
  return Math.floor(min + Math.random() * (max - min + 1));
}

/** Function used to return Standard Error.
 * @param message Message to returns.
 * @returns { error: true, error_text: message }.
 */
function sendError(message) {
  return { error: true, error_text: message };
}

module.exports = {
  incrementBaseUrl,
  manufacturingLag,
  sendError,
};
