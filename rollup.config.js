const typescript = require("@wessberg/rollup-plugin-ts");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
// const externalGlobals = require("rollup-plugin-external-globals");
// const multiInput = require("rollup-plugin-multi-input").default;
const liveServer = require("rollup-plugin-live-server").liveServer;
const pkg = require("./package.json");
// const createPlugin = require("rollup-plugin-external-globals");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

let output = {
    name: "intermix.plugins.myPlugin", // + pkgName,
    dir: pkg.outDir,
    format: "iife",
    // globals: { intermix: "intermix" },
    sourcemap: true,
}
const inputProd = pkg.entry;
const inputDev = pkg.entryDev;
let input = inputProd;
// let output = {
//     file: pkg.main,
//     format: "es",
// }

let external = [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {})
];
let plugins = [
    resolve({ extensions }),
    commonjs(),
    // externalGlobals({
    //     intermix: "intermix"
    // }),
    // multiInput(),
    typescript(),
];

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
    input = inputDev;
    output = {
        dir: pkg.outDir,
        format: "es",
        manualChunks: {
            intermix: ["intermix"],
        }
    }
    external = [];
    plugins = [...plugins, liveServer(liveServerConfig)];
}

const config = {
    input,
    output,
    external,
    plugins,
};
module.exports = config;
