import PATHS from "../constants/paths"
import { RENDERER_OUTPUT_FILE_NAME, MAIN_OUTPUT_FILE_NAME } from "../constants/names"

const webpack = require( 'webpack' )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const CleanWebpackPlugin = require( "clean-webpack-plugin" )


const {
  MAIN_ENTRY,
  MAIN_OUTPUT
} = PATHS

const webpackMainConfig = {
  mode  : 'development',
  target: 'electron-main',
  entry : MAIN_ENTRY,
  output: {
    path    : MAIN_OUTPUT,
    filename: MAIN_OUTPUT_FILE_NAME,
  },
  devtool: 'source-map',
  module : {
    rules: [
      {
        test: /\.ts$/,
        use : {
          loader: 'ts-loader',
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
}


export default webpackMainConfig