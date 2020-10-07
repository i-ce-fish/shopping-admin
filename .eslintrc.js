/**
 *
 * 新项目的eslint, 要求比较严格

 module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 关闭禁止混用tab和空格
    // "no-mixed-spaces-and-tabs": [0],
    "no-unused-expressions": 0,
    "array-callback-return": 0,
    "no-restricted-globals": 0,
    "func-names": 0,
    "import/prefer-default-export": 0,
    "accessor-pairs": 0, // 强制getter/setter成对出现在对象中
    "no-shadow": 1, // 禁止变量声明覆盖外层作用域的变量
    "consistent-return": 0, // 返回类型一致
    "no-param-reassign": 1, // 禁止对函数参数再赋值
    "max-len": [0, 200, 4], // 字符串最大长度
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "vue/max-attributes-per-line": [2, {
      singleline: 10,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    "arrow-spacing": [2, {
      before: true,
      after: true
    }],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {
      allowSingleLine: true
    }],
    camelcase: [0, {
      properties: "always"
    }],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, {
      before: false,
      after: true
    }],
    "comma-style": [2, "last"],
    "constructor-super": 2,
    curly: [2, "multi-line"],
    "dot-location": [2, "property"],
    "eol-last": 2,
    eqeqeq: ["error", "always", { null: "ignore" }],
    "generator-star-spacing": [2, {
      before: true,
      after: true
    }],
    "handle-callback-err": [2, "^(err|error)$"],
    indent: [2, 2, {
      SwitchCase: 1
    }],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": [2, {
      beforeColon: false,
      afterColon: true
    }],
    "keyword-spacing": [2, {
      before: true,
      after: true
    }],
    "new-cap": [2, {
      newIsCap: true,
      capIsNew: false
    }],
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-console": "off",
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-const-assign": 2,
    "no-control-regex": 0,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": [2, {
      allowLoop: false,
      allowSwitch: false
    }],
    "no-lone-blocks": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, {
      max: 1
    }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-return-assign": [2, "except-parens"],
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": [2, {
      defaultAssignment: false
    }],
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unused-vars": [2, {
      vars: "all",
      args: "none"
    }],
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 0,
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "one-var": [2, {
      initialized: "never"
    }],
    "operator-linebreak": [2, "after", {
      overrides: {
        "?": "before",
        ":": "before"
      }
    }],
    "padded-blocks": [2, "never"],
    quotes: [2, "double", {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    semi: [2, "never"],
    "semi-spacing": [2, {
      before: false,
      after: true
    }],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [2, {
      words: true,
      nonwords: false
    }],
    "spaced-comment": [2, "always", {
      markers: ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
    }],
    "template-curly-spacing": [2, "never"],
    "use-isnan": 2,
    "valid-typeof": 2,
    "wrap-iife": [2, "any"],
    "yield-star-spacing": [2, "both"],
    yoda: [2, "never"],
    "prefer-const": 2,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "object-curly-spacing": [2, "always", {
      objectsInObjects: false
    }],
    "array-bracket-spacing": [2, "never"]

  }
}
 **/

/**
 * element admin 的eslint规范
 *
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // extends: ["plugin:vue/recommended", "eslint:recommended"],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  // 修改后有时需要重启
  rules: {
    'no-plusplus': 0,//自增运算符
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'no-restricted-properties': 0,
    'max-len': 0,//单行代码最大长度
    'no-async-promise-executor': 0,//promise回调是异步
    'import/no-cycle': 0,//依赖循环
    'no-shadow': 1,//变量声明重复警告
    'vue/no-unused-components': 1,
    'vue/require-component-is': 1,//解决动态组件没法用
    'array-callback-return': 0, // 箭头函数必须返回
    'import/extensions': 0,//导入文件必须拓展名
    "linebreak-style": ["error", "unix"],//  统一换行符LF, win下的git默认转换为LF, 需要修改
    "consistent-return": 0,//  必须返回 ,

    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }],
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': true
    }],

    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [1, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']
  }
}
