import PATHS from "../constants/paths"
import { RENDERER_OUTPUT_FILE_NAME } from "../constants/names"

const webpack = require( 'webpack' )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const CleanWebpackPlugin = require( "clean-webpack-plugin" )


const {
  RENDERER_ENTRY_FILE,
  WEBPACK_HOT_MIDDLEWARE,
  RENDERER_OUTPUT,
  RENDERER_INDEX_HTML,
  RENDERER_OUTPUT_INDEX_HTML,
  RENDERER_TS_CONFIG,
} = PATHS

const webpackClientConfig = {
  mode  : 'development',
  target: 'electron-renderer',
  entry : {
    [ RENDERER_OUTPUT_FILE_NAME ]: [ 
      RENDERER_ENTRY_FILE,
      WEBPACK_HOT_MIDDLEWARE,   
    ]
  },
  output: {
    path      : RENDERER_OUTPUT,
    filename  : '[name]',
    publicPath: '/'
  },
  devtool: 'source-map',
  module : {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use : {
          loader : 'ts-loader',
          options: {
            configFile: RENDERER_TS_CONFIG
          }
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    // new CleanWebpackPlugin( [ RENDERER_OUTPUT ] ),
    new CopyWebpackPlugin( [
      {
        from: RENDERER_INDEX_HTML,
        to  : RENDERER_OUTPUT_INDEX_HTML
      }
    ],
   ),

   new webpack.HotModuleReplacementPlugin()
  ]
}


export default webpackClientConfig