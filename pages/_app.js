import '../styles/globals.scss'
import AppBar from '../components/AppBar'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppBar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
