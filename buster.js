var config = exports;

config["Browser tests"] = {
  environment: "browser",
  libs: ["lib/**/*.js"],
  sources: ["src/server-facade.js", "src/**/*.js"],
  tests: ["test/**/*.js"]
};
