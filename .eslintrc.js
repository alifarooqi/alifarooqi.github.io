module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Add your custom rules here
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'react/prop-types': 'off', // Not needed with TypeScript
    '@typescript-eslint/no-unused-vars': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};