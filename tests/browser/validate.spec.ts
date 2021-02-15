import { validate as browserValidate } from "../../src/browser";
import { mockConfig } from "../constants";

describe("browserValidate", () => {
  it("should throw if codec not supported", () => {
    try {
      browserValidate({
        ...mockConfig,
        audioCodec: "aac",
      });
    } catch (error) {
      expect(error).toEqual(
        new Error(`The ${"aac".toLocaleUpperCase()} codec is not supported in the current browser`)
      );
    }
  });

  it("should return true if codec is supported", () => {
    const canPlayTypeMock = jest.spyOn(window.HTMLAudioElement.prototype, "canPlayType");
    canPlayTypeMock.mockImplementation(() => "probably");

    expect(browserValidate(mockConfig)).toEqual(true);
  });
});
