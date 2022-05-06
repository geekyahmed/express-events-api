export default {
    presets: [
        [
            "@babel/env",
            {
                modules: false,
                targets: { node: "current" },
            },
        ],
    ],
    plugins: ["@babel/proposal-function-sent"],
};