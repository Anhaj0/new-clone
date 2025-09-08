import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, SearchIcon, UserIcon } from "./icons";
import logoWhite from "../../assets/images/JadetimesLogoWhite.png";
import logoBlack from "../../assets/images/JadetimesLogoBlack.png";

const MEGA_LINKS = [
  {
    heading: "Who we are",
    links: ["Mission and values", "History", "Leadership", "Awards"],
  },
  {
    heading: "Impact and progress",
    links: ["Frontiers’ impact", "Our annual reports"],
  },
  {
    heading: "Publishing model",
    links: [
      "How we publish",
      "Open access",
      "Peer review",
      "Research integrity",
      "Research Topics",
      "FAIR² Data Management",
      "Fee policy",
    ],
  },
  {
    heading: "Services",
    links: [
      "Societies",
      "National consortia",
      "Institutional partnerships",
      "Collaborators",
    ],
  },
  {
    heading: "More from Frontiers",
    links: [
      "Frontiers Forum",
      "Frontiers Planet Prize",
      "Press office",
      "Sustainability",
      "Career opportunities",
      "Contact us",
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(64); // fallback

  // track header height (so the panel sits exactly below it)
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderH(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // style on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mega on Esc or scroll
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenMega(false);
    const onScroll = () => setOpenMega(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const headerClasses =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
    (isScrolled ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white");

  const logoSrc = isScrolled ? logoBlack : logoWhite;

  return (
    <>
      {/* HEADER BAR */}
      <header ref={headerRef} className={headerClasses}>
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* left side */}
          <div className="flex items-center gap-6">
            <a href="/" className="block shrink-0" aria-label="Home">
              <img
                src={logoSrc}
                alt="JadeTimes"
                className="h-8 md:h-9 lg:h-10 w-auto select-none"
                draggable={false}
              />
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {/* About us trigger (click-to-toggle) */}
              <div className="relative">
                <button
                  aria-expanded={openMega}
                  aria-controls="about-mega"
                  onClick={() => setOpenMega((v) => !v)}
                  className={
                    "flex items-center gap-1 hover:text-blue-500 " +
                    (openMega ? "text-blue-500" : "")
                  }
                >
                  About us <ChevronDownIcon />
                </button>
              </div>

              <a href="#" className="hover:text-blue-500">
                All journals
              </a>
              <a href="#" className="hover:text-blue-500">
                All articles
              </a>
              <button
                className={
                  "border px-4 py-2 rounded-full text-sm font-semibold transition-colors " +
                  (isScrolled
                    ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-800")
                }
              >
                Submit your research
              </button>
            </nav>
          </div>

          {/* right side */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500">
              <SearchIcon /> <span>Search</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-500">
              <UserIcon /> <span>Login</span>
            </a>
          </div>
        </div>
      </header>

      {/* FIXED FULL-WIDTH MEGA PANEL (always mounted so open ALSO animates) */}
      <div
        id="about-mega"
        aria-hidden={!openMega}
        className={
          "fixed left-0 right-0 z-40 transform-gpu transition-all duration-300 " +
          (openMega
            ? "opacity-100 translate-y-0 pointer-events-auto ease-out"
            : "opacity-0 -translate-y-3 pointer-events-none ease-in")
        }
        style={{ top: headerH }}
      >
        <div className="bg-white text-gray-900 ring-1 ring-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
              {MEGA_LINKS.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-xl font-semibold">{col.heading}</h3>
                  <span className="block w-16 h-[3px] bg-gray-300 mt-2 mb-4" />
                  <ul className="space-y-3">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
