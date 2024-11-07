import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="flex justify-between items-center">
                <div className="hidden md:block m-4">
                    <Link href="/" className="text-2xl font-semibold font-serif lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-700">
                        Ubaid Tech
                    </Link>
                </div>

                <ul className="flex space-x-5 mr-4 mt-4 lg:space-x-8">
                    <li>
                        <Link href="/" className="text-sm md:text-base text-[#ADB7BE] hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-sm md:text-base text-[#ADB7BE] hover:text-white">About</Link>
                    </li>
                    <li>
                        <Link href="#services" className="text-sm md:text-base text-[#ADB7BE] hover:text-white">Services</Link>
                    </li>
                    <li>
                        <Link href="#work" className="text-sm md:text-base text-[#ADB7BE] hover:text-white">Work</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-sm md:text-base text-[#ADB7BE] hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}