import Head from 'next/head'
import { HeaderComponent } from '@/components/Header'
import { FormComponent } from '@/components/Form'
import { PayComponent } from '@/components/PayComponent'
import { TfiClose } from 'react-icons/tfi'

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
        <div className='bg-white w-[70%] h-[70%] flex md:flex-row flex-col  relative ' >
          <div className='w-11 h-9 bg-gray-50 absolute top-0 right-0 flex items-center justify-center'> <TfiClose /> </div>
          <div className='md:w-[68%] w-full  py-8 md:pl-12 md:pr-6 px-8'>
            <HeaderComponent />
            <FormComponent />
          </div>
          <div className='flex-1 py-12 md:pl-6 md:pr-12 px-8 relative'>
            <PayComponent />
          </div>
        </div>
      </div>
    </>
  )
}
