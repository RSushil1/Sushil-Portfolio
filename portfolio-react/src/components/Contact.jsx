
import { motion } from "framer-motion";
import { useState } from "react";
import { CONTACT } from "../constants";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/gmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const result = await res.json();

            // The API returns the nodemailer result object. If 'accepted' is an array with items, it succeeded.
            // Or typically check result.accepted
            if (result.accepted && result.accepted.length > 0) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <div id="contact" className="border-b border-white/10 pb-20 pt-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-5xl font-bold tracking-tight"
            >
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Touch</span>
            </motion.h2>

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 text-neutral-300">
                {/* Contact Info */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[50px] transition-all duration-500 group-hover:bg-pink-500/20"></div>
                        <h3 className="text-3xl font-bold mb-4 text-white">Let's Talk</h3>
                        <p className="text-neutral-400 mb-8 max-w-sm leading-relaxed">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group/item">
                                <div className="p-3 rounded-full bg-black/50 border border-white/10 group-hover/item:border-pink-500/50 group-hover/item:text-pink-400 transition-colors duration-300">
                                    <FiMapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Address</p>
                                    <p className="font-medium text-white">{CONTACT.address}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group/item">
                                <div className="p-3 rounded-full bg-black/50 border border-white/10 group-hover/item:border-pink-500/50 group-hover/item:text-pink-400 transition-colors duration-300">
                                    <FiPhone size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone</p>
                                    <a href={`tel:${CONTACT.phoneNo}`} className="font-medium text-white hover:text-pink-400 transition-colors">{CONTACT.phoneNo}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group/item">
                                <div className="p-3 rounded-full bg-black/50 border border-white/10 group-hover/item:border-pink-500/50 group-hover/item:text-pink-400 transition-colors duration-300">
                                    <FiMail size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
                                    <a href={`mailto:${CONTACT.email}`} className="font-medium text-white hover:text-pink-400 transition-colors">{CONTACT.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                                <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Email</label>
                                <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                            <input name="subject" value={formData.subject} onChange={handleChange} required type="text" placeholder="Project Inquiry" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300 resize-none"></textarea>
                        </div>

                        <button disabled={status === "sending"} className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === "sending" ? (
                                <span>Sending...</span>
                            ) : status === "success" ? (
                                <><span>Message Sent!</span> <FiCheck /></>
                            ) : status === "error" ? (
                                <><span>Failed. Try Again.</span> <FiAlertCircle /></>
                            ) : (
                                <><span>Send Message</span> <FiSend className="text-lg" /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
