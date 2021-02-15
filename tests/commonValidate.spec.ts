import { Config } from "../src";
import { validate } from "../src/common";

describe("commonValidate", () => {
  it("should be defined", () => {
    expect(validate).toBeDefined();
  });

  it("should throw if an empty config is provided", () => {
    try {
      validate(null as Config);
    } catch (error) {
      expect(error).toEqual(Error("No config provided"));
    }
  });

  it("should throw if no API key is provided", () => {
    try {
      validate({ apiKey: "" } as Config);
    } catch (error) {
      expect(error).toEqual(Error("No API key provided"));
    }
  });

  it("should throw if no text is provided", () => {
    try {
      validate({ apiKey: "f" } as Config);
    } catch (error) {
      expect(error).toEqual(Error("No text provided"));
    }
  });

  it("should throw if no language is provided", () => {
    try {
      validate({ apiKey: "f", text: "f" } as Config);
    } catch (error) {
      expect(error).toEqual(Error("No language provided"));
    }
  });
});
