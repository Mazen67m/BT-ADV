"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 w-full bg-navy mt-auto border-t border-white/5 pt-16 pb-8 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex items-center gap-4 hover:opacity-80 transition-opacity w-fit">
            <Image 
              src="/logo.png" 
              alt="BT-ADV" 
              width={250} 
              height={100} 
              quality={90}
              className="object-contain h-16 md:h-20 w-auto"
            />
            <span className="text-2xl md:text-3xl font-bold tracking-widest text-white uppercase">
              BT<span className="text-yellow">-adv</span>agency
            </span>
          </Link>
          <p className="text-white/60 text-base md:text-sm max-w-sm">
            {t("footer.description")}
          </p>
          <div className="flex gap-6 mt-2">
            <a 
              href="https://www.instagram.com/bt.advertising.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-colors flex items-center justify-center p-2 -ml-2"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/share/18UHCvKB16/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-colors flex items-center justify-center p-2"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider mb-2">{t("footer.navigation")}</h4>
          <ul className="grid grid-cols-2 gap-2 text-base md:text-sm text-white/70">
            <li><Link href="/works" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.works")}</Link></li>
            <li><Link href="/pricing" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.pricing")}</Link></li>
            <li><Link href="/bts" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.bts")}</Link></li>
            <li><Link href="/teamwork" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.teamwork")}</Link></li>
            <li><Link href="/about" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.about")}</Link></li>
            <li><Link href="/careers" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.careers")}</Link></li>
            <li><Link href="/contact" className="hover:text-yellow transition-colors block py-2 md:py-1">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider mb-2">{t("footer.connect")}</h4>
          <ul className="flex flex-col gap-3 text-base md:text-sm text-white/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-yellow" />
              <a href="tel:01067804027" className="hover:text-yellow transition-colors">
                01067804027
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-yellow" />
              <a href="mailto:support@advagency.com" className="hover:text-yellow transition-colors">
                support@advagency.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-yellow"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <a
                href="https://www.instagram.com/bt.advertising.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-yellow"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <a
                href="https://www.facebook.com/share/18UHCvKB16/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-7xl border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 uppercase tracking-widest gap-4">
        <p>© {new Date().getFullYear()} BT-ADV. {t("footer.rights")}</p>
        <p>{t("footer.slogan")}</p>
      </div>
    </footer>
  );
}
