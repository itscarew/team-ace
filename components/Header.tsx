

export const HeaderComponent = () => {
    return (
        <section className='h-24 flex items-center justify-between' >
            <div className='flex text-xl ' > <h1>Logo</h1> <h1 className='ml-4' ><b>AceCoin</b>Pay</h1>  </div>
            <div className="font-semibold text-white" >
                <span className='bg-blue-900 p-2  rounded-md mr-[0.1rem]' >0</span><span className='bg-blue-900 p-2 rounded-md' >1</span>
                {" "}<span className="text-blue-900" >:</span>{" "}
                <span className='bg-blue-900 p-2 rounded-md mr-[0.1rem]' >1</span><span className='bg-blue-900 p-2 rounded-md' >9</span>
            </div>
        </section>
    )
}