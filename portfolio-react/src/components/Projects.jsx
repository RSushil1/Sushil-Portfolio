
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import { PROJECTS } from "../constants"; // Fallback if needed, but we use API now

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/projects')
            .then(res => res.json())
            .then(data => {
                if (data.projects) {
                    setProjects(data.projects);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch projects:", err);
                setLoading(false);
            });
    }, []);

    const getImageSrc = (project) => {
        try {
            const photo = project.photo1;
            if (!photo || !photo.image) return "https://placehold.co/600x400/0a0a0a/ffffff?text=Project";

            // If it's a buffer object from MongoDB
            if (photo.image.data) {
                // Convert array buffer to base64
                const binary = String.fromCharCode(...new Uint8Array(photo.image.data));
                return `data:image/jpeg;base64,${btoa(binary)}`;
            }
            // If it's already a string?
            return photo.image;
        } catch (e) {
            console.error("Image processing error", e);
            return "https://placehold.co/600x400/0a0a0a/ffffff?text=Error";
        }
    }

    return (
        <div id="projects" className="border-b border-white/10 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-5xl font-bold tracking-tight"
            >
                Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Works</span>
            </motion.h2>

            {loading ? (
                <div className="text-center text-neutral-400">Loading projects...</div>
            ) : (
                <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id || index}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] h-full flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="w-full h-60 overflow-hidden relative bg-black/40">
                                <img
                                    src={getImageSrc(project)}
                                    alt={project.projectName}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>

                                {/* Floating Title */}
                                <div className="absolute bottom-4 left-6 z-10">
                                    <h6 className="font-bold text-2xl text-white tracking-wide group-hover:text-pink-400 transition-colors duration-300">{project.projectName}</h6>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow relative z-10 pt-2">
                                <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mb-6 rounded-full"></div>

                                <p className="mb-6 text-neutral-300 text-sm leading-relaxed flex-grow font-normal line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    <span className="text-xs text-neutral-500 font-mono">{project.date}</span>

                                    <div className="flex gap-3">
                                        {project.gitHubLink && (
                                            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
                                                GitHub
                                            </a>
                                        )}
                                        {project.appLink && (
                                            <a href={project.appLink} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white font-semibold transition-colors">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="mt-16 flex justify-center">
                <a href="https://github.com/RSushil1" target="_blank" rel="noopener noreferrer" className="relative px-8 py-3 text-white font-bold group overflow-hidden rounded-full transition-all border border-pink-500/30 hover:border-pink-500/80">
                    <span className="relative z-10 group-hover:text-pink-400 transition-colors duration-300">View Complete GitHub Portfolio</span>
                    <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
            </div>
        </div>
    );
};

export default Projects;
