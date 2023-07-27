module.exports = {
  globals: {
    useRef: 'readonly',
    useState: 'readonly',
    useEffect: 'readonly',
    useLayoutEffect: 'readonly',
    useCallback: 'readonly',
    useMemo: 'readonly',
    ll: 'readonly',
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: { jsx: true },
    ecmaVersion: 8,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-export-default-from',
      ],
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    'import/resolver': 'webpack',
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'warn',
    'no-useless-constructor': 'warn',
    'no-underscore-dangle': 'off',
    'prefer-template': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-state': 'warn',
    'react/state-in-constructor': ['error', 'always'],
    'react/no-deprecated': 'error',
    'react/prop-types': [
      'error',
      { ignore: ['history', 'location', 'match', 'name', 'className', 'style', 'children'] },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
