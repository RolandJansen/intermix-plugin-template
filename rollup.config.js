const typescript = require("@wessberg/rollup-plugin-ts");
const omt = require("@surma/rollup-plugin-off-main-thread");
const pkg = require("./package.json");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

module.exports = {
    input: pkg.entry,
    output: [
        {
            dir: "dist",
            format: "es",
            sourcemap: true,
        },
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        typescript(),
        omt(),
    ],
};
