import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Netflix - Home</title>
        <meta
          name='description'
          content='Netflix clone created by Daniel'
        />
      </Head>

      <main className='h-screen'>
        <div className='flex bg-gray-700 w-full h-52 justify-center items-center space-x-6'>
          <h1 className='text-4xl font-bold text-blue-200'>Daniel</h1>
          <button className='px-4 py-2 text-2xl text-cyan-200 font-bold bg-amber-800 hover:ring-4 rounded-2xl border-2'>
            Nice!
          </button>
        </div>
      </main>
    </>
  )
}

export default Home
