import Link from "next/link";
import { ReactElement } from "react";

export const Navbar = (): ReactElement => {
    return (
        <nav className="sticky top-0 w-full bg-white shadow-sm z-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex flex-row justify-center sm:justify-between items-center py-4 gap-2 sm:gap-3">
                    <li>
                        <Link 
                            href="/" 
                            className="text-base sm:text-lg font-medium hover:text-gray-600 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/about" 
                            className="text-base sm:text-lg font-medium hover:text-gray-600 transition-colors duration-200"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/faq" 
                            className="text-base sm:text-lg font-medium hover:text-gray-600 transition-colors duration-200"
                        >
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}