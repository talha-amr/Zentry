import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-[6vh] text-black">
            <div className="container mx-auto flex flex-col items-center justify-between  px-[1vw] md:flex-row">
                <p className="text-center font-medium text-xs md:text-[1vw] md:text-left">
                    &copy;Nova 2024. All rights reserved
                </p>

                <div className="flex justify-center gap-4  md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-medium hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
