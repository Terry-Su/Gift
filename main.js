const electron = require( "electron" )
const PATH = require( 'path' )
const { resolve: resolvePath } = PATH
const { app, BrowserWindow } = require( "electron" )
const { port } = require( './scripts/config' )

const PATHS = {}
PATHS.BUILD = resolvePath( __dirname, 'build' )

const URL = `http://localhost:${port}`

// browser window
let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow( { width: 800, height: 600 } )

  
  // and load the index.html of the app.
  win.loadURL( URL )

  win.webContents.openDevTools()



}

app.on( "ready", createWindow )

// app.on( 'activate', () => {
//   // On macOS it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if ( win === null ) {
//     createWindow()
//   }
// } )