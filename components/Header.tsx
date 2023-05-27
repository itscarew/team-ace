import { MdWallet } from "react-icons/md"

export const HeaderComponent = () => {
    return (
        <section className='h-24 flex items-center justify-between' >
            <div className='flex items-center text-xl ' > <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center" > <MdWallet color="#fff" />  </div> <h1 className='ml-3 text-darkblue-900 ' ><b>AceCoin</b>Pay</h1>  </div>
            <div className="font-semibold text-white" >
                <span className='bg-blue-900 p-2  rounded-md mr-[0.1rem]' >0</span><span className='bg-blue-900 p-2 rounded-md' >1</span>
                {" "}<span className="text-blue-900" >:</span>{" "}
                <span className='bg-blue-900 p-2 rounded-md mr-[0.1rem]' >1</span><span className='bg-blue-900 p-2 rounded-md' >9</span>
            </div>
        </section>
    )
}