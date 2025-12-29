import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-spaBlack-900 text-spaGray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-serif tracking-wide text-gold-500 mb-4">
            AQUA LUXURY SPA
          </h2>
          <p className="text-sm leading-relaxed text-spaGray-400">
            Experience premium relaxation and rejuvenation with our professional
            spa and massage therapies in a calm, luxurious environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold-500 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gold-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/appointment" className="hover:text-gold-400 transition">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gold-500 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-spaGray-400">
            <li>Full Body Massage</li>
            <li>Thai Massage</li>
            <li>Couples Massage</li>
            <li>Swedish Massage</li>
            <li>Signature Spa Therapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gold-500 font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-spaGray-400">
            <li>📍 2nd Floor, Block-B, B-376, Block B, Meera Bagh, Paschim Vihar, Delhi, 110063</li>
            <li>
              📞{" "}
              <a
                href="tel:9999276535"
                className="hover:text-gold-400 transition"
              >
                 9999276535
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@aquaspa.in"
                className="hover:text-gold-400 transition break-all"
              >
                info@aquaspa.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-spaBlack-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-spaGray-500">
          © {new Date().getFullYear()} AQUA LUXURY SPA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
