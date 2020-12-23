const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");

// module.exports = config => injectBabelPlugin(rootImportConfig, config);
module.exports = override(
  fixBabelImports("root-import", {
    rootPathPrefix: "~",
    rootPathSuffix: "src"
  })
);