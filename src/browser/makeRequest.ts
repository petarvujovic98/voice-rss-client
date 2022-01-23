import { ERROR_PREFIX, HEADER_NAME, HEADER_VALUE, VOICE_RSS_URL } from "../types";

/**
 * Makes a POST fetch request to the VoiceRSS API with the provided query.
 * @throws Throws if there is a network error or the server response is an VoiceRSS error message.
 * @param {string} query The query string to send.
 * @returns {Promise<string>}
 */
export async function makeRequest(query: string): Promise<string> {
  const response = await fetch(`https://${VOICE_RSS_URL}`, {
    method: "POST",
    headers: {
      [HEADER_NAME]: HEADER_VALUE,
    },
    body: query,
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const text = await response.text();

  if (text.startsWith(ERROR_PREFIX)) {
    throw new Error(text.slice(ERROR_PREFIX.length));
  }

  return text;
}
