import React from 'react'

interface Props {
    title: string;
    select?: boolean,
    options?: any,
    width?: string,
    textarea?: boolean,
    height?: string,
    onlytext?: boolean,
    value?: string,
    data: any,
    setData?: any
    sign?: boolean
    [x: string]: any
}

function Custominput(props: Props) {
    const {
        title,
        select,
        options,
        width,
        textarea,
        height,
        onlytext,
        value,
        data,
        setData,
        sign,
        ...rest
    } = props



    const handleChange = ({ target: { name, value, type } }: any) => {
        setData({
            ...data,
            [name]: value
        });
    };

    return (
        <div className={` w-full max-w-${width ? width : 'full'} flex flex-col gap-2 `}>
            {!sign && ( 
                <p className=' text-[#344054] leading-5 font-medium ' >{title}</p>
            )}
            {(!textarea && !onlytext) && (
                <>
                    {!select ?
                        <input onChange={(e) => handleChange(e)} {...rest} value={value} style={sign ? {} : { boxShadow: '0px 1px 2px 0px #1018280D' }} className={` ${sign ? "border-b" : "border"} border-[${sign ? "#121212" : "#D0D5DD"}] ${sign ? " rounded-none" : " rounded-lg h-[44px] px-4"} outline-none w-full `} /> :
                        <select onChange={(e) => handleChange(e)} {...rest} style={{ boxShadow: '0px 1px 2px 0px #1018280D' }} className=' border border-[#D0D5DD] rounded-lg h-[44px] w-full '>
                            {options?.map((item: any, index: number) => {
                                return (
                                    <option key={index} value={item?.includes("Select") ? "" : item} >{item}</option>
                                )
                            })}
                        </select>
                    }
                </>
            )}
            {(textarea && !onlytext) && (
                <textarea onChange={(e) => handleChange(e)} {...rest} style={{ boxShadow: '0px 1px 2px 0px #1018280D', height: height ? height : "44px" }} className={` border border-[#D0D5DD] rounded-lg p-4 w-full outline-none `} />
            )}
            {(onlytext && value) && (
                <div className={` ${sign ? "border-b" : ""} border-[${sign ? "#121212" : "#D0D5DD"}] text-[#121212] flex items-center h-[44px] `} >
                    <p >{value}</p>
                </div>
            )}
        </div>
    )
}

export default Custominput
