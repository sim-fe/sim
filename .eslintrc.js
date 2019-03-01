module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "rules": {
        "vue/require-v-for-key": "off",
        "vue/no-use-v-if-with-v-for": "off",
        "vue/no-console": "off",
        "vue/no-debugger": "off",
        "no-debugger": "off",
        "no-console": "off",
        "vue/valid-v-for": "off",
        "vue/no-parsing-error": [2, {"x-invalid-end-tag": false }]
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
}