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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['warn'],
    'no-useless-constructor': ['warn'],
    'react/no-unused-state': ['warn'],
    'react/state-in-constructor': ['error', 'always'],
    'react/no-deprecated': ['error'],
    'no-underscore-dangle': ['error'],
    'prefer-template': ['error'],
    'jsx-quotes': ['error', 'prefer-single'],
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
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'react/static-property-placement': [
      'error',
      'property assignment',
      {
        propTypes: 'static public field',
        defaultProps: 'static public field',
      },
    ],
  },
};
