module.exports = {
    entry: ['./app/index.js'],
    mode: 'development',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    devServer: {
        port: 3000,
        contentBase: __dirname + "/build",
        inline: true
    }
}
