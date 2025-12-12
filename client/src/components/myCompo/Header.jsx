import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent"
      style={{
        background: "rgba(255, 255, 255, 0.31);", // transparent so glass is visible
        borderRadius: "0 0 16px 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-black drop-shadow-md">
          TechCrunch <span className="text-black">UnAPI</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-black font-medium">

          <Link to="/" className="hover:underline underline-offset-2 decoration-4 transition">
            Home
          </Link>

          <Link to="/docs" className="hover:underline underline-offset-2 decoration-4 transition">
            Docs
          </Link>

          {/* Glowing GitHub Button */}
          <Link
            to="https://github.com"
            className="px-6 py-2 rounded-lg font-medium border-2 border-black
            shadow-[4px_2px_0_black]
            hover:shadow-[-2px_-4px_0_black]
            bg-white/10 text-black transition"
          >
            <div className="flex items-center space-x-2"><FaGithub /> <p>Github</p></div>
          </Link>

        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 text-black backdrop-blur-lg bg-white/10 border-t border-white/20">

          <Link to="/" className="block py-2">Home</Link>

          <Link to="/docs" className="block py-2">Docs</Link>

          <Link
            to="https://github.com"
            className="block py-2 mt-2 px-3 rounded-lg border border-black
            shadow-[0_0_12px_rgba(0,255,135,0.7)]  bg-black"
          >
            <div className="flex items-center justify-center space-x-2 text-white w-full"><FaGithub /> <p>Github</p></div>
          </Link>

        </div>
      )}
    </header>
  );
}
