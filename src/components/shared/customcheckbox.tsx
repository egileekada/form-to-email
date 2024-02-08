// import React from 'react' 

interface Props {
    title: string,
    reverse?: boolean,
    value?: boolean,
    name?: string,
    data?: any,
    setData?: any,
    opposite?: boolean, 
}

function Customcheckbox(props: Props) {
    const {
        title,
        reverse,
        value,
        name,
        data,
        setData,
        opposite, 
    } = props

    const handleChange = ({ target: { name, checked } }: any) => {
        console.log(checked);
        setData({
            ...data,
            [name]: opposite ? !checked : checked
        });
    }

    return (
        <div className={` ${reverse ? ' flex-row-reverse ' : ''} flex items-center text-sm gap-2 `} >
            {/* {!onlytext && (  */}
                <input onChange={(e) => handleChange(e)} name={name} checked={opposite ? !value : value} className=' mt-4 ' type="checkbox" />
             
            <p>{title}</p>
        </div>
    )
}

export default Customcheckbox
