export default function Contact() {
  return (
    <section className="bg-[#eef2f3] min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT : CONTACT DETAILS */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-8">
            Get in touch with us for appointments, queries, or personalized spa
            experiences.
          </p>

          <div className="space-y-5 text-gray-800">
            <div>
              <p className="font-semibold">Business Name</p>
              <p>AQUA</p>
            </div>

            <div>
              <p className="font-semibold">Phone</p>
              <a
                href="tel:8882020308"
                className="text-gold-600 hover:underline"
              >
                9999276535
              </a>
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:info@aquaspa.in"
                className="text-gold-600 hover:underline break-all"
              >
                info@aquaspa.in
              </a>
            </div>

            <div>
              <p className="font-semibold">Address</p>
              <p>
                2nd Floor, Block-B, B-376,  
                Block B, Meera Bagh, <br />
                Paschim Vihar, Delhi, 110063
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT : CONTACT FORM */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gold-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="4c31e106-ed27-43ec-9811-03a496832d22"
            />

            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission - Aqua Spa"
            />

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-md transition shadow-gold"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
