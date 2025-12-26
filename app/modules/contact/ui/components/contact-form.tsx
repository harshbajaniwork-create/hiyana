import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-white min-h-screen py-0 sm:py-20 mb-48">
      <div className="bg-gray-50 py-20">
        {/* Main Container with Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative">
          {/* Left Section - Contact Info */}
          <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 z-10">
            <div className="max-w-md">
              {/* Header */}
              <div className="mb-8">
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  CONTACT US/
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Contact us<span className="text-orange-400">.</span>
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  Get in touch with our team for competitive rates, customized
                  logistics solutions, and expert guidance on your freight
                  forwarding needs.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">
                      Send me an email
                    </p>
                    <a
                      href="mailto:info@hiyanaworld.com"
                      target="_blank"
                      className="text-black font-semibold text-lg hover:text-orange-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      info@hiyanaworld.com
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Give me a call</p>
                    <a
                      href="tel:+9125915894"
                      target="_blank"
                      className="text-black font-semibold text-lg hover:text-orange-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      +91 25915894
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form (Offset Black Block) */}
          <div className="lg:ml-8 lg:mt-16 bg-black p-8 sm:p-16 relative -mb-64">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="FULL NAME"
                    className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 px-0 focus:border-orange-400 focus:outline-none transition-colors text-sm font-medium tracking-wide"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 px-0 focus:border-orange-400 focus:outline-none transition-colors text-sm font-medium tracking-wide"
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="PHONE NUMBER"
                    className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 px-0 focus:border-orange-400 focus:outline-none transition-colors text-sm font-medium tracking-wide"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SUBJECT"
                    className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 px-0 focus:border-orange-400 focus:outline-none transition-colors text-sm font-medium tracking-wide"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="PLEASE TYPE YOUR MESSAGE HERE..."
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 px-0 focus:border-orange-400 focus:outline-none transition-colors resize-none text-sm font-medium tracking-wide"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/50 group"
                >
                  SEND MESSAGE
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
