const { electron } = require( 'electron' )
const { spawn } = require( 'child_process' )
const PATH = require( 'path' )
const { resolve: resolvePath } = PATH
const { runServer } = require( './server.js' )
const { port } = require( './config' )


const PATHS = {}
PATHS.ELECTRON_ENTRY = resolvePath( __dirname, '../main.js' )


runServer()
spawn( 'electron', [ `--inspect=${ port }`, PATHS.ELECTRON_ENTRY ] )