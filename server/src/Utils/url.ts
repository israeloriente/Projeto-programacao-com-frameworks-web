import { prefix } from "./prefix";
/**
 * Add the prefix API
 * @param {string} url - URL to be concatenated.
 * @returns {string} Url with prefix.
 * @example '/api/v1/' + 'activation' => '/api/v1/activation'.
 */
function incBaseUrl(url: string): string {
  return prefix + url;
}

/** Function used to return Standard Error.
 * @param {string} message - Message to return.
 * @returns {{ error: boolean, error_text: string }}.
 */
function sendError(message: string): { error: boolean; error_text: string } {
  return { error: true, error_text: message };
}

export { incBaseUrl, sendError };
