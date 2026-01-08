
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div id="experience" className="border-b border-white/10 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-5xl font-bold tracking-tight"
            >
                Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Experience</span>
            </motion.h2>
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative border-l-2 border-white/20 ml-4 md:ml-10 space-y-16">
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 md:pl-16"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-[#030014] shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white tracking-wide">
                                    {experience.role}
                                </h3>
                                <span className="text-sm font-mono text-pink-400 font-semibold bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20 mt-2 sm:mt-0 w-fit">
                                    {experience.year}
                                </span>
                            </div>

                            <h4 className="text-xl text-purple-300 font-medium mb-4 flex items-center gap-2">
                                @ {experience.company}
                            </h4>

                            <p className="mb-6 text-neutral-300 text-base leading-relaxed max-w-2xl text-pretty font-light">
                                {experience.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded-lg bg-white/5 px-3 py-1 text-sm font-medium text-white/80 border border-white/10 transition-colors hover:border-pink-500/30 hover:text-pink-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
