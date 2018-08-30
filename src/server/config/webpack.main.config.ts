import PATHS from "../constants/paths"
import { MAIN_OUTPUT_FILE_NAME } from "../constants/names"
const {
  MAIN_ENTRY,
  MAIN_OUTPUT,
  MAIN_TS_CONFIG
} = PATHS

console.log( MAIN_TS_CONFIG )

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
          loader : 'ts-loader',
          options: {
            configFile: MAIN_TS_CONFIG
          },
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.json'
    ]
  },
}


export default webpackMainConfig