module.exports = function (plop) {
  const getCommonActions = (letterCase) => {
    return [
      {
        type: 'add',
        path: `{{type}}s/{{${letterCase} name}}/.eslintrc.cjs`,
        templateFile: 'plop-templates/eslint.hbs',
      },
      {
        type: 'add',
        path: `{{type}}s/{{${letterCase} name}}/tsconfig.json`,
        templateFile: 'plop-templates/tsconfig.hbs',
      },
      {
        type: 'add',
        path: `{{type}}s/{{${letterCase} name}}/tsconfig.build.json`,
        templateFile: 'plop-templates/tsconfigBuild.hbs',
      },
      {
        type: 'add',
        path: `{{type}}s/{{${letterCase} name}}/.gitignore`,
        templateFile: 'plop-templates/gitignore.hbs',
      },
      {
        type: 'add',
        path: `{{type}}s/{{${letterCase} name}}/.eslintignore`,
        templateFile: 'plop-templates/eslintignore.hbs',
      },
    ];
  };

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    // Prompts for the component type, name, and other options
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Choose the package type',
        choices: ['component', 'feature'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of it?',
        validate: function (name) {
          if (name.trim().length === 0) {
            return 'Name is required';
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      switch (data.type) {
        case 'component':
          return [
            ...getCommonActions('pascalCase'),
            {
              type: 'add',
              path: 'components/{{pascalCase name}}/package.json',
              templateFile: 'plop-templates/component/packageJson.hbs',
            },
            {
              type: 'add',
              path: 'components/{{pascalCase name}}/src/{{pascalCase name}}.tsx',
              templateFile: 'plop-templates/component/component.hbs',
            },
            {
              type: 'add',
              path: 'components/{{pascalCase name}}/src/styles.ts',
              templateFile: 'plop-templates/component/style.hbs',
            },
            {
              type: 'add',
              path: 'components/{{pascalCase name}}/src/types.ts',
              templateFile: 'plop-templates/component/types.hbs',
            },
            {
              type: 'add',
              path: 'components/{{pascalCase name}}/index.ts',
              templateFile: 'plop-templates/component/index.hbs',
            },
          ];
        case 'feature':
          return [
            ...getCommonActions('camelCase'),
            {
              type: 'add',
              path: 'features/{{camelCase name}}/package.json',
              templateFile: 'plop-templates/feature/packageJson.hbs',
            },
            {
              type: 'add',
              path: 'features/{{camelCase name}}/Navigator.tsx',
              templateFile: 'plop-templates/feature/navigator.hbs',
            },
            {
              type: 'add',
              path: 'features/{{camelCase name}}/types.ts',
              templateFile: 'plop-templates/feature/types.hbs',
            },
            {
              type: 'add',
              path: 'features/{{camelCase name}}/index.ts',
              templateFile: 'plop-templates/feature/index.hbs',
            },
            {
              type: 'add',
              path: 'features/{{camelCase name}}/screens/index.ts',
              templateFile: 'plop-templates/feature/screenIndex.hbs',
            },
          ];
        default:
          return [];
      }
    },
  });
};
