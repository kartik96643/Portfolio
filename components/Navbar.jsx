
const Navbar = () => {
    

    return (
    // <nav className="w-full border-b border-gray-200">
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Kartik
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-500 transition">
            {/* Home */}
            <a href="#home">Home</a>
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
                        <a href="#about">About</a>

          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            <a href="#skills" >Skills</a>
            
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            <a href="#projects" >Projects</a>
            
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            <a href="#contact">Contact</a>
            
          </li>
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;