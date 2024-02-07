import React from 'react'
import Custominput from '../shared/custominput'
import Customcheckbox from '../shared/customcheckbox'

interface Props {
    next: any,
    hidebtn?: boolean,
    onlytext?: boolean,
    data?: any, 
    setData?: any
}

function Stepone(props: Props) {
    const {
        next,
        hidebtn,
        onlytext,
        data,
        setData
    } = props

    console.log(data);
    

    return (
        <div className=' w-full flex flex-col items-center ' >
            <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-4' >
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.name ? data?.name : ""} name="name" title='Name' type={"text"} placeholder={"Davidson Mandison"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.email ? data?.email : ""} name="email" title='Email Address' type={"text"} placeholder={"olivia@untitledui.com"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.address ? data?.address : ""} name="address" title='Address' type={"text"} placeholder={"Enter Address"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.city ? data?.city : ""} name="city" title='City' type={"text"} placeholder={"Enter City"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.phone ? data?.phone : ""} name="phone" title='Phone Number' type={"tel"} placeholder={"+234"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.state ? data?.state : ""} name="state" title='State' select={true} options={["Select State"]} />
                <div className='  w-full flex gap-4 ' >
                    <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.sex ? data?.sex : ""} name="sex" title='Sex' width='full' select={true} options={["Select Sex", "Male", "Female", "Other"]} placeholder={"Davidson Mandison"} />
                    <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.date ? data?.date : ""} name="date" title='Select Date of birth' width='full' type={"date"} placeholder={"Davidson Mandison"} />
                </div>
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.zip ? data?.zip : ""} name="zip" title='Zip Code' type={"number"} placeholder={"1232"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.emergency ? data?.emergency : ""} name="emergency" title='Emergency Contact' type={"number"} placeholder={"1232"} />
                <Custominput data={data} setData={setData} onlytext={onlytext} value={data?.aboutus ? data?.aboutus : ""} name="aboutus" title='How did you hear about us?' select={true} options={["Select Social Media", "Facebook", "Instagram"]} />

            </div>
            <div className=' w-full flex items-center justify-start gap-3 py-5 ' >
                <Customcheckbox data={data} setData={setData} reverse={true} value={data?.addedemail ? data?.addedemail : false} name="addedemail" title='Would you like to be added to our email list for News and exclusive offer' />
            </div>
            {!hidebtn && (
                <button onClick={() => next(1)} className=' w-full bg-[#A2897B] mt-5 rounded-lg h-11 leading-6 text-white font-medium ' >
                    Next
                </button>
            )}
        </div>
    )
}

export default Stepone
