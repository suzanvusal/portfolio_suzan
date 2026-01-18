import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  const socialLinks = [
    {
      name: "Email",
      icon: "mdi:email-outline",
      href: "mailto:contactmycottage@gmail.com",
      label: "contactmycottage@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      href: "https://linkedin.com/in/sujan-bhusal14",
      label: "Connect on LinkedIn"
    },
    {
      name: "GitHub",
      icon: "mdi:github",
      href: "https://github.com/suzanvusal",
      label: "View GitHub"
    }
  ];

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 flex flex-col gap-6"
    >
      {/* Social Links Bar */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 py-4 border-t border-white/10">
        <div className="flex gap-4 md:gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group relative"
              data-blobity
              data-blobity-radius="8"
              aria-label={link.label}
            >
              <Icon 
                icon={link.icon} 
                className="text-2xl md:text-3xl opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110" 
              />
              {/* Tooltip on hover */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs whitespace-nowrap bg-white/10 px-2 py-1 rounded transition-opacity duration-300 pointer-events-none">
                {link.name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Desktop Scroll to Top */}
        <Link
          className="hidden md:flex items-center gap-1 leading-tight opacity-70 hover:opacity-100 transition-opacity"
          href="#home"
          data-blobity-offset-x="2"
          data-blobity-offset-y="0"
          onClick={() => setSectionInView("home")}
        >
          <Icon icon="mdi:arrow-top" className="text-2xl rounded-2xl" />
          <p className="underline leading-tight text-sm">SCROLL TO TOP</p>
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-sm sm:text-base lg:text-lg flex flex-col md:flex-row md:justify-between justify-center items-center gap-2">
        <p className="text-center md:text-left">
          <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . Sujan . ALL RIGHTS RESERVED
        </p>
        
        {/* Mobile Scroll to Top */}
        <Link
          className="flex md:hidden items-center gap-1 leading-tight opacity-70"
          href="#home"
          data-blobity-offset-x="2"
          data-blobity-offset-y="0"
          onClick={() => setSectionInView("home")}
        >
          <Icon icon="mdi:arrow-top" className="text-xl rounded-2xl" />
          <p className="underline leading-tight text-xs">SCROLL TO TOP</p>
        </Link>
      </div>
    </section>
  );
}