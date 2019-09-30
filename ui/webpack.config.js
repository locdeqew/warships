const path = require('path');

module.exports = {
    mode: "production",

    devtool: "source-map",

    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".js", ".ts", ".tsx"]
    },

    module: {
        rules: [
            {
              test: /\.ts(x?)$/,
              include: path.resolve(__dirname, 'src'),
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                }
              ]
            },
            {
              test: /\.js$/,
              use: ["source-map-loader"],
              enforce: "pre"
            },
            {
              test: /\.css$/i,
              loader: 'css-loader',
              options: {
                modules: true,
              },
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        compress: true,
        port: 9000
    }
};