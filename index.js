module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:flowtype/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
          "ecmaVersion": 6,
          "sourceType": "module",
          "arrowFunctions": true,
          "blockBindings": true,
          "classes": true,
          "decorators": true,
          "defaultParams": true,
          "destructuring": true,
          "experimentalDecorators": true,
          "experimentalObjectRestSpread": true,
          "forOf": true,
          "generators": true,
          "global-require": false,
          "jsx": true,
          "modules": true,
          "restParams": true,
          "spread": true,
          "superInFunctions": true,
          "templateStrings": true
    }
  },
  globals: {
    _: true,
    window: true,
    global: true
  },
  env : {
    browser: true,
    es6: true
  },
  "rules": {
    "prettier/prettier": ["error"]
  },
  plugins: [
      "jsx-a11y",
      "flowtype",
      "react",
      "prettier"
  ],
  settings: {
    react: {
      version: "16.7.0"
    }
  }
};