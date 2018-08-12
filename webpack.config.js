const path = require('path');

module.exports = {
    //mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
    
  },
//   plugins: [
        
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: JSON.stringify('development'),
//                 WEBPACK: true
//             }
//         })
//     ],

  resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
  module: {
     
        rules: [
            {
                /**
                 * Babel loader is used for any JS or JSX files in the src directory
                 */
                test: /\.jsx?/,
                use: {
                    loader: 'babel-loader'
                }
                    
                //include: path.resolve(__dirname, 'src'),
            },
        ]
        
    }
  
};