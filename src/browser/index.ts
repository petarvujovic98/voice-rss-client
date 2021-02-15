import { createQuery } from "../common";
import { Config } from "../types";
import { makeRequest } from "./makeRequest";
import { validate } from "./validate";

export * from "../types";
export { createQuery } from "../common";
export * from "./validate";
export * from "./makeRequest";

/**
 * Validates the provided configuration, makes a request to the VoiceRSS API and returns the sound as a string.
 * @throws Will throw one of following errors:
 * - No config provided : if there was no config object provided
 * - No API key provided : if there was no API key provided
 * - No text provided : if there was no text provided
 * - No language provided : if there was no text provided
 * - Cannot play provided audio codec : if the provided audio codec is not supported in the current browser
 * - If there is a network error
 * - The server response is an VoiceRSS error message.
 * @param {Config} config The config object provided.
 * @returns {Promise<string>}
 */
export function getSpeech(config: Config): Promise<string> {
  return validate(config) && makeRequest(createQuery(config));
}
