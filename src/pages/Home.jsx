import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-[#f7f8f5] via-[#eef2f1] to-[#e8ecea] overflow-hidden">
      
      {/* Soft decorative glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gold-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-200/20 rounded-full blur-[140px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-4 px-5 py-2 text-sm font-semibold text-gold-700 bg-white/70 backdrop-blur rounded-full shadow-sm">
            ✨ Luxury Spa & Wellness
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Aqua <span className="text-gold-600">Spa</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            A peaceful destination designed for relaxation, rejuvenation, and
            complete body & mind wellness. Experience premium therapies in a
            calm, sun-lit and luxurious environment.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {/* Primary CTA */}
            <Link
              to="/appointment"
              className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-lg font-bold shadow-gold hover:shadow-xl hover:-translate-y-[2px] transition-all"
            >
              Book Appointment
            </Link>

            {/* Secondary CTA */}
            <a
              href="tel:8882020308"
              className="border-2 border-gold-500 text-gold-700 px-8 py-3 rounded-lg font-bold hover:bg-gold-500 hover:text-black hover:-translate-y-[2px] transition-all"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
            
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury Spa"
              className="w-full h-full object-cover scale-105"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge (glass look) */}
          <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur px-7 py-4 rounded-2xl shadow-xl border border-white">
            <p className="text-gold-600 font-bold text-xl">10+ Years</p>
            <p className="text-sm text-gray-600">of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
