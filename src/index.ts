import { makeRequest as browserMakeRequest, validate as browserValidate } from "./browser";
import { createQuery } from "./common";
import { makeRequest as nodeMakeRequest, validate as commonValidate } from "./node";
import { Config } from "./types";

export * from "./types";
export { createQuery } from "./common";

/**
 * Validates whether the configuration object is correct and if running in browser whether the browser supports the
 * provided audio codec.
 * @throws Will throw one of following errors:
 * - No config provided : if there was no config object provided
 * - No API key provided : if there was no API key provided
 * - No text provided : if there was no text provided
 * - No language provided : if there was no text provided
 * - Cannot play provided audio codec : if the provided audio codec is not supported in the current browser (only
 * applicable if the function is called from a browser)
 * @param {Config} config The RSS configuration object.
 * @returns {boolean}
 */
export function validate(config: Config): boolean {
  return typeof window !== "undefined" ? browserValidate(config) : commonValidate(config);
}

/**
 * Makes a POST request to the VoiceRSS API with the provided query string.
 * @throws Throws if there is a network error or the server response is an VoiceRSS error message.
 * @param {string} query The query string to send.
 * @returns {Promise<string>}
 */
export function makeRequest(query: string): Promise<string> {
  return typeof window !== "undefined" ? browserMakeRequest(query) : nodeMakeRequest(query);
}

/**
 * Validates the provided configuration, makes a request to the VoiceRSS API and returns the sound as a string.
 * @throws Will throw one of following errors:
 * - No config provided : if there was no config object provided
 * - No API key provided : if there was no API key provided
 * - No text provided : if there was no text provided
 * - No language provided : if there was no text provided
 * - Cannot play provided audio codec : if the provided audio codec is not supported in the current browser (only
 * applicable if the function is called from a browser)
 * - If there is a network error
 * - The server response is an VoiceRSS error message.
 * @param {Config} config The config object provided.
 * @returns {Promise<string>}
 */
export function getSpeech(config: Config): Promise<string> {
  return validate(config) && makeRequest(createQuery(config));
}

export default { validate, makeRequest, getSpeech };
