import Head from 'next/head'
import { Inter } from '@next/font/google'
import { HeaderComponent } from '@/components/Header'
import { FormComponent } from '@/components/Form'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-200 w-full  min-h-screen flex items-center justify-center ' >
        <div className='bg-white w-[75%] h-[70%] flex ' >
          <div className='w-7/12 py-8 px-8'>
            <HeaderComponent />
            <FormComponent />
          </div>
          <div>
            2
          </div>
        </div>
      </div>
    </>
  )
}
