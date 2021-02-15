import { config } from "dotenv";

import { Config } from "../src";

config();

export const mockConfig: Config = {
  apiKey: process.env.VOICE_RSS_API_KEY,
  text: "some",
  language: "en-us",
  speaker: "Linda",
  audioCodec: "mp3",
  audioFormat: "8khz_8bit_mono",
  speechRate: -1,
  ssml: false,
  base64: true,
};
