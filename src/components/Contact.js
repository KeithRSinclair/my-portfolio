import React from "react";
import { MailIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import emailjs from "emailjs-com";


export default function Contact() {



    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_p4zhra4', 'template_mz9pkbn', e.target, 'user_UGpwve4yy8Gtbu2C84H2L')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Message Sent");
        e.target.reset();
    };

    return (<div>

        <div className="p-10 lg:pt-20 px-5">
            <section className="bg-gray-100 rounded-lg shadow-2xl px-5 py-5" >
                <MailIcon className="h-12" />
                <div className="text-lg flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl mb-6" ><span>Contact Me</span></h2>
                    <form onSubmit={sendEmail} className="w-full max-w-sm">
                        <div className="mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Name
                                </label>
                            </div>
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="name" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                                    E-mail
                                </label>
                            </div>
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" name="email" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-subject">
                                    Subject
                                </label>
                            </div>
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-subject" type="text" name="subject" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-message">
                                    Message
                                </label>
                            </div>
                            <div className="md:w-3/3">
                                <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" rows="8" id="inline-message" type="text" name="message" required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-gray-800 font-bold py-2 px-8 rounded inline-flex items-center" type="submit"><span>Send</span><PaperAirplaneIcon className="h-6 transform rotate-90" /></button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div >


    )
};