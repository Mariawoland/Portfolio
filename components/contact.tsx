import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            form.current
        ) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        alert(result.text);
                    },
                    (error) => {
                        alert(error.text);
                    }
                );
        }
    };
    return (

        <div id="contact"
            style={{
                width: "100%",
                transition: '0.8s all',
                marginTop: "150px",
                paddingTop: "50px",
                paddingBottom: "50px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                boxShadow: "0 0 100px 100px rgba(0, 0, 0, 0.93)"
            }}>

            <div className='w-[80%] m-auto rounded-2xl border-double border-4 md:p-9 p-5 text-slite'>

                <h1 className='text-center lg:text-[40px] md:text-[32px] text-[20px] pt-3 pb-10 text-red'>Let's Keep In Touch</h1>

                <div className='flex md:flex-row flex-col gap-10'>
                    <form className='md:w-[40%] w-[100%] flex flex-col gap-6 text-gray-600' ref={form} onSubmit={sendEmail}>

                        <input className='w-[100%] border-box px-5 py-3' type="text" placeholder='Your Name' name="Name" />

                        <input className='w-[100%] border-box px-5 py-3' type="email" placeholder='Your Email' name="Email" />

                        <textarea className='w-[100%] h-[150px] border-box px-5 py-4' placeholder='Write Your Message...' name="Message" />

                        <input className='w-[100%] border-box p-5 bg-red text-white brightness-75 hover:brightness-100 transition-all duration-300 cursor-pointer border-2 border-double border-red font-semibold' type="submit" value="Send Message" />

                    </form>
                    <div className='md-px-6 px-0 md:w-[60%] w-[100%] flex flex-col justify-between py-4'>

                        <div>
                            <p className=' lg:text-[16px] text-[14px]'>Reach out using the details below, and let's turn your ideas into digital reality.</p>

                            <div className='py-5 flex flex-col gap-2'>

                                <p className='flex flex-row items-center gap-3 lg:text-[16px] text-[14px] '>
                                    <img className='w-[17px] h-[17px]' src='/contact/img1.png' /> Mariam Ekizashvili</p>

                                <p className='flex flex-row items-center gap-3 lg:text-[16px] text-[14px] '>
                                    <img className='w-[17px] h-[17px]' src='/contact/img2.png' /> Tbilisi, Georgia</p>

                                <a className='flex flex-row items-center gap-3 lg:text-[16px] text-[14px] ' href="mailto:Eqizashvili16@gmail.com"><img className='w-[17px] h-[17px]' src='/contact/img3.png' /> Eqizashvili16@gmail.com</a>

                                <p className='flex flex-row items-center gap-3 lg:text-[16px] text-[14px] '><img className='w-[17px] h-[17px]' src='/contact/img4.png' /> +995 595 033 062</p>
                            </div>

                            <p className=' lg:text-[16px] text-[14px]'>I'm eager to explore how we can achieve your goals together. Feel free to reach out; I'm committed to turning your ideas into compelling digital solutions.</p></div>




                        <div className='flex flex-row gap-8 md:pt-0 pt-5'>

                            <a href="https://github.com/Mariawoland" target='_blank'>
                                <img className='lg:w-[40px] w-[30px] glow6' src='/contact/img5.png' />
                            </a>

                            <a href="https://www.linkedin.com/in/mariam-ekizashvili/" target='_blank'>
                                <img className='lg:w-[40px] w-[30px] glow6' src='/contact/img6.png' />
                            </a>

                            <a href="https://www.facebook.com/mariam.ekizashvili16/" target='_blank'>
                                <img className='lg:w-[40px] w-[30px] glow6' src='/contact/img7.png' />
                            </a>

                            <a href="https://www.instagram.com/maria_woland/" target='_blank'>
                                <img className='lg:w-[40px] w-[30px] glow6' src='/contact/img8.png' />
                            </a>

                        </div>


                    </div>
                </div>

            </div >

        </div >
    );
};

export default Contact;