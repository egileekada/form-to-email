import React from 'react'
import Stepone from './stepone'
import Steptwo from './steptwo'
import Preview from './preview'
import { FaArrowLeft } from "react-icons/fa";

function FormComponent() {

    const [tab, setTab] = React.useState(0)
    const [data, setData] = React.useState({} as any)

    return (
        <div className=' w-full flex flex-col' >

            <div className='flex gap-2 items-center' >
                {tab !== 0 && ( 
                    <button className=' outline-none ' onClick={() => setTab((prev) => prev - 1)} >
                        <FaArrowLeft />
                    </button>
                )}
                <p className=' text-[24px] leading-[24px] ' >{tab === 0 ? "Client Information" : tab === 1 ? "Medical History" : "Confirm Your Information"}</p>
            </div>
            {tab === 1 && (
                <p className=' text-[#121212B2] leading-6 ' >Do you have any of the following?</p>
            )}
            <div className=' flex gap-4 mt-6 items-center ' >
                <div className=' h-[13px] w-full lg:w-[181px] bg-[#A2897B] rounded-[32px] ' />
                <div className={` h-[13px] w-full lg:w-[181px] bg-[${tab >= 1 ? "#A2897B" : "#A2897B33"}] rounded-[32px] `} />
                <div className={` h-[13px] w-full lg:w-[181px] bg-[${tab >= 2 ? "#A2897B" : "#A2897B33"}] rounded-[32px] `} />
                {/* <div className=' h-[13px] w-[181px] bg-[#A2897B33] rounded-[32px] ' /> */}
            </div>
            <p className=' leading-[24px] mt-2 ' >{tab + 1} of 3</p>
            <div className=' w-full py-7 ' >
                {tab === 0 && (
                    <Stepone data={data} setData={setData} next={setTab} />
                )}
                {tab === 1 && (
                    <Steptwo data={data} setData={setData} next={setTab} />
                )}
                {tab === 2 && (
                    <Preview data={data} setData={setData} />
                )}
            </div>
        </div>
    )
}

export default FormComponent
