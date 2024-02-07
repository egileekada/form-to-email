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
            <p className=' text-[#344054] leading-5 font-medium ' >{title}</p>
            {(!textarea && !onlytext) && (
                <>
                    {!select ?
                        <input  onChange={(e) => handleChange(e)} {...rest} value={value} style={{ boxShadow: '0px 1px 2px 0px #1018280D' }} className=' border border-[#D0D5DD] rounded-lg px-4 h-[44px] w-full ' /> :
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
            {onlytext && (
                <p className=' text-[#121212] ' >{value}</p>
            )}
        </div>
    )
}

export default Custominput
