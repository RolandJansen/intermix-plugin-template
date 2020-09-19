const typescript = require("@wessberg/rollup-plugin-ts");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const terser = require("rollup-plugin-terser").terser;
const liveServer = require("rollup-plugin-live-server").liveServer;
const pkg = require("./package.json");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const inputProd = pkg.entry;
const inputDev = pkg.entryDev;
let input = inputProd;
let output = [
    {
        file: pkg.outDir + "/Plugin.min.js",
        format: "es",
        plugins: [terser()],
    },
    {
        file: pkg.outDir + "/Plugin.js",
        format: "es",
    },
];

const external = [
    ...Object.keys(pkg.peerDependencies || {}),
];

let plugins = [
    resolve({ extensions }),
    commonjs(),
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
    plugins = [...plugins, liveServer(liveServerConfig)];
}

const config = {
    input,
    output,
    external,
    plugins,
};
module.exports = config;
