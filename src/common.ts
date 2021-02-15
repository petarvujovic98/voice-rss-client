import { Config } from "./types";

/**
 * Creates a query string from the provided configuration object.
 * @param {Config} config The configuration object to create the query from.
 * @returns {string}
 */
export function createQuery(config: Config): string {
  let query = `key=${config.apiKey}&src=${config.text}&hl=${config.language}&c=${config.audioCodec || "auto"}`;

  if (config.speaker) query += `&v=${config.speaker.toLowerCase()}`;
  if (config.audioFormat) query += `&f=${config.audioFormat}`;
  if (config.speechRate) query += `&r=${config.speechRate}`;
  if (config.ssml) query += `&ssml=${config.ssml}`;
  query += `&ssml=${config.ssml === true}`;
  query += `&b64=${config.base64 !== false}`;

  return query;
}

/**
 * Validates whether the configuration object is correct.
 * @throws Will throw one of following errors:
 * - No config provided : if there was no config object provided
 * - No API key provided : if there was no API key provided
 * - No text provided : if there was no text provided
 * - No language provided : if there was no text provided
 * @param {Config} config The RSS configuration object.
 * @returns {boolean}
 */
export function validate(config: Config): boolean {
  if (!config || !Object.keys(config)) throw new Error("No config provided");
  if (!config.apiKey) throw new Error("No API key provided");
  if (!config.text) throw new Error("No text provided");
  if (!config.language) throw new Error("No language provided");

  return true;
}
