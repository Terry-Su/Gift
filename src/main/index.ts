import URLS from "../server/constants/urls"
const { ENTRY_URL } = URLS
import * as electron from 'electron'

const { BrowserWindow, app } = electron

console.log( 123 )
// browser window
let win

function createWindow() {
// BrowserWindow.addDevToolsExtension( '' )
  win = new BrowserWindow( { width: 800, height: 600 } )
  win.loadURL( ENTRY_URL )
  win.webContents.openDevTools()
}

app.on( "ready", createWindow )

app.on( 'activate', () => {
  if ( win === null ) {
    createWindow()
  }
} )