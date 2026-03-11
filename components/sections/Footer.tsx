import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const footerNavItems = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">REVQUIX</h3>
            <p className="text-gray-400">
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-soft/10 border border-green-soft/20 rounded-full flex items-center justify-center hover:bg-green-soft/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-green-soft" />
              </div>
              <div className="w-10 h-10 bg-green-soft/10 border border-green-soft/20 rounded-full flex items-center justify-center hover:bg-green-soft/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-green-soft" />
              </div>
              <div className="w-10 h-10 bg-green-soft/10 border border-green-soft/20 rounded-full flex items-center justify-center hover:bg-green-soft/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-green-soft" />
              </div>
              <div className="w-10 h-10 bg-green-soft/10 border border-green-soft/20 rounded-full flex items-center justify-center hover:bg-green-soft/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-green-soft" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {footerNavItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-green-soft transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>rohitparih@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 9571406506</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Pune, MH 411033</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 REVQUIX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-green-soft transition-colors cursor-pointer text-sm">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-green-soft transition-colors cursor-pointer text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}