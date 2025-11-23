export default function Contact() {
    return (
      <div className="p-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Contact Us
        </h1>
  
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-xl border">
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
  
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
  
          <div>
            <label className="font-semibold">Message</label>
            <textarea
              rows="4"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Type your message..."
            ></textarea>
          </div>
  
          <button
            type="button"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  