module.exports = {
    root: true,
    env: {
      node: true
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'camelcase': ['error', {'properties': 'never'}], // 驼峰命名
      'eqeqeq': 0, // 三等号 使用开放
      'multiline-ternary': ['error', 'never'],
      'no-nested-ternary': ['off'], // 嵌套的三元表达式
      'brace-style': ['off'], // 关闭块强制执行一致的大括号样式
      'arrow-parens': ['error', 'always'], // 箭头函数参数 带圆括号
      'arrow-body-style': ['off'], // 箭头函数体周围大括号的使用情况
      'implicit-arrow-linebreak': ['error', 'beside'], // 禁止在箭头函数体之前出现换行
      'no-mixed-spaces-and-tabs': 'error', // 禁止 使用 空格 和 tab 的混合缩进
      'indent': ['error', 2, {'SwitchCase': 1}], // 使用两个空格缩进
      'quotes': ['error', 'single'], // 强制使用一致的单引号
      'semi': ['error', 'never', { "beforeStatementContinuationChars": "never" }], // 分号的使用
      'no-extra-semi': 'error', // 禁止不必要的分号
      'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号
      'no-sequences': ['error'], // 禁止逗号操作符
      'function-paren-newline': ['error', {'minItems': 100}], // 函数括号内，使用统一的换行
      'no-multi-spaces': ['error'], // 禁止多余空格
      'no-trailing-spaces': ['error'], // 禁止行末空格
      // 'prettier/prettier': ['warn'],
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }