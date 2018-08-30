const webpack = require( 'webpack' )
import webpackConfig from './config/webpack.main.config'

export default function ( callback ) {
  const compiler = webpack( webpackConfig )

  const watching = compiler.watch( {
    aggregateTimeout: 300,
    poll            : undefined
  }, ( err, stats ) => {
    if ( err ) {
      console.error( err )
      return
    }

    console.log(
      stats.toString( {
        chunks: false,
        colors: true
      } )
    )
    
    callback()
  } )
}