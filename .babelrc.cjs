module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ],
  overrides: [
    {
      test: /\.m?js$/,
      sourceType: 'unambiguous', // Use 'unambiguous' for mixed ESM and CommonJS environments
      plugins: [],
    },
  ],
};