import { validate as commonValidate } from "../common";
import { Config } from "../types";

/**
 * Validates whether the configuration object is correct and whether the browser supports the provided audio codec.
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
  commonValidate(config);

  if (config.audioCodec) {
    let mediaType = "audio/";
    switch (config.audioCodec) {
      case "mp3":
        mediaType += "mpeg";
        break;
      case "caf":
        mediaType += "x-caf";
        break;
      default:
        mediaType += config.audioCodec;
        break;
    }

    if (new Audio().canPlayType(mediaType) === "") {
      throw new Error(`The ${config.audioCodec.toLocaleUpperCase()} codec is not supported in the current browser`);
    }
  }

  return true;
}
