module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      ['react-native-reanimated/plugin'],
      "nativewind/babel",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ['module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@routes': './src/routes',
            '@database': './src/database'
          }
        }
      ]
    ],
  };
};
