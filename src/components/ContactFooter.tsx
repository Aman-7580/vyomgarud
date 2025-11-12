export default function ContactFooter() {
  return (
    <footer id="contact" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-300 mb-2">Have a mission in mind or want to collaborate?</p>
          <p className="text-gray-400 text-sm mb-4">
            Reach out to discuss solutions, partnerships, or technology demos.
          </p>

          <p className="text-gray-300">📞 +91 888 144 4693</p>
          <p className="text-gray-300">✉️ hello@vyomgarud.ai</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-accent"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-accent"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-black font-semibold rounded-md hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} VyomGarud — All Rights Reserved.
      </div>
    </footer>
  );
}
