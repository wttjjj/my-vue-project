// stylelint.config.js
/**
 * 警告报错查询
 * https://stylelint.cn/user-guide/rules/
 */
 module.exports = {
    "defaultSeverity": "error",
    "extends": ["stylelint-config-recommended", "stylelint-config-standard" ],
    "rules": {
        "indentation": 4,
        // 禁止使用无效的十六进制颜色。
        'color-no-invalid-hex': true,

        // 禁止在calc函数内使用空格运算符。
        'function-calc-no-unspaced-operator': true,

        // linear-gradient()根据标准语法禁止无效的呼叫中的方向值。
        'function-linear-gradient-no-nonstandard-direction': true,

        // unit-no-unknown：禁止使用未知单位。

        // 禁止未知属性。
        'property-no-unknown': true,

        // ：不允许!important在关键帧声明中使用。
        'keyframe-declaration-no-important': true,

        // 禁止在声明块中使用重复的自定义属性。
        'declaration-block-no-duplicate-properties': true,
        // 不允许覆盖覆盖相关的速记属性的速记属性。
        'declaration-block-no-shorthand-property-overrides': true,

        // 禁止优先级较低的选择器替代优先级较高的选择器。
        'no-descending-specificity': true,
        // 禁止在样式表中使用重复的选择器。
        'no-duplicate-selectors': true,
        // 禁止使用空来源。
        'no-empty-source': true,
        // 禁止使用多余的分号（可自动修复）。
        'no-extra-semicolons': true,
        // 禁止//...CSS不支持的双斜杠注释（）。
        'no-invalid-double-slash-comments': true,

        'color-named': 'never',
        'length-zero-no-unit': true,

        // block-no-empty：禁止空块。
        'block-no-empty': true,

        'selector-no-qualifying-type': true
    }
};
