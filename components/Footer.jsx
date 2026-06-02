import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          © 2026 Kartik Jangid. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <a
              href="https://github.com/kartik96643"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={28}
                className="hover:scale-110 transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/kartik-mern/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="hover:scale-110 transition"
              />
            </a>

            <a href="mailto:kartikscorner@gmail.com">
              <MdEmail
                size={28}
                className="hover:scale-110 transition"
              />
            </a>

        </div>

      </div>

    </footer>
  );
}