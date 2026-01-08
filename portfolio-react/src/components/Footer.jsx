
const Footer = () => {
    return (
        <footer className="py-6 text-center text-sm text-neutral-500 bg-neutral-950">
            <p className="tracking-wide">
                &copy; {new Date().getFullYear()} Sushil Singh Rathore. All rights reserved.
            </p>
            <p className="mt-1 text-xs">
                Built with React, Vite & Tailwind CSS
            </p>
        </footer>
    );
};

export default Footer;
