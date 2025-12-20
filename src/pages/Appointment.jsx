export default function Appointment() {
  return (
    <section className="bg-[#eef2f3] min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Book an Appointment
          </h1>
          <p className="mt-4 text-gray-600">
            Fill in your details and our team will contact you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto border border-gold-100">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
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
              value="New Appointment Request - Aqua Spa"
            />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Phone */}
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

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Select Service
              </label>
              <select
                name="service"
                required
                className="w-full border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Choose a service</option>
                <option>Full Body Massage</option>
                <option>Thai Massage</option>
                <option>Couples Massage</option>
                <option>Body To Body Massage</option>
                <option>Four Hand Massage</option>
                <option>Swedish Massage</option>
                <option>Balinese Massage</option>
                <option>Chocolate Massage</option>
                <option>Signature Massage</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                required
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Additional Message (optional)
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Any specific requirement or message"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-md transition shadow-gold"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
