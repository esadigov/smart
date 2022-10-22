module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': ['off'],
        'no-shadow': 'off',
        'no-undef': 'off',
        eqeqeq: 'error',
        'comma-dangle': ['error', 'only-multiline'],
        'no-else-return': 'error',
        'no-multi-spaces': 'error',
        'no-console': 'warn',
        'block-spacing': ['error', 'always'],
        'no-unneeded-ternary': ['error'],
        'no-plusplus': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'sort-vars': ['error', { ignoreCase: true }],
        'prefer-destructuring': [
          'error',
          {
            array: true,
            object: true,
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        camelcase: [
          'error',
          {
            ignoreImports: true,
            ignoreDestructuring: true,
            properties: 'always',
          },
        ],
        // import rules
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/default': 'off',
        'import/export': 'off',
        'import/no-self-import': 'error',
        'import/no-cycle': 'error',
        'import/prefer-default-export': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            pathGroups: [
              {
                pattern: '*',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
      },
    },
  ],
};
