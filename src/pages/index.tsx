import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blogs - Himanshu</title>
        <meta name="description" content="Blogs by himanshu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="font-semibold">Hello</p>
      </main>
    </div>
  )
}

export default Home
