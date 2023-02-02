module.exports = {
    preset: "ts-jest",
    testEnvironment: "node", //em qual ambiente vai rodar
    moduleDirectories: ["node_modules", "src"],
    transform: {
      ".+\\.ts$": "ts-jest", //transformação de arquivos
    },
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"], //aonde estarão os arquivos
    //de teste e como eles estarão escritos
  };