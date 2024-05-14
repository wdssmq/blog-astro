import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

import eslintPluginAstro from 'eslint-plugin-astro';


export default [
    {
        languageOptions:
        {
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        'rules': {
            /* 相对通用的规则 */

            // 缩进
            'indent': [
                'error',
                4,
                {
                    'SwitchCase': 1,
                }
            ],
            // 换行符
            'linebreak-style': [
                'error',
                'unix',
            ],
            // 引号
            'quotes': [
                'error',
                'double',
            ],
            // 分号
            'semi': [
                'error',
                'always',
            ],
            // 单行注释的空格
            'spaced-comment': [
                'error',
                'always',
                {
                    'line': {
                        // 继下述字符后再加空格
                        'markers': ['!', '#', '/'],
                    },
                }
            ],

            /* 以下按需配置 */

            // 对象或数组的拖尾逗号
            // always-multiline 表示只有在多行时才需要拖尾逗号
            'comma-dangle': [
                1,
                'always-multiline',
            ],

            // 箭头函数参数括号
            // as-needed 表示只有在需要时才添加括号
            // always 表示总是添加括号
            'arrow-parens': [
                1,
                'always',
                {
                    'requireForBlockBody': true
                },
            ],

            // 变量声明后未使用
            // args: "none" 表示不检查函数参数是否被使用
            'no-unused-vars': [
                1,
                {
                    'args': 'none'
                },
            ],

            // 函数圆括号之前的空格
            // anonymous: "never" 表示匿名函数不允许空格
            // named: "never" 表示命名函数不允许空格
            'space-before-function-paren': [
                1,
                {
                    'anonymous': 'never', 'named': 'never'
                },
            ],

            // 禁止不规则的空白
            'no-irregular-whitespace': [
                2,
                {
                    'skipStrings': true, 'skipRegExps': true
                },
            ],

        },
    },
];
