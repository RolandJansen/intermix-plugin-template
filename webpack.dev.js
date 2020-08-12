const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',  // eval based sm doesn't work with vs debugger
    devServer: {
        contentBase: common.output.path,
        open: true,  // opens the default browser; you can set this to the name of your dev browser
        hot: true,
    },
});
