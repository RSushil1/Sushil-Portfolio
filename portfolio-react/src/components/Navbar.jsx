
import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                    Sushil Singh
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/sushil-singh-rathore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-xl"><FaLinkedin /></a>
                    <a href="https://github.com/RSushil1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"><FaGithub /></a>
                </div>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0f172a] border-t border-white/10 absolute w-full left-0 animate-in slide-in-from-top-5 fade-in duration-300">
                    <div className="px-6 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-300 hover:text-cyan-400 text-lg font-medium block"
                                onClick={toggleMenu}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex space-x-6 pt-4 border-t border-gray-800">
                            <a href="https://www.linkedin.com/in/sushil-singh-rathore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-2xl"><FaLinkedin /></a>
                            <a href="https://github.com/RSushil1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
