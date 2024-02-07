import React, { useRef, useState } from 'react'
import Stepone from './stepone'
import Steptwo from './steptwo'
import { Cloudinary } from '@cloudinary/url-gen';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface Props {
    data?: any,
    setData?: any
}

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'dwotkchmt'
    }
});

function Preview(props: Props) {
    const {
        data,
        setData
    } = props

    const componentRef: any = useRef<HTMLDivElement>(null);

    // const [pdfDataUrl, setPdfDataUrl] = useState<string>('');

    const cloudName = "dwotkchmt";
    const apiKey = 764891764885852;
    const apiSecret: any = "78GBRFlbW7ygjlz_ah0tufLUA"

    const generatePDF = async () => {
        //     
        // Capture the component as an image using html2canvas
        const canvas: any = await html2canvas(componentRef.current);
        const imgData = canvas.toDataURL('image/png');

        // Create a PDF document
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, "FAST");


    };

    const Add = async () => {


        
        const canvas: any = await html2canvas(componentRef.current);
        const imgData = canvas.toDataURL('image/png');

        // Create a PDF document
        const pdf = new jsPDF('p', 'pt', 'a4');

        var pageHeight = pdf.internal.pageSize.height;

        var pageWidth = pdf.internal.pageSize.width;
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, '', 'FAST');

        console.log(pdf.output('blob'));

        pdf.save("example.pdf");

        const formData = new FormData();
        formData.append('file', pdf.output('blob'), 'document.pdf');;
        // formData.append('folder', "pdf");
        formData.append('upload_preset', 'r7xwnxie');


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
            }
        } catch (error) {
            console.error('Upload Error:', error);
        }
    };

    return (
        <div className=' w-full flex flex-col items-center ' >
            <div className=' w-full flex flex-col ' >
                <div className=' w-full pb-8 flex  ' >
                    <button onClick={() => Add()} className=' w-[300px] bg-[#A2897B] mt-5 rounded-lg h-11 leading-6 text-white font-medium ' >
                        Generate Email
                    </button>
                </div>
                <div ref={componentRef} style={{ width: '100%' }} className=' w-full flex flex-col items-center p-6 justify-center ' >
                    <div className=' mx-auto w-fit ' >

                        <Stepone next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                        <Steptwo next={undefined} data={data} setData={setData} hidebtn={true} onlytext={true} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Preview

