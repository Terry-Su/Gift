const express = require( 'express' )
const PATH = require( 'path' )
const { resolve: resolvePath } = PATH
const webpack = require( 'webpack' )
const webpackConfig = require( './webpack.render.config.js' )

const PATHS = {}
PATHS.ROOT = resolvePath( __dirname, '../' )
PATHS.OUTPUT = resolvePath( PATHS.ROOT, 'build' )
PATHS.INDEX_HTML = resolvePath( PATHS.OUTPUT, 'index.html' )

const { port } = require( './config.js' )

module.exports = () => {
  const app = express()
  const compiler = webpack( webpackConfig )
  
  // webpck hmr
  app.use(
    require( 'webpack-dev-middleware' )( compiler, {
      noInfo    : true,
      publicPath: webpackConfig.output.publicPath
    } )
  )
  
  app.use( require( 'webpack-hot-middleware' )( compiler ) )
  
  app.use( '/build', express.static( PATHS.OUTPUT ) )
  
  
  app.get( "/", ( req, res ) => {
    res.sendFile( PATHS.INDEX_HTML )
  } )
  
  app.listen( port, () => { console.log( `listening on the port ${ port }` ) } )  
}