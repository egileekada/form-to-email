import Customcheckbox from '../shared/customcheckbox'
import Custominput from '../shared/custominput'

interface Props {
    next?: any,
    onlytext?: boolean,
    hidebtn?: boolean,
    data?: any,
    setData?: any
}

function SteptwoView(props: Props) {
    const {
        next,
        onlytext,
        hidebtn,
        data,
        setData
    } = props 
    
    return (
        <div className=' w-full flex flex-col text-[#121212] items-center ' >
            <div className=' max-w-[800px] w-full flex flex-col gap-4' >
                <div>
                    <p className=' text-lg leading-6 ' >Lash Lift Concentration</p>
                    <div className=' grid grid-cols-3 gap-4 mt-6 ' >

                        <Customcheckbox data={data} setData={setData} value={data?.dryeye ? data?.dryeye : false} name={"dryeye"} title={'Dry Eye Syndrome'} />
                        <Customcheckbox data={data} setData={setData} value={data?.sensitiveye ? data?.sensitiveye : false} name={"sensitiveye"} title={'Sensitive Eyes'} />
                        <Customcheckbox data={data} setData={setData} value={data?.rosacealift ? data?.rosacealift : false} name={"rosacealift"} title={'Ocular Rosacea'} />
                        <Customcheckbox data={data} setData={setData} value={data?.chemotherapylift ? data?.chemotherapylift : false} name={"chemotherapylift"} title={'Chemotherapy'} />
                        <Customcheckbox data={data} setData={setData} value={data?.historylift ? data?.historylift : false} name={"historylift"} title={'History of Eye infection'} />
                        <Customcheckbox data={data} setData={setData} value={data?.sjorgSensitiveen ? data?.sjorgSensitiveen : false} name={"sjorgSensitiveen"} title={'SjorgSensitiveen Syndrome'} />

                    </div>
                </div>
                <div className=' mt-2 ' >
                    <p className=' text-lg leading-6 ' >Brow Lamination Contraindication</p>
                    <div className=' grid grid-cols-3 gap-4 mt-6 ' >
                        <Customcheckbox data={data} setData={setData} value={data?.alopociabrow ? data?.alopociabrow : false} name={"alopociabrow"} title={'Alopocia'} />
                        <Customcheckbox data={data} setData={setData} value={data?.psorasisbrow ? data?.psorasisbrow : false} name={"psorasisbrow"} title={'Psorasis'} />
                        <Customcheckbox data={data} setData={setData} value={data?.woundsbrom ? data?.woundsbrom : false} name={"woundsbrom"} title={'Wounds Treatment Area'} />
                        <Customcheckbox data={data} setData={setData} value={data?.chemotherapybrow ? data?.chemotherapybrow : false} name={"chemotherapybrow"} title={'Chemotherapy'} />
                        <Customcheckbox data={data} setData={setData} value={data?.supersensitivebrow ? data?.supersensitivebrow : false} name={"supersensitivebrow"} title={'Supersensitive Skin'} />
                        <Customcheckbox data={data} setData={setData} value={data?.facialbrow ? data?.facialbrow : false} name={"facialbrow"} title={'Recent facial treatment'} />
                        <Customcheckbox data={data} setData={setData} value={data?.eczemabrow ? data?.eczemabrow : false} name={"eczemabrow"} title={'Eczema'} />
                        <Customcheckbox data={data} setData={setData} value={data?.sunburnbrow ? data?.sunburnbrow : false} name={"sunburnbrow"} title={'Sunburn'} />
                        <Customcheckbox data={data} setData={setData} value={data?.retinolbrow ? data?.retinolbrow : false} name={"retinolbrow"} title={'Retinol'} />
                        <Customcheckbox data={data} setData={setData} value={data?.ahabrow ? data?.ahabrow : false} name={"ahabrow"} title={'AHA'} />
                        <Customcheckbox data={data} setData={setData} value={data?.bhabrow ? data?.bhabrow : false} name={"bhabrow"} title={'BHA etc.'} />
                    </div>
                </div>
                <div className=' mt-2 flex w-full items-center justify-between gap-4 ' >
                    <div className=' w-full text-left flex flex-col items-start gap-2 ' >
                        <Customcheckbox data={data} setData={setData} value={data?.allergies ? data?.allergies : false} name="allergies" title='Any allergies to adhesive tape, fumes or eye remover?' reverse={true} />
                        <Customcheckbox data={data} setData={setData} value={data?.sensitivities ? data?.sensitivities : false} name="sensitivities" title='Previous allergies / sensitivities to lash lift, tint or brow lamination?' reverse={true} />
                        <Customcheckbox data={data} setData={setData} value={data?.pregnant ? data?.pregnant : false} name="pregnant" title='Are you pregnant or brestfeedng' reverse={true} />
                    </div>
                    <div className=' w-[400px] flex-col gap-3 ' >
                        <Customcheckbox data={data} setData={setData} value={data?.psorasis ? data?.psorasis : false} name="psorasis" title={"Psorasis"} />
                        <Customcheckbox data={data} setData={setData} value={data?.skin ? data?.skin : false} name="skin" title={"Supersensitive Skin "} />
                        <Customcheckbox data={data} setData={setData} value={data?.sunburnsec ? data?.sunburnsec : false} name="sunburnsec" title={"Sunburn"} />
                    </div>
                </div>
                <div className=' w-full text-left flex flex-col items-start gap-2 mt-2 '>
                    <Customcheckbox data={data} setData={setData} value={data?.wearcontact ? data?.wearcontact : false} name="wearcontact" title='Do you wear Contact ?' reverse={true} />
                    <Customcheckbox data={data} setData={setData} value={data?.eyedrop ? data?.eyedrop : false} name="eyedrop" title='Do you Use eye drops of any kind' reverse={true} />
                    <Customcheckbox data={data} setData={setData} value={data?.sunscreen ? data?.sunscreen : false} name="sunscreen" title='Do you Use oil-containing Sunscreen or moisturizer ' reverse={true} />
                </div>
                <div className=' mt-2 w-full ' >
                    <Custominput data={data} setData={setData} value={data?.medications ? data?.medications : ""} name="medications" onlytext={onlytext} width='full' title='List any medications/ supplements you take regularly' textarea={true} height='140px' />
                </div>
                <div className=' w-full mt-2 flex justify-between items-center ' >
                    <p className=' text-lg leading-6 ' >Have you recent had  lashes extension/ lash lift or brow lamentation</p>
                    <div className=' flex gap-4 ' >
                        <Customcheckbox data={data} setData={setData} value={data?.extension ? data?.extension : false} name="extension" title={"Yes"} reverse={true} />
                        <Customcheckbox data={data} setData={setData} value={data?.extension ? data?.extension : false} opposite={true} name="extension" title={"No"} reverse={true} />
                    </div>
                </div>
                <div className=' w-full mt-2 ' >
                    <Custominput data={data} setData={setData} value={data?.extensiontext ? data?.extensiontext : ""} name="extensiontext" onlytext={onlytext} width='full' title='If yes when' />
                </div>
                <div className=' w-full mt-2 flex justify-between items-center ' >
                    <p className=' text-lg leading-6 ' >Any recent semi-permanent markup (brows, liner)?</p>
                    <div className=' flex gap-4 ' >
                        <Customcheckbox data={data} setData={setData} value={data?.brows ? data?.brows : false} name="brows" title={"Yes"} reverse={true} />
                        <Customcheckbox data={data} setData={setData} value={data?.brows ? data?.brows : false} opposite={true} name="brows" title={"No"} reverse={true} />
                    </div>
                </div>
                <div className=' w-full mt-2 ' >
                    <Custominput data={data} setData={setData} value={data?.browstext ? data?.browstext : ""} name="browstext" onlytext={onlytext} width='full' title='If yes when' />
                </div>
                <div className=' w-full mt-2 flex flex-col ' >
                    <p className=' text-lg leading-6 ' >I constant to  have my eyes closed and covered for the duration  of the 45-90 Minutes procedure</p>
                    <div className=' flex gap-4 ' >
                        <Customcheckbox data={data} setData={setData} value={data?.procedure ? data?.procedure : false} name="procedure" title={"Yes"} reverse={true} />
                        <Customcheckbox data={data} setData={setData} value={data?.procedure ? data?.procedure : false} opposite={true} name="procedure" title={"No"} reverse={true} />
                    </div>
                </div>
                <div className=' w-full mt-2 text-lg flex flex-col gap-4 text-center leading-[19px] ' >
                    <p>By signing  below, you agree to following:</p>
                    <p>I am over 18years of age have completed this form truthfully and to the  best of knowledge. I agree to</p>
                    <p>inform the technician of any changes  in the above information. I agree that i do have  condition/s</p>
                    <p>that would make the requested treatment unsuitable. I  agree to waive all liabilities toward my technician and the employer for any injury  or damages incurred due any misrepresentation  of my health</p>
                </div>
                <div className=' w-full flex justify-between gap-4 pt-12 text-[#121212] ' >
                    <div className=' w-[240px] ' >
                        <input placeholder='Client Name' className=' w-full border-b outline-none border-[#121212] ' />
                        <div className=' w-full ' >
                            Client  Name  ( printed) :
                        </div>
                    </div>
                    <div className=' w-[240px] ' >
                        <input type='date' placeholder='Client Name' className=' w-full border-b outline-none border-[#121212] ' />
                        <div className=' w-full ' >
                            Date
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-between gap-4 pt-12 border-[#121212] text-[#121212] ' >
                    <div className=' w-[240px] ' >
                        <input placeholder='Client Signatures' className=' w-full border-b outline-none border-[#121212] ' />
                        <div className=' w-full ' >
                            Client  Name  ( Signatures) :
                        </div>
                    </div>
                    <div className=' w-[240px] ' >
                        <input type='date' placeholder='Client Name' className=' w-full border-b outline-none border-[#121212] ' />
                        <div className=' w-full ' >
                            Date
                        </div>
                    </div>
                </div>
            </div>

            {!hidebtn && (
                <button onClick={() => next(2)} className=' w-full bg-[#A2897B] mt-16 rounded-lg h-11 leading-6 text-white font-medium ' >
                    Next
                </button>
            )}
        </div>
    )
}

export default SteptwoView
