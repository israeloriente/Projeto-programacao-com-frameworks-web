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

export { incBaseUrl };
