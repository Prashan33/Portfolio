"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoClose, IoCheckmarkCircle } from "react-icons/io5";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const contactOptions = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prashan-adhikari-902915242/",
    icon: FaLinkedin,
    color: "#0A66C2",
    description: "Connect professionally",
    newTab: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Prashan33",
    icon: FaGithub,
    color: "#ffffff",
    description: "See my code",
    newTab: true,
  },
  {
    label: "Email",
    href: "mailto:prashanadhikari2486@gmail.com",
    icon: MdEmail,
    color: "#CBACF9",
    description: "prashanadhikari2486@gmail.com",
    newTab: false,
  },
];

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("prashanadhikari2486@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s build something{" "}
          <span className="text-purple">amazing</span> together
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m always open to discussing new projects, collaboration
          opportunities, or internship roles in software development.
        </p>
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => setOpen(true)}
        />
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal card */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-sm rounded-2xl border border-white/[0.1] p-6"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              initial={{ opacity: 0, scale: 0.88, x: "-50%", y: "-44%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.88, x: "-50%", y: "-44%" }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">
                  Let&apos;s connect
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/40 hover:text-white transition"
                >
                  <IoClose size={20} />
                </button>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {contactOptions.map((opt, i) => {
                  const isEmail = opt.label === "Email";

                  const inner = (
                    <>
                      {/* Icon circle */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                        style={{
                          backgroundColor: emailCopied && isEmail
                            ? "#22c55e1a"
                            : `${opt.color}1a`,
                        }}
                      >
                        {emailCopied && isEmail ? (
                          <IoCheckmarkCircle size={18} color="#22c55e" />
                        ) : (
                          <opt.icon size={18} color={opt.color} />
                        )}
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm">
                          {isEmail && emailCopied ? "Copied!" : opt.label}
                        </p>
                        <p className="text-white/40 text-xs truncate">
                          {isEmail && emailCopied
                            ? "Email address copied to clipboard"
                            : opt.description}
                        </p>
                      </div>

                      {/* Arrow on hover */}
                      {!emailCopied && (
                        <FaLocationArrow
                          size={10}
                          color={opt.color}
                          className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition"
                        />
                      )}
                    </>
                  );

                  if (isEmail) {
                    return (
                      <motion.button
                        key={opt.label}
                        onClick={handleEmailCopy}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.14] transition-all group w-full text-left"
                      >
                        {inner}
                      </motion.button>
                    );
                  }

                  return (
                    <motion.a
                      key={opt.label}
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.14] transition-all group"
                    >
                      {inner}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Prashan Adhikari
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
