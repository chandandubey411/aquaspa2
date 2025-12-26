export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-gold-600 bg-gold-100 rounded-full">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            AQUA LUXURY SPA
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A place where luxury meets relaxation and wellness.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              AQUA LUXURY SPA is a premium wellness destination created to offer
              complete relaxation of body, mind, and soul. Our spa is designed
              with a calm and luxurious environment where you can escape from
              daily stress and experience true rejuvenation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in professional massage therapies and spa treatments
              delivered by experienced therapists using high-quality oils and
              refined techniques. Every session is personalized to ensure
              maximum comfort and satisfaction.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you are looking for relaxation, stress relief, or a
              refreshing wellness experience, Aqua Spa is the perfect place to
              unwind and recharge.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="bg-[#eef2f1] rounded-2xl p-8 shadow-md border border-gold-100">
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-gold-500">🌿</span> Premium Spa Experience
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Carefully designed therapies in a peaceful and hygienic
                  environment.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-gold-500">💆‍♀️</span> Expert Therapists
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Trained professionals with years of experience in wellness
                  therapies.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-gold-500">✨</span> Relax & Rejuvenate
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  A perfect blend of luxury, comfort, and personalized care.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-gold-500">📍</span> Prime Location
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Easily accessible location with a calm and welcoming
                  atmosphere.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
