import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { Card, Reveal } from "./ui";

const contactRows = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+972 54-898-9367",
    href: "tel:+972548989367",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "RamiAmasha31",
    href: "https://github.com/RamiAmasha31",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "rami-amasha81",
    href: "https://www.linkedin.com/in/rami-amasha81/",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Golan Heights, Israel",
  },
];

const quickLinks = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
];

const ContactRow = ({ icon, label, value, href }) => {
  const content = (
    <>
      <span className="w-10 h-10 flex-shrink-0 rounded-lg border border-white/10 bg-white/[0.04] text-primary-300 flex items-center justify-center">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-xs text-slate-400">{label}</span>
        <span className="block text-white break-words">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className="flex items-center gap-4">{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 hover:opacity-80 transition-opacity"
    >
      {content}
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="px-5 md:px-8 pt-12 pb-8">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <Card className="p-8 md:p-14 mb-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow mb-5">
                  <span className="text-slate-400">06 /</span> Contact
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8">
                  Let's build something <span className="accent">reliable</span>
                </h2>
                <a href="mailto:ramiamasha84@gmail.com" className="btn-holo max-w-full">
                  <FaEnvelope className="flex-shrink-0" />
                  <span className="break-all">ramiamasha84@gmail.com</span>
                </a>
                <p className="mt-6 text-sm text-slate-400">
                  References and letters available on request.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactRows.map((row) => (
                  <ContactRow key={row.label} {...row} />
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© {currentYear} Rami Amasha</p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                href={`#${link.to}`}
                smooth={true}
                offset={-80}
                className="text-sm text-slate-400 hover:text-primary-300 cursor-pointer transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
