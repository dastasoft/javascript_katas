import globals from "globals";
import pluginJs from "@eslint/js";
import jest from 'eslint-plugin-jest'
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {globals: {...globals.browser, ...globals.node}},
        plugins: {
            pluginJs,
            jest
        },
        rules: {}
    },
    eslintConfigPrettier,
];