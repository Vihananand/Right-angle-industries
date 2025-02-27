"use client"

import { useState } from "react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Mark form as submitted
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-10 sm:gap-16 py-12 sm:py-24 px-6 sm:px-10 mx-auto max-w-5xl bg-white/70 font-[sans-serif] rounded-2xl shadow-[5rem_5rem_8rem_#152A5A]">
        {!submitted ? (
          <>
            <div>
              <h1 className="text-gray-800 text-3xl sm:text-4xl font-extrabold">Let&apos;s Talk</h1>
              <p className="text-lg sm:text-xl text-gray-800 mt-4">
                Reach out to us, we&apos;d love to hear from you and help you with your ideas.
              </p>
              
              <div className="mt-10">
                <h2 className="text-gray-800 text-lg sm:text-xl font-bold">Email</h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className="bg-[#2563EB] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#ffffff" viewBox="0 0 479.058 479.058">
                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                      </svg>
                    </div>
                    <a href="mailto:rightangleindia@gmail.com" className="text-black text-sm sm:text-md ml-4">
                      <small className="block">Mail to</small>
                      <p>rightangleindia@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h2 className="text-gray-800 text-lg sm:text-xl font-bold">Phone</h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className="bg-[#2563EB] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#ffffff" viewBox="0 0 24 24">
                        <path d="M20.487 15.126c-1.132-.538-2.538-.262-3.36.614l-1.397 1.499c-3.77-1.876-6.873-4.982-8.748-8.748l1.499-1.397c.877-.822 1.152-2.228.614-3.36L7.782 1.314C6.997-.328 4.708-.58 3.542.585L2.047 2.08c-.933.933-1.347 2.25-1.146 3.56.391 2.535 1.483 5.885 4.296 9.781 2.933 4.048 6.379 6.661 9.781 8.296 1.31.201 2.627-.213 3.56-1.146l1.495-1.495c1.165-1.165.913-3.454-.729-4.239l-1.317-.711z" />
                      </svg>
                    </div>
                    <a href="tel:+919876543210" className="text-black text-sm sm:text-md ml-4">
                      <p>+91 98765 43210</p>
                      <p>+91 88145 66162</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-md focus:outline-none focus:shadow-md" required />
              <input type="email" placeholder="Email" className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-md focus:outline-none focus:shadow-md" required />
              <input type="text" placeholder="Subject" className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-md focus:outline-none focus:shadow-md" required />
              <textarea placeholder="Message" rows="5" className="w-full rounded-md px-4 pt-3 bg-gray-100 text-gray-800 text-md focus:outline-none focus:shadow-md" required></textarea>
              <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center w-full sm:col-span-2 py-16 text-center">
            <h1 className="text-gray-800 text-3xl sm:text-4xl font-extrabold">Success!</h1>
            <p className="text-lg sm:text-xl text-gray-800 mt-4">Your message has been submitted successfully.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3">
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}