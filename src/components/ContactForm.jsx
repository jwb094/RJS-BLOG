import React, { useState } from 'react';

function ContactForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});


    function updateName(e) {
        setName(e.target.value);
    }

    function validateFields() {
        let validationErrors = {};
        //  Name validation
        if (!name) {
            validationErrors.name = "Your Name is required";
        }

        // Email validation
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            validationErrors.email = "Invalid Email address";
        }
        let phoneRegex = /^[0-9]{4}[0-9]{3}[0-9]{4}$/;
        if (!phoneRegex.test(email)) {
            validationErrors.phone = "Invalid Phone Number";
        }

        // Message validation
        if (!subject) {
            validationErrors.subject = "Your Message Subject is required";
        }

        // Message validation
        if (!message) {
            validationErrors.message = "Your Message is required";
        }

        //append the validationErrors to State
        setErrors(validationErrors);
        //Return True or false depending on the length
        return Object.keys(validationErrors).length === 0;
    }

    function handleLoginSubmit(e) {
        e.preventDefault();

        const isValid = validateFields();
        if (!isValid) return;

        setResult("Thank you " + name + " for sending your message");

    }

    return (
        <>
            <section data-template="form" data-view="contact-us-view" className='c-form'>
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <form method='' className="bg-white shadow-md rounded | flex flex-col  gap-y-6 px-4 py-6 | md:px-8 md:pt-6 md:pb-8 md:mb-4 "
                        onSubmit={handleLoginSubmit}>
                        {/* className='flex  flex-col md:flex-row justify-around gap-3 md:items-end'> */}
                        {/* Name */}
                        <div className="sm:w-full">
                            <label for="name" class=" text-sm/6 font-medium text-black">Name</label>
                            <div className="mt-2">
                                <div className="w-full  min-w-50">
                                    <input id='name' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Daniel Richardson | Julia Myers"
                                        value={name}
                                        onChange={updateName}
                                    />
                                </div>
                            </div>
                            {errors.name && (
                                <div className=" mt-2 | alert alert-danger" role="alert">
                                    {errors.name}</div>
                            )}
                        </div>
                        {/* Email */}
                        <div className="sm:w-full">
                            <label for="email" class=" text-sm/6 font-medium text-black">Email</label>
                            <div className="mt-2">
                                <div className="w-full  min-w-50">
                                    <input id='email' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="jf00912@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            {errors.email && (
                                <div className=" mt-2 | alert alert-danger" role="alert">
                                    {errors.email}</div>
                            )}
                        </div>
                        {/* Phone Number */}
                        <div className="sm:w-full">
                            <label for="phone" className=" text-sm/6 font-medium text-black">Phone Number</label>
                            <div className="mt-2">
                                <div className="w-full  min-w-50">
                                    <input id='phone' type="tel" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="0846 - 934 - 000"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            {errors.phone && (
                                <div className=" mt-2 | alert alert-danger" role="alert">
                                    {errors.phone}</div>
                            )}
                        </div>
                        {/*  Subject */}
                        <div className="sm:w-full">
                            <label for="email" class=" text-sm/6 font-medium text-black">Subject</label>
                            <div className="mt-2">
                                <div className="w-full  min-w-50">
                                    <input id='email' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="RE: Comments"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)} />
                                </div>
                            </div>
                            {errors.subject && (
                                <div className=" mt-2 | alert alert-danger" role="alert">
                                    {errors.subject}</div>
                            )}
                        </div>
                        {/*  Message */}
                        <div className="sm:w-full">
                            <label for="message" class=" text-sm/6 font-medium text-black">Your message</label>
                            <textarea id="message" rows="4" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Write your thoughts here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        {errors.message && (
                            <div className=" mt-2 | alert alert-danger" role="alert">
                                {errors.message}</div>
                        )}
                        {/* Submit */}
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Search
                        </button>
                    </form>
                </div >
            </section >
            {result ?
                < div className="alert alert-success" role="alert">
                    {result}
                </div> : ""}
        </>
    );
}

export default ContactForm;