
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div id="about" className="border-b border-white/10 pb-20 pt-10">
            <h2 className="my-10 text-center text-4xl font-bold">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Me</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center max-w-7xl mx-auto px-6">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <div className="relative group">
                            {/*  Glass Card Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-2xl p-8 bg-[#0a0a0a] ring-1 ring-white/10 leading-none flex items-top justify-start space-x-6">
                                <div className="space-y-4 text-center w-full">
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-7xl font-bold">3+</p>
                                    <p className="text-gray-400 font-medium tracking-wide">Years of Experience</p>
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
                                    <div className="grid grid-cols-2 gap-4 text-left">
                                        <div>
                                            <p className="text-2xl font-bold text-white">20+</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">100%</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Success Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-neutral-300 leading-relaxed text-lg font-light">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-start mt-4">
                        <div className="px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-sm text-white hover:bg-white/10 transition-colors">
                            Mechanical Engineering
                        </div>
                        <div className="px-5 py-2.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-500/20 text-sm text-pink-400 font-semibold">
                            Tech Leadership
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
