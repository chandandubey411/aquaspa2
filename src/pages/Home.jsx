import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-[#eef2f1] min-h-[90vh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-pink-600 bg-pink-100 rounded-full">
            Luxury Spa & Wellness
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Aqua Spa
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            A peaceful destination designed for relaxation, rejuvenation, and
            complete body & mind wellness. Experience premium therapies in a
            calm and luxurious environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/appointment"
              className="bg-pink-600 text-white px-7 py-3 rounded-md font-bold shadow-lg hover:opacity-90 transition"
            >
              Book Appointment
            </Link>

            <a
              href="tel:8882020308 "
              className="border-2 border-pink-600 text-pink-600 px-7 py-3 rounded-md font-bold hover:bg-pink-600 hover:text-white transition"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury Spa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-pink-600 font-bold text-lg">10+ Years</p>
            <p className="text-sm text-gray-600">of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
