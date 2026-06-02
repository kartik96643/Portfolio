import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6" >

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <p className="text-gray-500 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Kartik <br />
            Jangid
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-700">
            MERN Stack Developer
          </h2>

          <p className="mt-6 text-gray-600 leading-7 max-w-lg">
            I build scalable and modern web applications using
            MongoDB, Express.js, React, Node.js and now exploring
            Next.js and AI integration.
          </p>

            {/* Social Icons */}
          <div className="flex gap-10 mt-8 px-2">

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

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
             <a href="#projects">View Projects</a> 
            </button>

            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
               <a href="#contact">
              Contact Me
                </a> 
            </button>

          </div>

        

        </div>

        {/* Right Content */}
        <div className="flex justify-center">

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
            Your Image
          </div>

        </div>

      </div>

    </section>
  );
}

