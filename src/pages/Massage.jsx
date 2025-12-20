import { useParams } from "react-router-dom";
import massages from "../data/massage.json";

export default function Massage() {
  const { slug } = useParams();

  const massage = massages.find((item) => item.slug === slug);

  if (!massage) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Massage Service Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="pt-10 pb-20 bg-[#eef2f1]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {massage.title}
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {massage.description}
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>
                <b className="text-gold-600">Duration:</b> {massage.duration}
              </p>
              <p>
                <b className="text-gold-600">Price:</b> {massage.price}
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gold-100">
            <img
              src={massage.coverImage}
              alt={massage.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits
          </h2>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {massage.benefits.map((benefit, i) => (
              <li
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border border-gold-100 text-gray-700 flex gap-2"
              >
                <span className="text-gold-500 font-bold">✔</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* THERAPIST / GALLERY */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Therapists
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {massage.gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md border border-gold-100 hover:scale-105 transition duration-300"
              >
                <img
                  src={img}
                  alt="Spa Therapist"
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
