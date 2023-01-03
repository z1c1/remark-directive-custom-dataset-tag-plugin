module.exports = {
  presets: [
    ['@babel/preset-env', {
      // useBuiltIns: 'usage',
      // modules: false,
      targets: {
        node: 'current',
        browsers: [
          '> 1%',
          'Android >= 5.0',
          'IOS >= 9',
          'ie >= 11'
        ]
      }
    }]
  ]
};
