module.exports = {
  root: true,
  ignorePatterns: ['node_modules/'],
  extends: ['custom'],
  settings: {
    'import/ignore': ['react-native'],
  },
  rules: {
    'import/no-named-as-default': 0,
  },
};