module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
        useBuiltIns: 'usage',
        corejs: 3
      },
    ],
  ],
  plugins: [
<<<<<<< HEAD
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-espower'
=======
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining'
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ],
};
