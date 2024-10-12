module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    }
  }
};
