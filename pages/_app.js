import '../styles/globals.css'

//Components
import Navbar from '../components/navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
