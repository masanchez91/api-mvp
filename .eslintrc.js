module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "indent": ["error", 4],
        "strict": "off",
        "prefer-template": "off",
        "no-param-reassign": "off",
        "max-len": ["warn", 200, { "ignoreComments": true }],
        "linebreak-style": "off",
        "no-plusplus": "off",
        "arrow-parens": "off",
        "import/newline-after-import": "off",
        "no-throw-literal": "off",
        "new-cap": "off"
    }
}
