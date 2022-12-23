import '../styles/globals.css'
import Layout from '../components/layout/layout'

import MainNavigation from '../components/layout/main-navigation'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
  
  
}
