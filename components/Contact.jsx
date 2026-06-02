export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-gray-500 font-medium">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Contact Me
          </h2>

        </div>

        {/* Contact Form */}
        <form className="mt-16 space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}