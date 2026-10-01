"use client";

import React from "react";
import Link from "next/link";
import TikatLogo from "./TikatLogo";
import { siteConfig } from "@/lib/seoConfig";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Phone,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#141517] text-[#A1A1AA] border-t border-[#27272A] pt-14 sm:pt-20 pb-10 sm:pb-14 text-xs sm:text-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 pb-10 sm:pb-14 border-b border-[#27272A]">
          {/* Brand & About */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Tikat">
              <TikatLogo size="sm" dark={true} />
            </Link>
            <p className="text-[#D4D4D8] text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              {t.footer.about}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F2023] border border-[#2E3035] text-xs text-[#E4E4E7]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {t.footer.warranty}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F2023] border border-[#2E3035] text-xs text-[#E4E4E7]">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                {t.footer.fullSource}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.explore}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {t.footer.projectsLink}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.footer.servicesLink}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.footer.calcLink}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {t.footer.processLink}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  {t.footer.blogLink}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.footer.faqLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.contactDirect}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-white hover:text-blue-400 transition-colors">
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#D4D4D8] hover:text-white truncate transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-xs text-[#71717A] pt-1">
                {t.footer.workOnline}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} Tikat. {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">{t.footer.navServices}</a>
            <a href="#portfolio" className="hover:text-white transition-colors">{t.footer.navProjects}</a>
            <a href="#consultation" className="hover:text-white transition-colors">{t.footer.navQuote}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
