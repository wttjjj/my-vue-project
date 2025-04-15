/* eslint-disable max-lines */

// https://eslint.bootcss.com/docs/user-guide/configuring
// https://eslint.vuejs.org/rules/
// https://cloud.tencent.com/developer/chapter/12618

const rulesPossibleErrors = {
    // Possible Errors 错误、逻辑错误

    // [eslint:recommended] for-direction 强制 “for” 循环中更新子句的计数器朝着正确的方向移动

    // [eslint:recommended] getter-return 强制 getter 函数中出现 return 语句

    // [eslint:recommended] no-async-promise-executor 禁止使用异步函数作为 Promise executor

    // no-await-in-loop 禁止在循环中出现 await
    // 这其实是一个有效的串行，虽然大多数人希望的是并行。所以我设置为告警
    'no-await-in-loop': ['warn'],

    // [eslint:recommended] no-compare-neg-zero 禁止与 -0 进行比较

    // [eslint:recommended] no-cond-assign 禁止条件表达式中出现赋值操作符

    // no-console 禁用 console
    // https://eslint.bootcss.com/docs/rules/no-console
    // 之后会区分各个平台环境，只在测试环境提供输出。
    'no-console': [
        'off',
        {
            allow: ['warn', 'error'],
        },
    ],

    // [eslint:recommended] 'no-constant-condition' 禁止在条件中使用常量表达式

    // [eslint:recommended] no-control-regex 禁止在正则表达式中使用控制字符
    // 我认为这是一个极少的场景，出现就代表着要使用特性 0-31 不可见字符匹配
    'no-control-regex': 'off',

    // [eslint:recommended] no-debugger 禁用 debugger

    // [eslint:recommended] no-dupe-args 禁止 function 定义中出现重名参数

    // [eslint:recommended] no-dupe-keys 禁止对象字面量中出现重复的 key

    // [eslint:recommended] no-duplicate-case 禁止出现重复的 case 标签

    // [eslint:recommended] no-empty 禁止出现空语句块

    // [eslint:recommended] no-empty-character-class 禁止在正则表达式中使用空字符集

    // [eslint:recommended] no-ex-assign 禁止对 catch 子句的参数重新赋值
    // 我不理解为什么会有人这样写。我吐了

    // [eslint:recommended] [--fix] no-extra-boolean-cast 禁止不必要的布尔转换

    // [--fix] no-extra-parens 禁止不必要的括号
    // https://eslint.bootcss.com/docs/rules/no-extra-parens
    // 我认为括号可以帮助开发者明确优先级
    'no-extra-parens': 'off',

    // [eslint:recommended] [--fix] no-extra-semi 禁止不必要的分号
    // 禁止 `var a = 1;;` 允许 `var a = 1;`

    // [eslint:recommended] no-func-assign 禁止对 function 声明重新赋值

    // [eslint:recommended] no-inner-declarations 禁止在嵌套的块中出现变量声明或 function 声明
    // 匿名函数、函数表达式不受影响的。主要是为了防止意外的声明提升

    // [eslint:recommended] no-invalid-regexp 禁止 RegExp 构造函数中存在无效的正则表达式字符串

    // [eslint:recommended] no-irregular-whitespace 禁止不规则的空白
    // 各种空白字符可能是由程序员误输入的，比如拷贝或键盘快捷键。例如，在 macOS 按下 Alt + Space，增加了一个不间断空格。
    // * 零宽空格
    //     * 不被认为是分隔符，经常被解析为 Unexpected token ILLEGAL
    //     * 不在现代浏览器中显示，期待使用代码存储软件解决其可视化问题
    // * 行分隔符
    //     * 在 JSON 中不是一个有效的字符，会引起解析错误
    // 我认为如果你真的使用了这种空白符，那么值得为他付出一个 /* eslint-disable */ /* eslint-enable */

    // [eslint:recommended] no-misleading-character-class 不允许在字符类语法中出现由多个代码点组成的字符
    // emoji表情之类的  👨‍👩‍👦 ，之前删除空白符的时候就出事故了。

    // [eslint:recommended] no-obj-calls 禁止把全局对象作为函数调用

    // [eslint:recommended] no-prototype-builtins 禁止直接调用 Object.prototypes 的内置属性
    // 防止某些插件库污染 prototype，导致意外行为或拒绝服务安全漏洞

    // [eslint:recommended] [--fix] no-regex-spaces 禁止正则表达式字面量中出现多个空格

    // [eslint:recommended] no-sparse-arrays 禁用稀疏数组

    // no-template-curly-in-string 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': ['warn'],

    // [eslint:recommended] no-unexpected-multiline 禁止出现令人困惑的多行表达式
    // https://eslint.bootcss.com/docs/rules/no-unexpected-multiline

    // [eslint:recommended] no-unreachable 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    // 我认为这不影响，但是消除了会更好
    'no-unreachable': ['warn'],

    // [eslint:recommended] no-unsafe-finally 禁止在 finally 语句块中出现控制流语句
    // finally 我都不建议你使用

    // [eslint:recommended] [--fix] no-unsafe-negation 禁止对关系运算符的左操作数使用否定操作符

    // [eslint:recommended] require-atomic-updates 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值

    // [eslint:recommended] use-isnan 要求使用 isNaN() 检查 NaN

    // [eslint:recommended] valid-typeof 强制 typeof 表达式与有效的字符串进行比较"
};
const rulesBestPractices = {
    // Best Practices 这些规则是关于最佳实践的，帮助你避免一些问题

    // accessor-pairs 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': ['error'],

    // array-callback-return 强制数组方法的回调函数中有 return 语句
    // 如果不需要返回值，或许你想要的是forEach。但是根据规范，你应该使用 lodash
    'array-callback-return': ['error'],

    // block-scoped-var 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': ['error'],

    // class-methods-use-this 强制类方法使用 this
    // 目前我们还没有人在代码中使用 class

    // complexity 指定程序中允许的最大环路复杂度
    // 我没有合适的解决方案，为了让我们活下去，这个规则目前不会启用。
    complexity: ['warn'],

    // consistent-return 要求 return 语句要么总是指定返回的值，要么不指定
    // 可以有效的降低错误率
    'consistent-return': ['warn'],

    // [--fix] curly 强制所有控制语句使用一致的括号风格
    curly: ['error', 'all'],

    // default-case 要求 switch 语句中有 default 分支
    'default-case': ['error'],

    // [--fix] dot-location 强制在点号之前和之后一致的换行
    // 我个人习惯 property ，但是我不知道默认是不是更好的选择
    // "dot-location": ["error", 'property'],

    // [--fix] dot-notation 强制尽可能地使用点号
    'dot-notation': ['error'],

    // [--fix] eqeqeq 要求使用 === 和 !==
    // 这条规则有点严格，但是想要我们先体验一下。
    eqeqeq: [
        'off',
        'always',
        {
            // null: "ignore",
        },
    ],

    // guard-for-in 要求 for-in 循环中有一个 if 语句
    // 并不希望大家使用 for in。如果使用希望你知道，你希望不希望使用原型上的对象
    // Object.prototype.hasOwnProperty.call(foo, key)
    // ().hasOwnProperty.call(foo, key)
    'guard-for-in': ['warn'],

    // max-classes-per-file 强制每个文件中包含的的类的最大数量

    // no-alert 禁用 alert、confirm 和 prompt
    // 应该避免使用，客户端内使用协议，客户端端外可以找一个替代品
    'no-alert': ['warn'],

    // no-caller 禁用 arguments.caller 或 arguments.callee
    // 你应该用箭头函数，这样就没有 arguments 了
    'no-caller': ['warn'],

    // [eslint:recommended] no-case-declarations 不允许在 case 子句中使用词法声明

    // [--fix] no-div-regex 正则表达式开始的位置关键词过滤（只是看着像关键词的）

    // [--fix] no-else-return 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': ['error'],

    // no-empty-function 禁止出现空函数
    'no-empty-function': ['error'],

    // [eslint:recommended] no-empty-pattern 禁止使用空解构模式

    // no-eq-null 禁止在没有类型检查操作符的情况下与 null 进行比较
    // 你应该使用 ===
    'no-eq-null': ['error'],

    // no-eval 禁用 eval()
    'no-eval': ['error'],

    // no-extend-native 禁止扩展原生类型
    // 使用之前，你最好准备好充足的理由，比如你需要兼容 IE6
    'no-extend-native': ['warn'],

    // [--fix] no-extra-bind 禁止不必要的 .bind() 调用
    'no-extra-bind': ['warn'],

    // [--fix] no-extra-label 禁用不必要的标签
    // 我认为你就不应该使用
    'no-extra-label': ['error'],

    // [eslint:recommended] no-fallthrough 禁止 case 语句落空

    // [--fix] no-floating-decimal 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': ['error'],

    // [eslint:recommended] no-global-assign 禁止对原生对象或只读的全局对象进行赋值

    // [--fix] no-implicit-coercion 禁止使用短符号进行类型转换
    // 我们的代码应该尽可能简单
    'no-implicit-coercion': ['warn'],

    // no-implicit-globals 禁止在全局范围内使用变量声明和 function 声明

    // no-implied-eval 禁止使用类似 eval() 的方法
    // 使用之前，你最好准备好充足的理由
    'no-implied-eval': ['warn'],

    // no-invalid-this 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': ['off'],

    // no-iterator 禁用 __iterator__ 属性
    'no-iterator': ['error'],

    // no-labels 禁用标签语句
    'no-labels': ['error'],

    // no-lone-blocks 禁用不必要的嵌套块
    'no-lone-blocks': ['error'],

    // no-loop-func 禁止在循环语句中出现包含不安全引用的函数声明
    // 经典闭包 BUG
    // "no-lone-func": ["error"],

    // no-magic-numbers 禁用魔术数字
    // 这是个好习惯，我应该考虑在我的共用文件生成一个配置
    'no-magic-numbers': ['off'],

    // [--fix] no-multi-spaces 禁止使用多个空格
    'no-multi-spaces': ['warn'],

    // no-multi-str 禁止使用多行字符串
    // 你应该使用模板字符串
    'no-multi-str': ['error'],

    // no-new 禁止使用 new 以避免产生副作用
    'no-new': ['error'],

    // no-new-func 禁止对 Function 对象使用 new 操作符
    // 使用之前，你最好准备好充足的理由
    'no-new-func': ['warn'],

    // no-new-wrappers 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': ['error'],

    // [eslint:recommended] no-octal 禁用八进制字面量

    // no-octal-escape 禁止在字符串中使用八进制转义序列
    'no-octal-escape': ['error'],

    // no-param-reassign 禁止对 function 的参数进行重新赋值
    'no-param-reassign': ['error'],

    // no-proto 禁用 __proto__ 属性
    // __proto__ 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。
    // 使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替。
    'no-proto': ['error'],

    // [eslint:recommended] no-redeclare 禁止多次声明同一变量

    // no-restricted-properties 禁止使用对象的某些属性

    // no-return-assign 禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error'],

    // no-return-await 禁用不必要的 return await
    'no-return-await': ['error'],

    // no-script-url 禁止使用 javascript: url
    'no-script-url': ['error'],

    // [eslint:recommended] no-self-assign 禁止自我赋值

    // no-self-compare 禁止自身比较
    // 你在判断NaN?
    'no-self-compare': ['error'],

    // no-sequences 禁用逗号操作符
    // 这个写法真的不好懂
    'no-sequences': ['error'],

    // no-throw-literal 禁止抛出异常字面量
    'no-throw-literal': ['error'],

    // no-unmodified-loop-condition 禁用一成不变的循环条件
    'no-unmodified-loop-condition': ['error'],

    // no-unused-expressions 禁止出现未使用过的表达式
    'no-unused-expressions': ['off'],

    // [eslint:recommended] [--fix] no-unused-labels 禁用未使用过的标签
    // 就不应该使用

    // no-useless-call 禁止不必要的 .call() 和 .apply()
    'no-useless-call': ['error'],

    // [eslint:recommended] no-useless-catch 禁止不必要的 catch 子句

    // no-useless-concat 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': ['error'],

    // [eslint:recommended] no-useless-escape 禁用不必要的转义字符

    // [--fix] no-useless-return 禁止多余的 return 语句
    'no-useless-return': ['warn'],

    // no-void 禁用 void 操作符
    'no-void': ['error'],

    // no-warning-comments 禁止在注释中使用特定的警告术语

    // [eslint:recommended] no-with 禁用 with 语句

    // prefer-named-capture-group 建议在正则表达式中使用命名捕获组
    // 这个 ECMAScript 特性只在ECMAScript 2018 和/或 更新的环境中受支持。

    // prefer-promise-reject-errors 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': ['warn'],

    // radix 强制在 parseInt() 使用基数参数
    radix: ['warn'],

    // require-await 禁止使用不带 await 表达式的 async 函数
    'require-await': ['error'],

    // require-unicode-regexp 强制在 RegExp 上使用 u 标志
    'require-unicode-regexp': ['error'],

    // vars-on-top 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': ['error'],

    // [--fix] wrap-iife 要求 IIFE 使用括号括起来
    'wrap-iife': ['error', 'inside'],

    // [--fix] yoda 要求或禁止 “Yoda” 条件
    yoda: ['warn', 'never'],
};
const rulesStrictMode = {
    // Strict Mode 该规则与使用严格模式和严格模式指令有关：

    // [--fix] strict 要求或禁止使用严格模式指令
    strict: ['error'],
};
const rulesVariables = {
    // Variables 这些规则与变量声明有关：

    // init-declarations require or disallow initialization in variable declarations
    // init-declarations 要求或禁止 var 声明中的初始化
    'init-declarations': ['warn'],

    // [eslint:recommended] no-delete-var disallow deleting variables
    // [eslint:recommended] no-delete-var 禁止删除变量

    // no-label-var disallow labels that share a name with a variable
    // no-label-var 不允许标签与变量同名
    'no-label-var': ['error'],

    // no-restricted-globals disallow specified global variables
    // no-restricted-globals 禁用特定的全局变量

    // no-shadow disallow variable declarations from shadowing variables declared in the outer scope
    // no-shadow 禁止变量声明与外层作用域的变量同名
    'no-shadow': ['warn'],

    // [eslint:recommended] no-shadow-restricted-names disallow identifiers from shadowing restricted names
    // [eslint:recommended] no-shadow-restricted-names 禁止将标识符定义为受限的名字

    // [eslint:recommended] no-undef disallow the use of undeclared variables unless mentioned in /*global */ comments
    // [eslint:recommended] no-undef 禁用未声明的变量，除非它们在 /*global */ 注释中被提到

    // [--fix] no-undef-init disallow initializing variables to undefined
    // [--fix] no-undef-init 禁止将变量初始化为 undefined
    'no-undef-init': ['error'],

    // no-undefined disallow the use of undefined as an identifier
    // no-undefined 禁止将 undefined 作为标识符
    'no-undefined': ['error'],

    // [eslint:recommended] no-unused-vars disallow unused variables
    // [eslint:recommended] no-unused-vars 禁止出现未使用过的变量

    // no-use-before-define disallow the use of variables before they are defined
    // no-use-before-define 禁止在变量定义之前使用它们
    'no-use-before-define': ['error'],
};
const rulesCommonjs = {

    // Node.js and CommonJS 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：
    // callback-return require return statements after callbacks
    // callback-return 强制数组方法的回调函数中有 return 语句
    // global-require require require() calls to be placed at top-level module scope
    // global-require 要求 require() 出现在顶层模块作用域中
    // handle-callback-err require error handling in callbacks
    // handle-callback-err 要求回调函数中有容错处理
    // no-buffer-constructor disallow use of the Buffer() constructor
    // no-buffer-constructor 禁用 Buffer() 构造函数
    // no-mixed-requires disallow require calls to be mixed with regular variable declarations
    // no-mixed-requires 禁止混合常规变量声明和 require 调用

    // no-new-require disallow new operators with calls to require
    // no-new-require 禁止调用 require 时使用 new 操作符
    'no-new-symbol': 2,

    // no-path-concat disallow string concatenation with __dirname and __filename
    // no-path-concat 禁止对 __dirname 和 __filename 进行字符串连接
    // no-process-env disallow the use of process.env
    // no-process-env 禁用 process.env
    // no-process-exit disallow the use of process.exit()
    // no-process-exit 禁用 process.exit()
    // no-restricted-modules disallow specified modules when loaded by require
    // no-restricted-modules 禁用通过 require 加载的指定模块
    // no-sync disallow synchronous methods
    // no-sync 禁用同步方法
};
const rulesStylisticIssues = {

    // Stylistic Issues 这些规则是关于风格指南的，而且是非常主观的：
    // 魔鬼上线了！！！！！

    // [--fix] array-bracket-newline enforce linebreaks after opening and before closing array brackets
    // [--fix] array-bracket-newline 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [
        'warn',
        {
            multiline: true,
        },
    ],

    // [--fix] array-bracket-spacing enforce consistent spacing inside array brackets
    // [--fix] array-bracket-spacing 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['warn', 'never'],

    // [--fix] array-element-newline enforce line breaks after each array element
    // [--fix] array-element-newline 强制数组元素间出现换行
    'array-element-newline': [
        'warn',
        {
            multiline: true,
            minItems: 5,
        },
    ],

    // [--fix] block-spacing disallow or enforce spaces inside of blocks after opening block and before closing block
    // [--fix] block-spacing 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],

    // [--fix] brace-style enforce consistent brace style for blocks
    // [--fix] brace-style 强制在代码块中使用一致的大括号风格
    // "allowSingleLine": true (默认 false) 允许块的开括号和闭括号在 同一行
    'brace-style': ['error', '1tbs'],

    // camelcase enforce camelcase naming convention
    // camelcase 强制使用骆驼拼写法命名约定
    camelcase: [
        'warn',
        {
            properties: 'always',
        },
    ],

    // [--fix] capitalized-comments enforce or disallow capitalization of the first letter of a comment
    // [--fix] capitalized-comments 强制或禁止对注释的第一个字母大写

    // [--fix] comma-dangle require or disallow trailing commas
    // [--fix] comma-dangle 要求或禁止末尾逗号
    'comma-dangle': ['warn', 'always-multiline'],

    // [--fix] comma-spacing enforce consistent spacing before and after commas
    // [--fix] comma-spacing 强制在逗号前后使用一致的空格
    'comma-spacing': [
        'warn',
        {
            before: false,
            after: true,
        },
    ],

    // [--fix] comma-style enforce consistent comma style
    // [--fix] comma-style 强制使用一致的逗号风格
    'comma-style': ['warn', 'last'],

    // [--fix] computed-property-spacing enforce consistent spacing inside computed property brackets
    // [--fix] computed-property-spacing 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['warn', 'never'],

    // consistent-this enforce consistent naming when capturing the current execution context
    // consistent-this 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': ['error', 'that'],

    // [--fix] eol-last require or disallow newline at the end of files
    // [--fix] eol-last 要求或禁止文件末尾存在空行
    'eol-last': ['error', 'always'],

    // [--fix] func-call-spacing require or disallow spacing between function identifiers and their invocations
    // [--fix] func-call-spacing 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['warn', 'never'],

    // func-name-matching require function names to match the name of the variable or property to which they are assigned
    // func-name-matching 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': ['error', 'always'],

    // func-names require or disallow named function expressions
    // func-names 要求或禁止使用命名的 function 表达式
    'func-names': ['off', 'always'],

    // func-style enforce the consistent use of either function declarations or expressions
    // func-style 强制一致地使用 function 声明或表达式
    'func-style': ['error', 'expression'],

    // [--fix] function-paren-newline enforce consistent line breaks inside function parentheses
    // [--fix] function-paren-newline 强制在函数括号内使用一致的换行
    'function-paren-newline': [
        'error',
        {
            minItems: 5,
        },
    ],

    // id-blacklist disallow specified identifiers
    // id-blacklist 禁用指定的标识符
    'id-blacklist': ['warn'],

    // id-length enforce minimum and maximum identifier lengths
    // id-length 强制标识符的最小和最大长度
    'id-length': [
        'warn',
        {
            min: 2,
        },
    ],

    // id-match require identifiers to match a specified regular expression
    // id-match 要求标识符匹配一个指定的正则表达式

    // [--fix] implicit-arrow-linebreak enforce the location of arrow function bodies
    // [--fix] implicit-arrow-linebreak 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error', 'beside'],

    // [--fix] indent enforce consistent indentation
    // [--fix] indent 强制使用一致的缩进
    indent: [
        'warn',
        4,
        {
            SwitchCase: 1,
        },
    ],

    // [--fix] jsx-quotes enforce the consistent use of either double or single quotes in JSX attributes
    // [--fix] jsx-quotes 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-double'],

    // [--fix] key-spacing enforce consistent spacing between keys and values in object literal properties
    // [--fix] key-spacing 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
        'error',
        {
            afterColon: true,
            beforeColon: false,
        },
    ],

    // [--fix] keyword-spacing enforce consistent spacing before and after keywords
    // [--fix] keyword-spacing 强制在关键字前后使用一致的空格
    // https://eslint.bootcss.com/docs/rules/key-spacing
    'keyword-spacing': [
        'error',
        {
            after: true,
            before: true,
        },
    ],

    // line-comment-position enforce position of line comments
    // line-comment-position 强制行注释的位置
    'line-comment-position': ['off'],

    // [--fix] linebreak-style enforce consistent linebreak style
    // [--fix] linebreak-style 强制使用一致的换行风格
    // https://eslint.bootcss.com/docs/rules/linebreak-style
    // "linebreak-style": ["warn"],

    // [--fix] lines-around-comment require empty lines around comments
    // [--fix] lines-around-comment 要求在注释周围有空行
    // https://eslint.bootcss.com/docs/rules/lines-around-comment
    'lines-around-comment': ['off'],

    // [--fix] lines-between-class-members require or disallow an empty line between class members
    // [--fix] lines-between-class-members 要求或禁止类成员之间出现空行
    'lines-between-class-members': ['warn'],

    // max-depth enforce a maximum depth that blocks can be nested
    // max-depth 强制可嵌套的块的最大深度
    'max-depth': ['warn', 5],

    // max-len enforce a maximum line length
    // max-len 强制一行的最大长度
    'max-len': [
        'warn',
        {
            code: 150,
            ignoreComments: true,
        },
    ],

    // max-lines enforce a maximum number of lines per file
    // max-lines 强制最大行数
    'max-lines': [
        'warn',
        {
            max: 1000,
        },
    ],

    // max-lines-per-function enforce a maximum number of line of code in a function
    // max-lines-per-function 强制函数最大代码行数
    'max-lines-per-function': ['warn', 100],

    // max-nested-callbacks enforce a maximum depth that callbacks can be nested
    // max-nested-callbacks 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn'],

    // max-params enforce a maximum number of parameters in function definitions
    // max-params 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 5],

    // max-statements enforce a maximum number of statements allowed in function blocks
    // max-statements 强制函数块最多允许的的语句数量
    // 感觉和 max-lines-per-function 类似
    'max-statements': ['warn', 100],

    // max-statements-per-line enforce a maximum number of statements allowed per line
    // max-statements-per-line 强制每一行中所允许的最大语句数量
    'max-statements-per-line': [
        'warn',
        {
            max: 1,
        },
    ],

    // [--fix] multiline-comment-style enforce a particular style for multiline comments
    // [--fix] multiline-comment-style 强制对多行注释使用特定风格
    // https://eslint.bootcss.com/docs/rules/multiline-comment-style
    // 块注释在vscode中有问题
    //      "starred-block" (默认): 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *。
    //      "bare-block": 禁止使用连续的行注释来表示块注释，并且禁止块注释每行前有一个"*"。
    //      "separate-lines": 禁用块注释，使用连续的行注释。
    'multiline-comment-style': ['warn', 'separate-lines'],


    // multiline-ternary enforce newlines between operands of ternary expressions
    // multiline-ternary 要求或禁止在三元操作数中间换行
    // 我还希望加括号
    'multiline-ternary': ['warn'],

    // new-cap require constructor names to begin with a capital letter
    // new-cap 要求构造函数首字母大写
    'new-cap': [
        'error',
        {
            capIsNew: false,
            newIsCap: true,
        },
    ],

    // [--fix] new-parens enforce or disallow parentheses when invoking a constructor with no arguments
    // [--fix] new-parens 强制或禁止调用无参构造函数时有圆括号
    'new-parens': ['error'],

    // [--fix] newline-per-chained-call require a newline after each call in a method chain
    // [--fix] newline-per-chained-call 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['warn'],

    // no-array-constructor disallow Array constructors
    // no-array-constructor 禁用 Array 构造函数
    'no-array-constructor': ['error'],

    // no-bitwise disallow bitwise operators
    // no-bitwise 禁用按位运算符
    // 老老实实，别整骚操作，除非你真的需要这点性能
    'no-bitwise': ['warn'],

    // no-continue disallow continue statements
    // no-continue 禁用 continue 语句
    'no-continue': ['warn'],

    // no-inline-comments disallow inline comments after code
    // no-inline-comments 禁止在代码后使用内联注释
    // 上面有个一样的

    // [--fix] no-lonely-if disallow if statements as the only statement in else blocks
    // [--fix] no-lonely-if 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': ['warn'],

    // no-mixed-operators disallow mixed binary operators
    // no-mixed-operators 禁止混合使用不同的操作符
    // 是的，代码是用来看的，dist 才是用来执行的。希望有充足的括号，可以让我们来搞懂优先级
    'no-mixed-operators': ['warn'],

    // [eslint:recommended] no-mixed-spaces-and-tabs disallow mixed spaces and tabs for indentation
    // [eslint:recommended] no-mixed-spaces-and-tabs 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': ['error'],

    // no-multi-assign disallow use of chained assignment expressions
    // no-multi-assign 禁止连续赋值
    'no-multi-assign': ['error'],

    // [--fix] no-multiple-empty-lines disallow multiple empty lines
    // [--fix] no-multiple-empty-lines 禁止出现多行空行
    'no-multiple-empty-lines': [
        'error',
        {
            max: 2,
            maxBOF: 1,
            maxEOF: 2,
        },
    ],

    // no-negated-condition disallow negated conditions
    // no-negated-condition 禁用否定的表达式
    'no-negated-condition': ['warn'],

    // no-nested-ternary disallow nested ternary expressions
    // no-nested-ternary 禁用嵌套的三元表达式
    'no-nested-ternary': ['warn'],

    // no-new-object disallow Object constructors
    // no-new-object 禁用 Object 的构造函数
    'no-new-object': ['error'],

    // no-plusplus disallow the unary operators ++ and --
    // no-plusplus 禁用一元操作符 ++ 和 --
    'no-plusplus': [
        'warn',
        {
            allowForLoopAfterthoughts: true,
        },
    ],

    // no-restricted-syntax disallow specified syntax
    // no-restricted-syntax 禁用特定的语法
    // https://eslint.bootcss.com/docs/rules/no-restricted-syntax

    // no-tabs disallow all tabs
    // no-tabs 禁用 tab
    'no-tabs': ['off'],

    // no-ternary disallow ternary operators
    // no-ternary 禁用三元操作符
    // 我觉得一个应该还行吧？这个后续在修改
    'no-ternary': 0,

    // [--fix] no-trailing-spaces disallow trailing whitespace at the end of lines
    // [--fix] no-trailing-spaces 禁用行尾空格
    'no-trailing-spaces': [
        'warn',
        {
            ignoreComments: false,
            skipBlankLines: false,
        },
    ],

    // no-underscore-dangle disallow dangling underscores in identifiers
    // no-underscore-dangle 禁止标识符中有悬空下划线
    //
    'no-underscore-dangle': ['warn'],

    // [--fix] no-unneeded-ternary disallow ternary operators when simpler alternatives exist
    // [--fix] no-unneeded-ternary 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': ['warn'],

    // [--fix] no-whitespace-before-property disallow whitespace before properties
    // [--fix] no-whitespace-before-property 禁止属性前有空白
    // https://eslint.bootcss.com/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': ['warn'],

    // [--fix] nonblock-statement-body-position enforce the location of single-line statements
    // [--fix] nonblock-statement-body-position 强制单个语句的位置
    // 已禁用单行语句，使用规则 curly。
    // 'nonblock-statement-body-position': ["error", "beside"],

    // [--fix] object-curly-newline enforce consistent line breaks inside braces
    // [--fix] object-curly-newline 强制大括号内换行符的一致性
    'object-curly-newline': ['off', 'always'],

    // [--fix] object-curly-spacing enforce consistent spacing inside braces
    // [--fix] object-curly-spacing 强制在大括号中使用一致的空格
    'object-curly-spacing': [
        'warn',
        'always',
        {
            objectsInObjects: false,
        },
    ],

    // [--fix] object-property-newline enforce placing object properties on separate lines
    // [--fix] object-property-newline 强制将对象的属性放在不同的行上
    'object-property-newline': ['error'],

    // [--fix] one-var enforce variables to be declared either together or separately in functions
    // [--fix] one-var 强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', 'never'],

    // [--fix] one-var-declaration-per-line require or disallow newlines around variable declarations
    // [--fix] one-var-declaration-per-line 要求或禁止在变量声明周围换行
    // 迎接挑战吧，无穷无尽的换行
    'one-var-declaration-per-line': ['error', 'always'],

    // [--fix] operator-assignment require or disallow assignment operator shorthand where possible
    // [--fix] operator-assignment 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-assignment': ['error', 'always'],

    // [--fix] operator-linebreak enforce consistent linebreak style for operators
    // [--fix] operator-linebreak 强制操作符使用一致的换行符
    // https://eslint.bootcss.com/docs/rules/operator-linebreak
    // 先放这里，我个人感觉是前置好看。算了我帮你们配置上吧
    'operator-linebreak': ['error', 'before'],

    // [--fix] padded-blocks require or disallow padding within blocks
    // [--fix] padded-blocks 要求或禁止块内填充
    'padded-blocks': ['off', 'always'],

    // [--fix] padding-line-between-statements require or disallow padding lines between statements
    // [--fix] padding-line-between-statements 要求或禁止在语句间填充空行

    // [--fix] prefer-object-spread disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    // [--fix] prefer-object-spread 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    // ... 可以被 babel 处理。Object.assign 确需要 babel-polyfill
    'prefer-object-spread': ['warn'],

    // [--fix] quote-props require quotes around object literal property names
    // [--fix] quote-props 要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'as-needed'],

    // [--fix] quotes enforce the consistent use of either backticks, double, or single quotes
    // [--fix] quotes 强制使用一致的反勾号、双引号或单引号
    quotes: [
        'error',
        'single',
        {
            allowTemplateLiterals: true,
            avoidEscape: true,
        },
    ],

    // [--fix] semi require or disallow semicolons instead of ASI
    // [--fix] semi 要求或禁止使用分号代替 ASI
    semi: ['error', 'always'],

    // [--fix] semi-spacing enforce consistent spacing before and after semicolons
    // [--fix] semi-spacing 强制分号之前和之后使用一致的空格
    'semi-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],

    //  * [--fix] semi-style enforce location of semicolons
    //  * [--fix] semi-style 强制分号的位置
    'semi-style': ['warn'],

    // sort-keys require object keys to be sorted
    // sort-keys 要求对象属性按序排列
    'sort-keys': ['off', 'asc'],

    // [--fix] sort-vars require variables within the same declaration block to be sorted
    // [--fix] sort-vars 要求同一个声明块中的变量按顺序排列
    // 这个规则有点恐怖啊
    // "sort-vars": ["warn"],

    // [--fix] space-before-blocks enforce consistent spacing before blocks
    // [--fix] space-before-blocks 强制在块之前使用一致的空格
    'space-before-blocks': ['warn', 'always'],

    // [--fix] space-before-function-paren enforce consistent spacing before function definition opening parenthesis
    // [--fix] space-before-function-paren 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': ['warn', 'always'],

    // [--fix] space-in-parens enforce consistent spacing inside parentheses
    // [--fix] space-in-parens 强制在圆括号内使用一致的空格
    'space-in-parens': ['warn', 'always'],

    // [--fix] space-infix-ops require spacing around infix operators
    // [--fix] space-infix-ops 要求操作符周围有空格
    'space-infix-ops': [
        'error',
        {
            int32Hint: false,
        },
    ],

    // [--fix] space-unary-ops enforce consistent spacing before or after unary operators
    // [--fix] space-unary-ops 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
        'error',
        {
            nonwords: false,
            words: true,
        },
    ],

    // [--fix] spaced-comment enforce consistent spacing after the // or /* in a comment
    // [--fix] spaced-comment 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
        'error',
        'always',
        {
            markers: [
                'global',
                'globals',
                'eslint',
                'eslint-disable',
                '*package',
                '!',
                ',',
            ],
            // exceptions: ["-", "+"],
        },
    ],

    // [--fix] switch-colon-spacing enforce spacing around colons of switch statements
    // [--fix] switch-colon-spacing 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],

    // [--fix] template-tag-spacing require or disallow spacing between template tags and their literals
    // [--fix] template-tag-spacing 要求或禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': ['error', 'never'],

    // [--fix] unicode-bom require or disallow Unicode byte order mark (BOM)
    // [--fix] unicode-bom 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],

    // [--fix] wrap-regex require parenthesis around regex literals
    // [--fix] wrap-regex 要求正则表达式被括号括起来
    'wrap-regex': 'error',
};
const rulesECMAScript6 = {
    // 与 ES6 有关, 即通常所说的 ES2015：

    // [--fix] arrow-body-style require braces around arrow function bodies
    // [--fix] arrow-body-style 要求箭头函数体使用大括号
    // 这个规则没看懂，
    'arrow-body-style': ['error', 'as-needed'],

    // [--fix] arrow-parens require parentheses around arrow function arguments
    // [--fix] arrow-parens 要求箭头函数的参数使用圆括号
    'arrow-parens': ['off', 'always'],

    // [--fix] arrow-spacing enforce consistent spacing before and after the arrow in arrow functions
    // [--fix] arrow-spacing 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [
        'error',
        {
            after: true,
            before: true,
        },
    ],

    // [eslint:recommended] constructor-super require super() calls in constructors
    // [eslint:recommended] constructor-super 要求在构造函数中有 super() 的调用

    // [--fix] generator-star-spacing enforce consistent spacing around * operators in generator functions
    // [--fix] generator-star-spacing 强制 generator 函数中 * 号周围使用一致的空格
    // 讲道理我们不会用这个
    'generator-star-spacing': [
        'error',
        {
            after: true,
            before: true,
        },
    ],

    // [eslint:recommended] no-class-assign disallow reassigning class members
    // [eslint:recommended] no-class-assign 禁止修改类声明的变量

    // [--fix] no-confusing-arrow disallow arrow functions where they could be confused with comparisons
    // [--fix] no-confusing-arrow 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error'],

    // [eslint:recommended] no-const-assign disallow reassigning const variables
    // [eslint:recommended] no-const-assign 禁止修改 const 声明的变量

    // [eslint:recommended] no-dupe-class-members disallow duplicate class members
    // [eslint:recommended] no-dupe-class-members 禁止类成员中出现重复的名称

    // no-duplicate-imports disallow duplicate module imports
    // no-duplicate-imports 禁止重复模块导入
    'no-duplicate-imports': 'error',

    // [eslint:recommended] no-new-symbol disallow new operators with the Symbol object
    // [eslint:recommended] no-new-symbol 禁止 Symbolnew 操作符和 new 一起使用

    // no-restricted-imports disallow specified modules when loaded by import
    // no-restricted-imports 禁止使用指定的 import 加载的模块
    // https://eslint.bootcss.com/docs/rules/no-restricted-imports

    // [eslint:recommended] no-this-before-super disallow this/super before calling super() in constructors
    // [eslint:recommended] no-this-before-super 禁止在构造函数中，在调用 super() 之前使用 this 或 super

    // [--fix] no-useless-computed-key disallow unnecessary computed property keys in object literals
    // [--fix] no-useless-computed-key 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',

    // no-useless-constructor disallow unnecessary constructors
    // no-useless-constructor 禁用不必要的构造函数

    // [--fix] no-useless-rename disallow renaming import, export, and destructured assignments to the same name
    // [--fix] no-useless-rename 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',

    // [--fix] no-var require let or const instead of var
    // [--fix] no-var 要求使用 let 或 const 而不是 var
    // 好好想一想那个面试题有多难做
    'no-var': 'off',

    // [--fix] object-shorthand require or disallow method and property shorthand syntax for object literals
    // [--fix] object-shorthand 要求或禁止对象字面量中方法和属性使用简写语法
    // 快乐的拥抱 ES6 而不是 IE6，我们有 babel。
    'object-shorthand': ['error', 'always'],

    // [--fix] prefer-arrow-callback require using arrow functions for callbacks
    // [--fix] prefer-arrow-callback 要求回调函数使用箭头函数
    // 如果想要修改这个规则，需要你提供复现场景&代码
    'prefer-arrow-callback': [
        'off',
        {
            allowNamedFunctions: false,
            allowUnboundThis: false,
        },
    ],

    // [--fix] prefer-const require const declarations for variables that are never reassigned after declared
    // [--fix] prefer-const 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',

    // [--fix] prefer-destructuring require destructuring from arrays and/or objects
    // [--fix] prefer-destructuring 优先使用数组和对象解构
    'prefer-destructuring': 'warn',

    // [--fix] prefer-numeric-literals disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    // [--fix] prefer-numeric-literals 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    // 这个东西很少用吧
    'prefer-numeric-literals': 'warn',

    // prefer-rest-params require rest parameters instead of arguments
    // prefer-rest-params 要求使用剩余参数而不是 arguments
    'prefer-rest-params': 'warn',

    // prefer-spread require spread operators instead of .apply()
    // prefer-spread 要求使用扩展运算符而非 .apply()
    'prefer-spread': 'error',

    // [--fix] prefer-template require template literals instead of string concatenation
    // [--fix] prefer-template 要求使用模板字面量而非字符串连接
    'prefer-template': 'off',

    // [eslint:recommended] require-yield require generator functions to contain yield
    // [eslint:recommended] require-yield 要求 generator 函数内有 yield

    // [--fix] rest-spread-spacing enforce spacing between rest and spread operators and their expressions
    // [--fix] rest-spread-spacing 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error', 'never'],

    // [--fix] sort-imports enforce sorted import declarations within modules
    // [--fix] sort-imports 强制模块内的 import 排序
    'sort-imports': [
        'off',
        {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
    ],

    // symbol-description require symbol descriptions
    // symbol-description 要求 symbol 描述
    'symbol-description': ['error'],

    // [--fix] template-curly-spacing require or disallow spacing around embedded expressions of template strings
    // [--fix] template-curly-spacing 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': ['error', 'never'],

    // [--fix] yield-star-spacing require or disallow spacing around the * in yield* expressions
    // [--fix] yield-star-spacing 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [
        'error',
        {
            after: true,
            before: true,
        },
    ],
};
const rulesVue = {
    'vue/html-indent': [
        'warn',
        'tab',
        {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            // alignAttributesVertically: true,
            // ignores: [],
        },
    ],
    // 'vue/script-indent': [
    //     'warn',
    //     'tab',
    //     {
    //         baseIndent: 1,
    //     },
    // ],
    'vue/max-attributes-per-line': [
        'error',
        {
            singleline: {
                max: 3,
            },
            multiline: {
                max: 1,
            },
        },
    ],
    'vue/html-self-closing': ['off'],
    'vue/singleline-html-element-content-newline': [
        'error',
        {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
        },
    ],
    // 'vue/max-attributes-per-line': [
    //     2,
    //     {
    //         singleline: 10,
    //         multiline: {
    //             max: 1,
    //             allowFirstLine: false,
    //         },
    //     },
    // ],
    // 'vue/multiline-html-element-content-newline': 'off',
    // 'vue/name-property-casing': ['error', 'PascalCase'],
    // 'vue/no-v-html': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
};
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "vv": "readonly",
        "base": "readonly",
        "Vue": "readonly",
        "_": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // Possible Errors 错误、逻辑错误
        ...rulesPossibleErrors,

        // Best Practices 这些规则是关于最佳实践的，帮助你避免一些问题
        ...rulesBestPractices,

        // Strict Mode 该规则与使用严格模式和严格模式指令有关
        ...rulesStrictMode,

        // Variables 这些规则与变量声明有关：
        ...rulesVariables,

        // Node.js and CommonJS 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：
        ...rulesCommonjs,

        // Stylistic Issues 这些规则是关于风格指南的，而且是非常主观的：
        ...rulesStylisticIssues,

        // ECMAScript 6 与 ES6 有关, 即通常所说的 ES2015：
        ...rulesECMAScript6,

        ...rulesVue,
    }
};