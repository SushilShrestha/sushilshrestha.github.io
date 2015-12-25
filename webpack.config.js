module.exports = {
    entry: {
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/dev-server',
        index: './index.jsx',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].entry.js'
    },
    // plugins: [
    // new webpack.HotModuleReplacementPlugin()
    // ],
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel?presets[]=react,presets[]=es2015', exclude: /(node_modules|bower_components)/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.png$/, loader: 'file-loader?name=../../img/[name].[ext]' },
            { test: /\.jpg$/, loader: 'file-loader?name=../../img/[name].[ext]' },
            { test: /\.html/, loader: 'file?name=./[name].[ext]' },
            ]
        },
        resolve: {
        extensions: ['', '.js']
    }
};
