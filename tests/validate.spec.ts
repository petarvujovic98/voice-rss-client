import { Config, validate } from "../src";
import * as browserValidate from "../src/browser/validate";
import * as common from "../src/common";

import { mockConfig } from "./constants";

describe("validate", () => {
  let browserValidateMock: jest.SpyInstance<boolean, [config: Config]>;
  let commonValidateMock: jest.SpyInstance<boolean, [config: Config]>;

  beforeEach(() => {
    browserValidateMock = jest.spyOn(browserValidate, "validate");
    browserValidateMock.mockImplementation(() => true);
    commonValidateMock = jest.spyOn(common, "validate");
    commonValidateMock.mockImplementation(() => true);
  });

  afterEach(() => {
    browserValidateMock.mockClear();
    commonValidateMock.mockClear();
  });

  it("should be defined", () => {
    expect(validate).toBeDefined();
  });

  it("should call browser version in browser environment", () => {
    if (typeof window !== "undefined") {
      validate(mockConfig);
      expect(browserValidateMock).toHaveBeenCalledTimes(1);
      expect(browserValidateMock).toHaveBeenCalledWith(mockConfig);
      expect(commonValidateMock).toHaveBeenCalledTimes(0);
    }
  });

  it("should call common version in node environment", () => {
    if (typeof window === "undefined") {
      validate(mockConfig);
      expect(commonValidateMock).toHaveBeenCalledTimes(1);
      expect(commonValidateMock).toHaveBeenCalledWith(mockConfig);
      expect(browserValidateMock).toHaveBeenCalledTimes(0);
    }
  });
});
