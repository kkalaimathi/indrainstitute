"use client";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactimages from "./contactimages";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setSubmitted(false);

    const { name, email, phone, message } = formData;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: name,
          firstEmail: email,
          firstPhoneNumber: phone,
          firstMessage: message,
          to: "yourcompanyemail@example.com", // Set to your company email
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(true);
        toast.success("Mail sent successfully!", {
          className: "bg-green-500 text-white",
        });
      } else {
        const errorMessage = await response.text();
        toast.error(`Failed to send your message. Error: ${errorMessage}`, {
          className: "bg-red-500 text-white",
        });
      }
    } catch (error) {
      toast.error("An error occurred while sending the message.", {
        className: "bg-red-500 text-white",
      });
      console.error("Error:", error);
    } finally {
      setStatus("");
    }
  };

  const handleResend = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact ">
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="container lg:mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-xl border-[1px] py-8" >
       
  
          <div className="px-10 lg:px-20 w-full md:w-1/3 ">
            <h2 className="text-2xl font-bold mb-6 text-red-600">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
                  placeholder="Your Name"
                  required
                />
              </div>
  
              {/* Phone Field */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
  
              {/* Email Field */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
                  placeholder="Your Email"
                  required
                />
              </div>
  
              {/* Description Field */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  draggable={false}
                  id="description"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-200"
                  placeholder="Describe your query"
                  required
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-center h-full rounded-2xl">
            <Image
              src={"/contactimg.png"}
              width={1000}
              height={1000}
              alt="Contact"
              className="h-full w-full rounded-3xl"
            />
          </div>

        </div>
      </div>
    </div>
  
    <ToastContainer />
  </section>
  
  );
};

export default Contact;
