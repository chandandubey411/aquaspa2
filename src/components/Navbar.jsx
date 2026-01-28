import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

/* slug helper */
const makeSlug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-[#eef2f3]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-14 w-14 flex items-center justify-center rounded-full bg-black shadow-lg ring-1 ring-gold-500/70 transition group-hover:scale-105">
            <img src={logo} alt="AQUA LUXURY SPA" className="h-10 w-10" />
          </div>

          <div className="hidden sm:block leading-tight">
            <p className="text-lg font-serif tracking-wide text-gold-500">
              AQUA
            </p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
              Luxury Wellness
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
          <Link to="/" className="hover:text-gold-500">Home</Link>
          <Link to="/about" className="hover:text-gold-500">About Us</Link>

          <DesktopMenu
            label="Massage Services"
            name="massage"
            basePath="/massage"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={[
              "Full Body Massage",
              "Thai Massage",
              "Couples Massage",
              "Body Massage",
              "Body To Body Massage",
              "Premium Russian And European Massage",
              "Four Hand Massage",
              "Erotic Massage",
              "Hot Stone Massage",
              "Sandwich Massage",
              "Deep Tissue Massage",
              "Aromatherapy Massage",
              "Nuru Massage",
            ]}
          />

          <DesktopMenu
            label="Spa Services"
            name="spa"
            basePath="/spa"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={[
              "Chocolate Massage",
              "Swedish Massage",
              "Balinese Massage",
              "Lomi Lomi Massage",
              "Relaxation Massage",
              "Ayurvedic Massage",
              "Shiatsu Massage",
              "Foot Massage",
              "Oil Massage",
              "Potli Massage",
              "Jacuzzi Honey Bath",
              "Jacuzzi Milk Bath",
              "Signature Massage",
            ]}
          />

          <a
            href="https://wa.me/919999276535"
            target="_blank"
            className="hover:text-gold-500"
          >
            WhatsApp
          </a>

          <Link to="/contact" className="hover:text-gold-500">
            Contact Us
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/appointment"
          className="hidden lg:block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-semibold transition shadow-gold"
        >
          Make Appointment
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 lg:hidden">
          <div className="w-[85%] max-w-sm h-full bg-spaBlack-800 text-white overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center ring-1 ring-gold-500">
                  <img src={logo} alt="Aqua Spa" className="h-8 w-8" />
                </div>
                <span className="font-serif text-lg tracking-wide text-gold-500">
                  AQUA
                </span>
              </div>
              <button className="text-2xl" onClick={() => setMobileOpen(false)}>
                ✕
              </button>
            </div>

            <div className="divide-y divide-gray-800">
              <MobileLink to="/" label="Home" setMobileOpen={setMobileOpen} />
              <MobileLink to="/about" label="About Us" setMobileOpen={setMobileOpen} />

              <MobileAccordion
                title="Massage Services"
                open={mobileAccordion === "massage"}
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === "massage" ? null : "massage"
                  )
                }
                items={[
                  "Full Body Massage",
                  "Thai Massage",
                  "Couples Massage",
                  "Body Massage",
                  "Body To Body Massage",
                  "Premium Russian And European Massage",
                  "Four Hand Massage",
                  "Erotic Massage",
                  "Hot Stone Massage",
                  "Sandwich Massage",
                  "Deep Tissue Massage",
                  "Aromatherapy Massage",
                  "Nuru Massage",
                ]}
                basePath="/massage"
                setMobileOpen={setMobileOpen}
              />

              <MobileAccordion
                title="Spa Services"
                open={mobileAccordion === "spa"}
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === "spa" ? null : "spa"
                  )
                }
                items={[
                  "Chocolate Massage",
                  "Swedish Massage",
                  "Balinese Massage",
                  "Lomi Lomi Massage",
                  "Relaxation Massage",
                  "Ayurvedic Massage",
                  "Shiatsu Massage",
                  "Foot Massage",
                  "Oil Massage",
                  "Potli Massage",
                  "Jacuzzi Honey Bath",
                  "Jacuzzi Milk Bath",
                  "Signature Massage",
                ]}
                basePath="/spa"
                setMobileOpen={setMobileOpen}
              />

              <MobileLink
                to="/appointment"
                label="Make Appointment"
                highlight
                setMobileOpen={setMobileOpen}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* DESKTOP DROPDOWN */
function DesktopMenu({ label, items, name, openMenu, setOpenMenu, basePath }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(name)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button className="flex items-center gap-1 py-2 hover:text-gold-500">
        {label}
        <span>{openMenu === name ? "−" : "+"}</span>
      </button>

      {openMenu === name && (
        <div className="absolute top-full left-0 w-72">
          <div className="h-3" />
          <div className="bg-white rounded-md shadow-xl border overflow-hidden">
            {items.map((item) => (
              <Link
                key={item}
                to={`${basePath}/${makeSlug(item)}`}
                className="block px-5 py-3 text-sm hover:bg-gold-500 hover:text-black border-b last:border-0"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* MOBILE */
function MobileLink({ to, label, setMobileOpen, highlight }) {
  return (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className={`block px-5 py-4 font-semibold ${
        highlight
          ? "bg-gold-500 text-black"
          : "hover:bg-spaBlack-700"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileAccordion({ title, open, onClick, items, basePath, setMobileOpen }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center px-5 py-4 font-semibold ${
          open ? "bg-gold-500 text-black" : "hover:bg-spaBlack-700"
        }`}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="bg-spaBlack-700">
          {items.map((item) => (
            <Link
              key={item}
              to={`${basePath}/${makeSlug(item)}`}
              onClick={() => setMobileOpen(false)}
              className="block px-7 py-3 text-sm hover:bg-spaBlack-800"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
