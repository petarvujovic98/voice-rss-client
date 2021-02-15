import { ERROR_PREFIX, HEADER_NAME, HEADER_VALUE, METHOD, VOICE_RSS_URL } from "../types";

/**
 * Makes a POST https request to the VoiceRSS API with the provided query.
 * @throws Throws if there is a network error or the server response is an VoiceRSS error message.
 * @param {string} query The query string to send.
 * @returns {Promise<string>}
 */
export async function makeRequest(query: string): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    const { request } = await import("https");
    const clientRequest = request(
      {
        host: VOICE_RSS_URL,
        method: METHOD,
        headers: {
          [HEADER_NAME]: HEADER_VALUE,
        },
      },
      (response) => {
        if (response.statusCode !== 200) {
          reject(response.statusMessage);
        }

        response.on("data", (data: Buffer) => {
          const text = data.toString();
          if (text.startsWith(ERROR_PREFIX)) {
            reject(text.slice(ERROR_PREFIX.length));
          }

          resolve(text);
        });
      }
    );

    clientRequest.on("error", (error) => {
      reject(error.message);
    });

    clientRequest.write(query);

    clientRequest.end();
  });
}
