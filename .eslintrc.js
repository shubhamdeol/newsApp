module.exports = {
    "extends": "airbnb",
    "env": {
        "node": true,
        "browser": true,
        "es6": true 
    },
    "parser": "babel-eslint", 
    globals: {
        __DEV__: [true, true],
      },
      rules: {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'linebreak-style': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'import/no-unresolved': 'off',
        'object-curly-newline': 0,
        'import/prefer-default-export': 0,
        'no-': 0,
        'import/no-cycle': 0,
        'no-underscore-dangle': 0,
        'react/no-unused-state': 0,
        'consistent-return': 0,
        'arrow-parens': 0,
        'no-confusing-arrow': 0,
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'function-paren-newline': 0,
        'no-debugger': 0,
      },    
};