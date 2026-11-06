import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const roles = [
  "Backend Engineer",
  "DevOps Engineer",
  "Security & Platform",
  "Applied Mathematician",
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/RamiAmasha31", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rami-amasha81/", label: "LinkedIn" },
  { icon: <FaEnvelope />, href: "mailto:ramiamasha84@gmail.com", label: "Email" },
];

const stack = [
  "Kubernetes", "Terraform", "Argo CD", "GCP", "BigQuery", "Docker",
  "Python", "Node.js", "Java", "C#", "TypeScript", "PostgreSQL", "Keycloak",
];

const statusRows = [
  ["focus", "security & platform"],
  ["leading", "secrets management migration"],
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const Prompt = ({ children }) => (
  <p className="text-white">
    <span className="text-primary-300">~ $</span> {children}
  </p>
);

const Terminal = () => (
  <div className="card shadow-2xl shadow-shade/40 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
    <div className="flex items-center gap-2 border-b border-white/[0.08] px-5 py-3.5">
      <span className="w-3 h-3 rounded-full bg-flare-400" />
      <span className="w-3 h-3 rounded-full bg-iris-400" />
      <span className="w-3 h-3 rounded-full bg-primary-300" />
      <span className="ml-3 font-mono text-xs text-slate-400">rami@platform</span>
    </div>
    <div className="p-5 md:p-6 font-mono text-[13px] leading-relaxed space-y-4">
      <div>
        <Prompt>whoami</Prompt>
        <p className="text-slate-400">backend &amp; devops engineer</p>
      </div>
      <div>
        <Prompt>rami status</Prompt>
        <dl className="mt-1 space-y-0.5">
          {statusRows.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[5rem_1fr] gap-2">
              <dt className="text-slate-400">{key}</dt>
              <dd className="text-iris-300">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <Prompt>rami focus --list</Prompt>
        <p className="text-slate-400">reliability · security · developer productivity</p>
      </div>
      <p className="text-primary-300">
        ~ $ <span className="inline-block w-2 h-4 align-middle bg-primary-300 animate-pulse" />
      </p>
    </div>
  </div>
);

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentText = roles[currentRole];

      if (!isDeleting) {
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timeout = setTimeout(type, isDeleting ? 45 : 85);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  return (
    <section id="home" className="min-h-screen relative flex flex-col overflow-hidden">
      <div className="px-5 md:px-8 pt-32 pb-12 flex-1 flex items-center">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-12 gap-14 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 min-w-0">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300 backdrop-blur mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-300" />
                </span>
                Backend &amp; DevOps Engineer
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-5 leading-[1.02]"
            >
              Rami <span className="accent">Amasha</span>
            </motion.h1>

            <motion.div
              {...fadeUp(0.2)}
              className="font-mono text-lg md:text-2xl text-slate-300 mb-6 h-9"
            >
              <span>{typedText}</span>
              <span className="animate-pulse text-primary-300 ml-0.5">_</span>
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg text-slate-400 max-w-xl mb-9 leading-relaxed"
            >
              I design and build backend services, cloud infrastructure and CI/CD
              pipelines, with a focus on reliability, security and developer
              productivity. Dual B.Sc. in Software Engineering and Applied Mathematics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-9">
              <Link
                to="experience"
                href="#experience"
                smooth={true}
                offset={-80}
                className="btn-holo group"
              >
                See my work
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="contact"
                href="#contact"
                smooth={true}
                offset={-40}
                className="btn-ghost cursor-pointer"
              >
                <FaEnvelope className="text-primary-300" />
                Get in touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.5)} className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn text-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div {...fadeUp(0.35)} className="lg:col-span-5 min-w-0">
            <Terminal />
          </motion.div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="marquee-mask overflow-hidden border-y border-white/[0.06] py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[...stack, ...stack].map((tech, i) => (
            <span key={i} className="px-7 font-mono text-sm text-slate-400 whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
