
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div id="home" className="pb-4 lg:mb-36 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-wrap lg:flex-nowrap w-full max-w-7xl mx-auto px-6">
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pt-20 lg:pt-0">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-start"
                    >
                        <motion.div variants={child} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm">
                            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
                                Available for Hire
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={child}
                            className="pb-2 text-5xl sm:text-7xl font-bold tracking-tighter lg:mt-2 text-white drop-shadow-xl"
                        >
                            Sushil Singh Rathore
                        </motion.h1>
                        <motion.span
                            variants={child}
                            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent font-bold mt-4 block"
                        >
                            Project Manager & Full Stack Developer
                        </motion.span>
                        <motion.p variants={child} className="my-6 max-w-xl py-2 font-normal tracking-wide text-neutral-300 text-lg leading-8">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div variants={child} className="mt-8 flex space-x-6">
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg hover: from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:-translate-y-1"
                            >
                                Contact Me
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white/50"
                            >
                                View Work
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center mt-16 lg:mt-0 relative">
                    {/* Decorative background blur blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-full blur-[120px] -z-10 animate-spin-slow"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                        className="relative z-10"
                    >
                        <div className="w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-md shadow-2xl p-4 flex items-center justify-center rotate-3 hover:rotate-0 transition-all duration-500 group">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <img
                                    src="/hero.jpeg"
                                    alt="Sushil Singh Rathore"
                                    className="w-full h-full object-cover object-top sm:object-[40%_25%] transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
