import { createQuery } from "../src";
import { mockConfig } from "./constants";

describe("createQuery", () => {
  it("should be defined", () => {
    expect(createQuery).toBeDefined();
  });

  it("should return correct string for provided object", () => {
    expect(createQuery(mockConfig)).toEqual(
      `key=${mockConfig.apiKey}&src=${mockConfig.text}` +
        `&hl=${mockConfig.language}&c=${mockConfig.audioCodec}` +
        `&v=${mockConfig.speaker.toLowerCase()}&f=${mockConfig.audioFormat}` +
        `&r=${mockConfig.speechRate}&ssml=${mockConfig.ssml}` +
        `&b64=${mockConfig.base64}`
    );
  });
});
