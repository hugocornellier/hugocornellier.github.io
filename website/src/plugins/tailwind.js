module.exports = function () {
    return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("@tailwindcss/postcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
        },
    };
};