module.exports = {
  projects: [
    {
      displayName: "browser",
      preset: "ts-jest",
      testMatch: ["**/*/!(node)/*.spec.ts"],
    },
    {
      displayName: "node",
      preset: "ts-jest",
      testMatch: ["**/*/!(browser)/*.spec.ts"],
      testEnvironment: "node",
    },
  ],
};
