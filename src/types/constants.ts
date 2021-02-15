export const VOICE_RSS_URL = "api.voicerss.org";
export const METHOD = "POST";
export const HEADER_NAME = "Content-Type";
export const HEADER_VALUE = "application/x-www-form-urlencoded; charset=UTF-8";
export const ERROR_PREFIX = "ERROR: ";

export enum VoiceRSSError {
  InactiveAccount = "ERROR: The account is inactive!",
  ExpiredSubscription = "ERROR: The subscription is expired or requests count limitation is exceeded!",
  ContentTooLarge = "ERROR: The request content length is too large!",
  LanguageDoesNotSupport = "ERROR: The language does not support!",
  NoLanguageSpecified = "ERROR: The language is not specified!",
  NoTextSpecified = "ERROR: The text is not specified!",
  APIKeyNotAvailable = "ERROR: The API key is not available!",
  APIKeyNotSpecified = "ERROR: The API key is not specified!",
  NoSSMLSupport = "ERROR: The subscription does not support SSML!",
}

export const SpeechRate = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export const Codec = ["mp3", "wav", "aac", "ogg", "caf"] as const;

export const Format = [
  "8khz_8bit_mono",
  "8khz_8bit_stereo",
  "8khz_16bit_mono",
  "8khz_16bit_stereo",
  "11khz_8bit_mono",
  "11khz_8bit_stereo",
  "11khz_16bit_mono",
  "11khz_16bit_stereo",
  "12khz_8bit_mono",
  "12khz_8bit_stereo",
  "12khz_16bit_mono",
  "12khz_16bit_stereo",
  "16khz_8bit_mono",
  "16khz_8bit_stereo",
  "16khz_16bit_mono",
  "16khz_16bit_stereo",
  "22khz_8bit_mono",
  "22khz_8bit_stereo",
  "22khz_16bit_mono",
  "22khz_16bit_stereo",
  "24khz_8bit_mono",
  "24khz_8bit_stereo",
  "24khz_16bit_mono",
  "24khz_16bit_stereo",
  "32khz_8bit_mono",
  "32khz_8bit_stereo",
  "32khz_16bit_mono",
  "32khz_16bit_stereo",
  "44khz_8bit_mono",
  "44khz_8bit_stereo",
  "44khz_16bit_mono",
  "44khz_16bit_stereo",
  "48khz_8bit_mono",
  "48khz_8bit_stereo",
  "48khz_16bit_mono",
  "48khz_16bit_stereo",
  "alaw_8khz_mono",
  "alaw_8khz_stereo",
  "alaw_11khz_mono",
  "alaw_11khz_stereo",
  "alaw_22khz_mono",
  "alaw_22khz_stereo",
  "alaw_44khz_mono",
  "alaw_44khz_stereo",
  "ulaw_8khz_mono",
  "ulaw_8khz_stereo",
  "ulaw_11khz_mono",
  "ulaw_11khz_stereo",
  "ulaw_22khz_mono",
  "ulaw_22khz_stereo",
  "ulaw_44khz_mono",
  "ulaw_44khz_stereo",
] as const;
