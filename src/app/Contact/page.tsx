import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Contact Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-blue-900 text-6xl font-bold mb-4">Contact Us</h1>
        <h3 className="text-2xl text-gray-800 font-light mb-2">
          Elit, sed do eiusmod tempor
        </h3>
        <p className="text-gray-600 text-lg font-light">
          Vector illustration is from{" "}
          <span className="text-blue-600 underline">StorySet</span>. Incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>

      {/* Success Campaign Section */}
      <div className="bg-white p-8 mb-12 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-blue-600 text-5xl font-semibold mb-4">
          Create a Successful Campaign with Us!
        </h1>
        <h3 className="text-xl text-gray-800 font-light mb-3">
          Elit, sed do eiusmod tempor
        </h3>
        <p className="text-gray-600 text-lg font-light">
          Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Media Contact */}
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-full mr-4">
            <Image src="/hero.jpg" alt="Media Contact" width={64} height={64} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Media Contact</h2>
            <p>Mr. John Doe</p>
            <p>010-020-0340</p>
          </div>
        </div>

        {/* Technical Contact */}
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-full mr-4">
            <Image src="/hero.jpg" alt="Technical Contact" width={64} height={64} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Technical Contact</h2>
            <p>Mr. John Stiles</p>
            <p>010-020-0340</p>
          </div>
        </div>

        {/* Billing Contact */}
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-full mr-4">
            <Image src="/hero.jpg" alt="Billing Contact" width={64} height={64} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Billing Contact</h2>
            <p>Mr. Richard Miles</p>
            <p>010-020-0340</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="flex mb-4">
          <input type="number" placeholder="Phone" className="border border-gray-300 rounded-md p-3 w-1/2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Company Name" className="border border-gray-300 rounded-md p-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <input type="text" placeholder="Subject" className="border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Message" className="border border-gray-300 rounded-md p-3 mb-4 w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button className="bg-blue-600 text-white rounded-full py-3 px-8 transition duration-300 hover:bg-blue-500">Send Message</button>
      </div>
    </div>
  );
};

export default ContactPage;
