import React from 'react';
import ContactForm from '../components/ContactForm';
function Contact(props) {
    return (
        <>
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4">
                <h1 className=' md:text-6xl'>Contact Us</h1>
                <p className='text-lg mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quis ipsa nisi facere rerum, aut obcaecati, provident ratione atque doloremque delectus perspiciatis saepe fugiat quasi at corrupti quaerat! Recusandae, porro!</p>
            </div>
            <ContactForm />
        </>
    );
}

export default Contact;