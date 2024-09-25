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
    <section id="#contact">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center bg-white  overflow-hidden">
            {/* Left side - Image */}
            <div
              className=" w-1/2 bg-center h-full rounded-2xl"
            >
              <Image
                src={contactimages.images[0].url}
                width={1000}
                height={1000}
                alt="Contact"
                className="hidden md:block h-full w-full rounded-3xl"
              />
            </div>

            {/* Right side - Form */}
            <div className="p-8 w-1/2">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
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
                  draggable= {false}
                    id="description"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Describe your query"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Success Message Card */}
              {submitted && (
                <div className="mt-8 p-6 bg-green-100 border-l-4 border-green-500 text-green-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-sm">
                        Thank you for contacting us. We will get back to you
                        shortly.
                      </p>
                    </div>
                    {/* <button
                      onClick={handleResend}
                      className="text-green-600 hover:text-green-800"
                    >
                      Dismiss
                    </button> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
