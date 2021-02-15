import { makeRequest } from "../src";
import * as browserValidate from "../src/browser/makeRequest";
import * as node from "../src/node/makeRequest";

describe("makeRequest", () => {
  let browserMakeRequestMock: jest.SpyInstance<
    Promise<string>,
    [query: string]
  >;
  let nodeMakeRequestMock: jest.SpyInstance<Promise<string>, [query: string]>;

  beforeEach(() => {
    browserMakeRequestMock = jest.spyOn(browserValidate, "makeRequest");
    browserMakeRequestMock.mockImplementation(async () => "");
    nodeMakeRequestMock = jest.spyOn(node, "makeRequest");
    nodeMakeRequestMock.mockImplementation(async () => "");
  });

  afterEach(() => {
    browserMakeRequestMock.mockClear();
    nodeMakeRequestMock.mockClear();
  });

  it("should be defined", () => {
    expect(makeRequest).toBeDefined();
  });

  it("should call browser version in browser environment", () => {
    if (typeof window !== "undefined") {
      makeRequest("some");
      expect(browserMakeRequestMock).toHaveBeenCalledTimes(1);
      expect(browserMakeRequestMock).toHaveBeenCalledWith("some");
      expect(nodeMakeRequestMock).toHaveBeenCalledTimes(0);
    }
  });

  it("should call common version in node environment", () => {
    if (typeof window === "undefined") {
      makeRequest("some");
      expect(nodeMakeRequestMock).toHaveBeenCalledTimes(1);
      expect(nodeMakeRequestMock).toHaveBeenCalledWith("some");
      expect(browserMakeRequestMock).toHaveBeenCalledTimes(0);
    }
  });
});
