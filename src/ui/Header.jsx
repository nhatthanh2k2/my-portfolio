import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const goToHome = () => {
        window.location.href = '/portfolio/home'
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div>
                    <img
                        className="w-full h-25 cursor-pointer"
                        src="/images/logo.png"
                        alt="Logo"
                        onClick={() => goToHome()}
                    />
                </div>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex space-x-8 text-gray-600 text-lg">
                    <a href="home" className="hover:text-blue-500">
                        Home
                    </a>
                    <a href="about-me" className="hover:text-blue-500">
                        About me
                    </a>

                    <a href="project" className="hover:text-blue-500">
                        Projects
                    </a>
                    <a href="contact" className="hover:text-blue-500">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600">
                        {/* Nếu mở thì hiện nút X, chưa mở thì hiện menu bars */}
                        {isOpen ? (
                            // X icon
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Menu icon
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        <a href="#about" onClick={toggleMenu} className="hover:text-blue-500">
                            About
                        </a>
                        <a href="#skills" onClick={toggleMenu} className="hover:text-blue-500">
                            Skills
                        </a>
                        <a href="#projects" onClick={toggleMenu} className="hover:text-blue-500">
                            Projects
                        </a>
                        <a href="#contact" onClick={toggleMenu} className="hover:text-blue-500">
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
