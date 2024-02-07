// import React from 'react' 

function Navbar() { 

    return (
        <div className=' w-full h-[95px] px-8 bg-white border-b border-[#A2897B] flex justify-between items-center ' >
            <img alt='logo' src='/images/logo.svg' />
            {/* <div className=' flex items-center gap-5 ' >
                <button className=' flex border border-[#A2897B] font-medium text-[#A2897B] rounded-[32px] items-center justify-center w-[162px] h-[51px] ' >
                    Sign In
                </button>
                <button className=' flex border border-[#A2897B] font-medium text-[#A2897B] gap-1 items-center justify-center rounded-[32px] w-[162px] h-[51px] ' >
                    <Exit />
                    Exit
                </button>
            </div> */}
        </div>
    )
}

export default Navbar
