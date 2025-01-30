module.exports = function (api) {
  api.cache(false); // Ensure API is defined

  return {
    presets: ["babel-preset-expo"],
    plugins: [["module:react-native-dotenv"]],
  };
};
