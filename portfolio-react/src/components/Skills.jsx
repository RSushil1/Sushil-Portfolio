
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Skills = () => {
    return (
        <div id="skills" className="border-b border-white/10 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-5xl font-bold tracking-tight"
            >
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Stack</span>
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-6 px-4 max-w-7xl mx-auto"
            >
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            initial: { y: -10 },
                            animate: {
                                y: [10, -10],
                                transition: {
                                    duration: 2.5 + Math.random(),
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                },
                            },
                        }}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center gap-3 group hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 min-w-[130px] backdrop-blur-sm cursor-pointer shadow-lg hover:shadow-pink-500/20"
                    >
                        <skill.icon className="text-5xl text-gray-400 group-hover:text-pink-400 transition-colors duration-300 filter drop-shadow-lg" />
                        <span className="text-sm text-gray-400 font-semibold group-hover:text-white uppercase tracking-wider transition-colors duration-300">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
