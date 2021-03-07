import '../styles/globals.css'
import '../styles/typography.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <main className="appContainer">
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
