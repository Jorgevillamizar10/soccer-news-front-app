import Head from 'next/head'
import HomePage from '../src/pages/Home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soccer News</title>
        <meta
          name='description'
          content='Generated by Jorge Villamizar and Carlota Lasa'
        />
      </Head>
      <HomePage />
    </div>
  )
}
