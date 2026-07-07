import React from 'react';

function ContactForm(props) {
    return (
        <>
            <h1>Form</h1>
            <section data-template="form" data-view="contact-us-view" className='c-form'>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <form method='' class="bg-white shadow-md rounded | flex flex-col  gap-y-6 px-4 py-6 | md:px-8 md:pt-6 md:pb-8 md:mb-4 ">
                        {/* className='flex  flex-col md:flex-row justify-around gap-3 md:items-end'> */}
                        {/* Name */}
                        <div class="sm:w-full">
                            <label for="name" class=" text-sm/6 font-medium text-black">Name</label>
                            <div class="mt-2">
                                <div class="w-full  min-w-50">
                                    <input id='name' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Daniel Richardson | Julia Myers" />
                                </div>
                            </div>
                        </div>
                        {/* Email */}
                        <div class="sm:w-full">
                            <label for="email" class=" text-sm/6 font-medium text-black">Email</label>
                            <div class="mt-2">
                                <div class="w-full  min-w-50">
                                    <input id='email' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="jf00912@gmail.com" />
                                </div>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div class="sm:w-full">
                            <label for="phone" class=" text-sm/6 font-medium text-black">Phone Number</label>
                            <div class="mt-2">
                                <div class="w-full  min-w-50">
                                    <input id='phone' type="tel" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="0846 - 934 - 000" />
                                </div>
                            </div>
                        </div>
                        {/*  Subject */}
                        <div class="sm:w-full">
                            <label for="email" class=" text-sm/6 font-medium text-black">Subject</label>
                            <div class="mt-2">
                                <div class="w-full  min-w-50">
                                    <input id='email' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="RE: Comments" />
                                </div>
                            </div>
                        </div>
                        {/*  Message */}
                        <div className="sm:w-full">
                            <label for="message" class=" text-sm/6 font-medium text-black">Your message</label>
                            <textarea id="message" rows="4" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        {/* Submit */}
                        <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Search
                        </button>
                    </form>
                </div >
            </section >
        </>
    );
}

export default ContactForm;