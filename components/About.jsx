export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center">

          <p className="text-gray-500 font-medium">
            Get To Know More
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About Me
          </h2>

        </div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500">
              Your Image
            </div>

          </div>

          {/* Right Side */}
          <div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="border border-gray-200 rounded-2xl p-6 text-center bg-white">

                <h3 className="text-xl font-semibold">
                  Experience
                </h3>

                <p className="text-gray-600 mt-2">
                  MERN Stack Projects
                </p>

              </div>

              <div className="border border-gray-200 rounded-2xl p-6 text-center bg-white">

                <h3 className="text-xl font-semibold">
                  Education
                </h3>

                <p className="text-gray-600 mt-2">
                  Computer Science Student
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="mt-8 text-gray-600 leading-8">

              I am a passionate MERN Stack Developer who enjoys
              building scalable and user-friendly web applications.
              I have worked on projects like student management
              systems, gym management platforms, and e-commerce
              websites.

              <br /><br />

              Currently, I am exploring Next.js, system design,
              AI integration, and modern backend architecture
              to improve my development skills further.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}