const express = require( 'express' )
const PATH = require( 'path' )
const { resolve: resolvePath } = PATH
const webpack = require( 'webpack' )
const webpackConfig = require( './webpack.render.config.js' )
const buildDirectory = PATH.resolve( __dirname, './build' )

const PATHS = {}
PATHS.ROOT = resolvePath( __dirname, '../' )

const { port } = require( './config' )




function runServer() {
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

app.use( express.static( buildDirectory ) )
app.use( express.static( PATHS.ROOT ) )

app.get( "/", ( req, res ) => {
  res.sendFile( PATH.resolve( __dirname, 'build/index.html' ) )
} )

app.listen( port, () => { console.log( `listening on the port ${ port }` ) } )

}

module.exports = { runServer }