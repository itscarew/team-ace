import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { HiCheckBadge } from "react-icons/hi2"
import { IoIosKeypad } from "react-icons/io"
import { MdEdit } from "react-icons/md"
import { LabelComponent } from "./Label"


export const FormComponent = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = event.target.value
            .replace(/[^0-9]/g, '') // Remove non-digit characters
            .replace(/(\d{4})/g, '$1 - ') // Add a dash after every four digits
            .trim(); // Remove any leading/trailing spaces

        setInputValue(formattedValue);
    };

    return (
        <form>
            <div className='mb-6' >
                <div className='flex items-center justify-between mb-6' >
                    <div>
                        <h1 className='font-bold'>Card Number</h1>
                        <p className='text-xs font-semibold text-gray-400 mt-1' >Enter the 16-digit card number on the card</p>
                    </div>
                    <div className='flex items-center text-blue-400' > <MdEdit /> <span className='ml-1 font-semibold' >Edit</span>  </div>
                </div>
                <div className='flex items-center relative' >
                    <input className='border border-gray-300 w-full h-14 rounded-lg focus:bg-gray-50 outline-none pl-14'
                        placeholder='2456&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp; 2456&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;2456&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;2456'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <span className='-ml-10 text-blue-400'  > <HiCheckBadge size={24} /> </span>
                    <span className='absolute top-2 left-0 text-blue-700'><Image src={"/mastercard.png"} alt="mastercard" width={60} height={60} />  </span>
                </div>
            </div>

            <div className='mb-6 flex items-center justify-between' >
                <LabelComponent title="CVV Number" text="Enter the 3 or 4 digit number on the card" />
                <div className='flex items-center ml-[1rem] w-[55%]' >
                    <input className='border border-gray-300 w-full h-14 rounded-lg focus:bg-gray-50 outline-none pl-36'
                        placeholder='327'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <span className='-ml-10 text-gray-500'> <IoIosKeypad size={24} /> </span>
                </div>
            </div>

            <div className='mb-6 flex items-center justify-between' >
                <LabelComponent title="Expiry Date" text="Enter the expiration date of the card" />
                <div className='flex items-center ml-[1rem] w-[55%]' >
                    <input className='border border-gray-300 w-full h-14 rounded-lg focus:bg-gray-50 outline-none pl-36'
                        placeholder='327'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <span className='-ml-10 text-gray-500'> <IoIosKeypad size={24} /> </span>
                </div>
            </div>

            <div className='mb-6 flex items-center justify-between' >
                <LabelComponent title="Password" text="Enter your dynamic password" />
                <div className='flex items-center  ml-[1rem] w-[55%]' >
                    <input className='border border-gray-300 w-full h-14 rounded-lg focus:bg-gray-50 outline-none pl-8'
                        type={"password"}
                        placeholder="*********"
                    />
                    <span className='-ml-10 text-gray-500'> <IoIosKeypad size={24} /> </span>
                </div>
            </div>

            <button className='w-full bg-blue-700 text-white text-center font-semibold rounded-lg h-16 my-4' >
                Pay Now
            </button>
        </form>
    )
}

