const typescript = require("@wessberg/rollup-plugin-ts");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const liveServer = require("rollup-plugin-live-server");
const pkg = require("./package.json");

const pkgName = pkg.main.slice(0, -3);
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = pkg.entry;
const output = [
    {
        name: "intermix.plugins." + pkgName,
        file: pkg.outDir + "/" + pkg.main,
        format: "iife",
        globals: { intermix: "intermix" },
        sourcemap: true,
    },
];
// const globals = {
//     "intermix": "intermix",
// };
const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
];
const plugins = [
    resolve({ extensions }),
    commonjs(),
    typescript(),
];
const config = {
    input,
    output,
    external,
    plugins,
};

const liveServerConfig = {
    port: 5000,
    open: false,
    logLevel: 2,
    root: "demo",
    file: "index.html",
    mount: [
        ["/demo", "./demo"],
        ["/dist", "./dist"],
        ["/node_modules", "./node_modules"],
    ],
};

if (process.env.TARGET === "debug") {
    config.plugins = [...plugins, liveServer.liveServer(liveServerConfig)];
    config.external = [];
}

module.exports = config;
