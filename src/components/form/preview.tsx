import { useRef } from 'react'
import Stepone from './stepone'
import Steptwo from './steptwo'
// import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import SteptwoView from './steptwoview';
// import SteponeView from './steponeview';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import emailjs, { send } from '@emailjs/browser';

interface Props {
    data?: any,
    setData?: any,
    next?: any
}

function Preview(props: Props) {
    const {
        data,
        setData,
        next
    } = props

    const componentRef: any = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    console.log(data);
    

    // const Add = async () => {

    //     const canvas: any = await html2canvas(componentRef.current);
    //     const imgData = canvas.toDataURL('image/png');

    //     // Create a PDF document
    //     const pdf = new jsPDF('p', 'pt', 'a4');

    //     const imgWidth = 210;
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //     pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, '', 'FAST');


    //     pdf.save("example.pdf");
    //     // const formData = new FormData();
    //     // formData.append('file', pdf.output('blob'), 'document.pdf');;
    //     // // formData.append('folder', "pdf");
    //     // formData.append('upload_preset', 'r7xwnxie');


    //     // try {
    //     //     const response = await fetch('https://api.cloudinary.com/v1_1/dwotkchmt/upload', {
    //     //         method: 'POST',
    //     //         body: formData
    //     //     });
    //     //     if (response.ok) {
    //     //         const data = await response.json();
    //     //         console.log('PDF Uploaded:', data.url);
    //     //         console.log(data?.secure_url);

    //     //         const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lashandspalounge@gmail.com&su=Test&body=${data?.secure_url}`;
    //     //         window.location.href = mailtoLink;
    //     //     }
    //     // } catch (error) {
    //     //     console.error('Upload Error:', error);
    //     // }
    // };



    const Add = async () => {

        setLoading(true)

        const pdfElement = componentRef.current;

        // Render the component to a string of HTML
        const htmlString = pdfElement.outerHTML;
        // Create a PDF document
        const pdf = new jsPDF('p', 'pt', 'a4');

        // Add the HTML content to the PDF
        pdf.html(htmlString, {
            callback: async () => {
                // Save the PDF file
                // pdf.save('example.pdf');
                const formData = new FormData();
                formData.append('file', pdf.output('blob'), 'document.pdf');;
                // formData.append('folder', "pdf");
                formData.append('upload_preset', 'r7xwnxie');

                // const canvas: any = await html2canvas(componentRef.current);

                try {
                    const response = await fetch('https://api.cloudinary.com/v1_1/dwotkchmt/upload', {
                        method: 'POST',
                        body: formData
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log('PDF Uploaded:', data.url);
                        console.log(data?.secure_url);


                        sendEmail(data?.secure_url)
                        toast.success('message sent', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });

                        setLoading(false)
                    }
                } catch (error) {
                    console.error('Upload Error:', error);
                }
            }
        });

        // pdf.save("example.pdf");

    };

    const sendEmail = async (item: any) => {
        const templateId = 'template_5qau2ki';

        send('service_3lc1bsi', templateId, {
            from_email: data?.email ? data?.email : "",   
            from_name: data?.name ? data?.name : "",
            subject: 'Subject of the Email',
            message: item,
        }, "CeFONnoTw3OIGZkoK").then((response) => {
            console.log('Email sent successfully:', response);
        }).catch((error) => {
            console.error('Error sending email:', error);
        });
        setShowModal(false)
    };

    return (
        <div className=' w-full flex flex-col items-center ' >
            <div className=' w-full flex flex-col ' >
                <div className=' relative w-full flex flex-col ' >
                    <div ref={componentRef} style={{ width: '100%' }} className=' w-full bg-white flex relative z-10 flex-col items-center justify-center ' >
                        <div className=' mx-auto w-fit ' >

                            <Stepone next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                            <Steptwo next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                        </div>
                    </div>

                    <div className=' w-[70%] flex items-center gap-6 py-6 mx-auto ' >
                        <button onClick={() => next(1)} className=' w-full lg:w-[300px] bg-[#A2897B] mt-5 rounded-lg h-11 leading-6 text-white font-medium ' >
                            Previous
                        </button>
                        <button onClick={() => setShowModal(true)} className=' w-full lg:w-[300px] bg-[#A2897B] mt-5 rounded-lg h-11 leading-6 text-white font-medium ' >
                            Submit
                        </button>
                    </div>
                    {/* <div ref={componentRef} style={{ width: '100%' }} className=' absolute top-0 inset-x-0 w-full flex flex-col items-center p-6 justify-center ' >
                        <div className=' mx-auto w-fit ' >

                            <SteponeView next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                            <SteptwoView next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                        </div>
                    </div> */}
                    {showModal && (

                        <div className=' inset-0 fixed flex z-30 items-center justify-center ' >
                            <div className=' w-[350px] relative px-4 z-50 flex flex-col items-center rounded-2xl bg-white shadow-lg py-8 ' >
                                <FaInfoCircle size={50} />
                                <p className=' font-bold text-xl mt-6 ' >ALMOST DONE!</p>
                                <p className=' font-medium text-center leading-5 mt-2 ' >On the next page, all you have to do is simply click the send button and close the page. Thank you!</p>

                                <button onClick={() => Add()} className=' w-full bg-[#A2897B] mt-5 rounded-lg h-11 leading-6 text-white font-bold ' >
                                    {loading ? "Loading..." : "Submit"}
                                </button>
                            </div>
                            <div className=' fixed inset-0 bg-black bg-opacity-25 ' />
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Preview

