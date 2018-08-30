import PATHS from "../constants/paths"
import { MAIN_OUTPUT_FILE_NAME, WEBPACK_MODE } from "../constants/names"
import { __DEV__ } from "../store/global"
const {
  MAIN_ENTRY,
  MAIN_OUTPUT,
  MAIN_TS_CONFIG
} = PATHS

const webpackMainConfig = {
  mode  : WEBPACK_MODE,
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