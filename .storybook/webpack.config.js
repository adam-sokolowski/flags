module.exports = async ({ config }) => {
  // Extend config as needed.
  const { rules } = config.module;

  // Add SASS support
  rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  });
 
  return config;
};
