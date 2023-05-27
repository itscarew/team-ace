import { TbNotes } from "react-icons/tb"
import { RiAppleFill } from "react-icons/ri"
import { TfiClose } from "react-icons/tfi"
import { AiOutlineWifi } from "react-icons/ai"
import Image from 'next/image'


export const PayComponent = () => {
    return (
        <>
            <div className='bg-white h-full flex flex-col justify-end relative  text-darkblue-900' >
                <div className='absolute bg-blue-400 h-2 top-0 left-[40%] w-12 rounded-md' style={{ boxShadow: `-2px 28px 30px 8px rgba(69,89,222,1)` }} >
                </div>
                <div className=' absolute top-1.5 left-[12%] h-[17rem] w-[76%]  rounded-xl z-10 drop-shadow-2xl px-6 pt-7 pb-6'
                    style={{ backgroundColor: `rgba(255, 255, 255, 0.8)` }}
                >
                    <div className='flex justify-between items-center pb-2.5 text-sm  ' >
                        <Image src={"/simpchip.jpg"} alt="mastercard" width={30} height={40} />
                        <AiOutlineWifi size={26} />
                    </div>

                    <div className='mt-[4.7rem] mb-2 font-semibold ' >
                        <p className='text-sm font-semibold' >Jonathan Michael</p>
                        <p className='font-bold'  >* * * * &nbsp;&nbsp;&nbsp; 3456</p>
                    </div>

                    <div className='flex justify-between items-center pb-2.5 text-sm  ' >
                        <p className='font-bold text-xs' >09/22</p>
                        <div>
                            <Image src={"/mastercard.png"} alt="mastercard" width={70} height={70} />
                            <p className='text-center font-bold ' style={{ fontSize: "0.5rem", lineHeight: 0 }} >mastercard</p>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div className='w-7 h-7 bg-white rounded-full absolute bottom-[6rem] -left-3 ' ></div>
                    <div className='w-7 h-7 bg-white rounded-full absolute bottom-[6rem] -right-3' ></div>
                    <div className='bg-gray-200 h-[22.5rem] border-b-gray-400 border-b-2 border-dashed rounded-t-xl flex flex-col justify-end px-8 pb-4' >
                        <div className='flex justify-between items-center pb-2.5 text-sm  ' >
                            <p className="text-gray-500" >Company</p>
                            <div className='font-bold flex items-center' >
                                <div className='bg-blue-900 rounded-full h-4 w-4 flex items-center justify-center mr-1' > <RiAppleFill color='white' size={10} /> </div>
                                <p>  Apple </p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pb-2.5 text-sm  ' >
                            <p className="text-gray-500" >Order Number</p>
                            <p className='font-bold' >1266201 </p>
                        </div>
                        <div className='flex justify-between items-center pb-2.5 text-sm  ' >
                            <p className="text-gray-500" >Product</p>
                            <p className='font-bold' > Macbook Air </p>
                        </div>
                        <div className='flex justify-between items-center pb-2.5 text-sm  ' >
                            <p className="text-gray-500" >VAT(20%)</p>
                            <p className='font-bold' >$100.00 </p>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-[7rem] rounded-b-xl flex items-center justify-between px-8'>
                        <div>
                            <p className='text-sm text-gray-500' >You have to pay</p>
                            <div><span className='text-2xl font-bold' >549</span><span className='text-sm'>.99</span><span className='text-sm' > USD</span>  </div>
                        </div>
                        <div>
                            <TbNotes size={30} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

