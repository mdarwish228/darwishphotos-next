import Head from 'next/head'

import Gallery from "../components/Gallery"
import LogoNavBar from "../components/LogoNavBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Darwish Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white'>
        <LogoNavBar />
        <Gallery />
      </div>
    </>
  )
}
