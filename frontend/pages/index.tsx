import Head from 'next/head'
import HomeContainer from '../src/features/Home/HomeContainer'

const Home: React.FC = () => (
  <>
    <Head>
      <title>Article Square - Artigos e Notícias</title>
      <meta name="description" content="Generated by Roberto Assis" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeContainer />
  </>
)

export default Home