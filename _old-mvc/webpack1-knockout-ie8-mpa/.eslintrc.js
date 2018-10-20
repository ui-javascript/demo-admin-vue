module.exports = {
    "root": true,
    "extends": "eslint:recommended", // 使用推荐的配置
    "parserOptions": {
        "ecmaVersion": 6, // 启用es6语法
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env":{ 
        "es6": true, // 启用es6新语法
        "browser": true,
        "commonjs": true,
        "jquery": true
    },
    "plugins": [],
    "rules": {
        // "semi": 2, // 语句后要有分号
        "array-callback-return": "error", // 数组方法的回调函数中有 return 语句
        "block-scoped-var": "error", // 强制把变量的使用限制在其定义的作用域范围内
        "consistent-return": "error", // 要求函数所有的代码路径的返回值一致
        "curly": "error", // 强制所有控制语句使用一致的括号风格
        "eqeqeq": "error", // 要求使用 === 和 !==
        "no-else-return": "error", // 禁止 if 语句中 return 语句之后有 else 块
        "no-invalid-this": "error", // 禁止 this 关键字出现在类和类对象之外
        "no-loop-func": "error", // 禁止在循环中出现 function 声明和表达式
        "no-multi-spaces": "error", // 禁止使用多个空格
        "no-new": "error", // 禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量
        "no-self-compare": "error", // 禁止自身比较
        "no-undef-init": "error", // 禁止将变量初始化为undefined
        "no-use-before-define": "error", // 禁止在变量定义之前使用它们
        "indent": ["error", 2], // 使用4个空格缩进
        "keyword-spacing": ["error", {"before": true, "after": true}], // 关键字前后空格
        "max-nested-callbacks": ["error", { "max": 3}], // 设置回调函数最大嵌套深度
        "max-params": ["error", { "max": 5}], // 限制函数定义中最大参数个数
        "new-cap": "error", // 要求构造函数首字母大写
        "arrow-spacing": "error", // 强制箭头函数的箭头前后使用一致的空格
        // "no-var": "error", // 要求使用 let 或 const 而不是 var
        "space-infix-ops": ["error", {"int32Hint": false}] // 要求操作符两边有空格
    },
    "globals": {
        "ko": true
    }
}