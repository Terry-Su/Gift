const PATH = require( 'path' )
const { resolve } = PATH
const webpack = require( 'webpack' )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const CleanWebpackPlugin = require( "clean-webpack-plugin" )

const PATHS = {}
PATHS.ROOT = resolve( __dirname, '../' )
PATHS.SRC = resolve( PATHS.ROOT, 'src' )
PATHS.BUILD = resolve( PATHS.ROOT, 'build' )
PATHS.RENDER = resolve( PATHS.SRC, 'render' )
PATHS.RENDER_ENTRY = resolve( PATHS.RENDER, 'entry' )
PATHS.RENDER_OUTPUT = resolve( PATHS.BUILD, '' )
PATHS.FROM_RENDER_INDEX_HTML = resolve( PATHS.RENDER, 'index.html' )
PATHS.TO_RENDER_INDEX_HTML = resolve( PATHS.BUILD, 'index.html' )
PATHS.WEBPACK_HOT_MIDDLEWARE = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000" 
const OUTPUT_FILE_NAME = 'bundle.js'

module.exports = {
  target: 'electron-renderer',
  entry : {
    [ OUTPUT_FILE_NAME ]: [ PATHS.RENDER_ENTRY, PATHS.WEBPACK_HOT_MIDDLEWARE ]
  },
  output: {
    filename: '[name]',
    path    : PATHS.RENDER_OUTPUT,
  },
  devtool: 'source-map',
  module : {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use : {
          loader: 'ts-loader',
        // options: {
        //   transpileOnly: true //HMR doesn't work without this
        // }
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
    new CleanWebpackPlugin( [ PATHS.BUILD ] ),
    new CopyWebpackPlugin( [
      {
        from: PATHS.FROM_RENDER_INDEX_HTML,
        to  : PATHS.TO_RENDER_INDEX_HTML
      }
    ],
    [ new webpack.HotModuleReplacementPlugin() ]
   )
  ]
}