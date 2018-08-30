export default function () {
  // Set `__PROP__` to true to indicate that current mode
  // is production if it is not development
  if ( process.env.NODE_ENV !== 'development' ) {
    global[ '__PROD__' ] = true
  } else {
    global[ '__PROD__' ] = false
  }
}