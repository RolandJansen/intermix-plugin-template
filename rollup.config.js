const typescript = require("@wessberg/rollup-plugin-ts");
const resolve = require("rollup-plugin-node-resolve");
const pkg = require("./package.json");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

module.exports = {
    input: pkg.entry,
    output: [
        {
            name: pkg.main.slice(0, -3),
            file: pkg.outDir + "/" + pkg.main,
            format: "iife",
            sourcemap: true,
        },
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        resolve({ module: true, extensions }),
        typescript(),
    ],
};
