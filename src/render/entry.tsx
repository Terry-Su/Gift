import React from 'react'
import { render } from 'react-dom'
import TheApp from './components/TheApp';
import { hot } from 'react-hot-loader'

const TheHotApp = hot( module )( TheApp )

render( <TheHotApp/>, document.getElementById( 'app' ) )