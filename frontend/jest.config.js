module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    // Use swc jest transform
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  moduleNameMapper: {
    // Handle module aliases (если вы используете их в вашем проекте Next.js)
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@/src/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["@emotion/jest/serializer"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json", // Указать путь к вашему tsconfig, если он отличается
    },
  },
  transformIgnorePatterns: ["node_modules/(?!(nanostores|@nanostores/react)/)"],
};
