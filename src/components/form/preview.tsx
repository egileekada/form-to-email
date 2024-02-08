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

interface Props {
    data?: any,
    setData?: any
}

function Preview(props: Props) {
    const {
        data,
        setData
    } = props

    const componentRef: any = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = React.useState(false)

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
                pdf.save('example.pdf');

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

                        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=m.neboh@chasescroll.com&su=Test&body=${data?.secure_url}`;
                        window.location.href = mailtoLink;
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


    return (
        <div className=' w-full flex flex-col items-center ' >
            <div className=' w-full flex flex-col ' >
                <div className=' relative w-full ' >
                    <div ref={componentRef} style={{ width: '100%' }} className=' w-full bg-white flex relative z-10 flex-col items-center justify-center ' >
                        <div className=' mx-auto w-fit ' >

                            <Stepone next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                            <Steptwo next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                        </div>
                    </div>

                    <div className=' w-full py-8 flex  ' >
                        <button onClick={() => Add()} className=' w-full lg:w-[300px] bg-[#A2897B] mt-5 rounded-lg h-11 leading-6 text-white font-medium ' >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                    {/* <div ref={componentRef} style={{ width: '100%' }} className=' absolute top-0 inset-x-0 w-full flex flex-col items-center p-6 justify-center ' >
                        <div className=' mx-auto w-fit ' >

                            <SteponeView next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                            <SteptwoView next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                        </div>
                    </div> */}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Preview

