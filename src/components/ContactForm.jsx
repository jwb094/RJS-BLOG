import React, { useState } from "react";
import "../assets/styles/form.scss";
import ErrorAlert from "./ErrorAlert";
function ContactForm(props) {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Close Error Message 
  const closeError = (field) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[field];
      return updatedErrors;
    });
  };
  //Reset Form States and variables values
  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setErrors({});
    setResult("");
    setSubmitted(false);
  }

  // validate form inputs 
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
    if (!phoneRegex.test(phone)) {
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
  
  //Email Submit form
  function handleLoginSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      const isValid = validateFields();
      if (!isValid) return;

      setSubmitted(true);
      setResult(name + " for sending your message");

      // Show success for 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);
    }, 3000);
    setResult("");
  }

  return (
    <>
      <section
        data-template="form"
        data-view="contact-us-view"
        className="c-form"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {result ? (
            <div className="flex flex-col justify-center items-center gap-4 bg-emerald-100 border-t-4 border-emerald-500">
              <h2 className="mt-6 | text-5xl ">Success</h2>

              <p className="mb-6 | text-lg">Thank you</p>

              <p>{result}</p>

              <b>What happens next?</b>

              <p className="mb-6 | text-lg">
                {" "}
                Our HR Team will review your Enquiry and reach out to you as
                soon as possible{" "}
              </p>
            </div>
          ) : (
            <form
              method=""
              className="bg-white shadow-lg rounded | flex flex-col  gap-y-6 px-4 py-6 | md:px-8 md:pt-6 md:pb-8 md:mb-4 "
              onSubmit={handleLoginSubmit}
            >
              {/* Name */}
              <div className="sm:w-full">
                <label for="name" class=" text-sm/6 font-medium text-black">
                  Name
                </label>
                <div className="mt-2">
                  <div className="w-full  min-w-50">
                    <input
                      id="name"
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Daniel Richardson | Julia Myers"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {errors?.name && (
                <ErrorAlert
                  message={errors.name}
                  onClose={() => closeError("name")}
                />
              )}
              {/* Email */}
              <div className="sm:w-full">
                <label for="email" class=" text-sm/6 font-medium text-black">
                  Email
                </label>
                <div className="mt-2">
                  <div className="w-full  min-w-50">
                    <input
                      id="email"
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="jf00912@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {errors?.email && (
                <ErrorAlert
                  message={errors.email}
                  onClose={() => closeError("email")}
                />
              )}
              {/* Phone Number */}
              <div className="sm:w-full">
                <label
                  for="phone"
                  className=" text-sm/6 font-medium text-black"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <div className="w-full  min-w-50">
                    <input
                      id="phone"
                      type="tel"
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="0846 - 934 - 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {errors?.phone && (
                <ErrorAlert
                  message={errors.phone}
                  onClose={() => closeError("phone")}
                />
              )}
              {/*  Subject */}
              <div className="sm:w-full">
                <label for="email" class=" text-sm/6 font-medium text-black">
                  Subject
                </label>
                <div className="mt-2">
                  <div className="w-full  min-w-50">
                    <input
                      id="email"
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="RE: Comments"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {errors?.subject && (
                <ErrorAlert
                  message={errors.subject}
                  onClose={() => closeError("subject")}
                />
              )}
              {/*  Message */}
              <div className="sm:w-full">
                <label for="message" class=" text-sm/6 font-medium text-black">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Write your thoughts here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {errors?.message && (
                <ErrorAlert
                  message={errors.message}
                  onClose={() => closeError("message")}
                />
              )}
              {/* Submit */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              >
                Search
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export default ContactForm;
