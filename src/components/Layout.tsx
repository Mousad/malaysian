import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  GraduationCap, Menu, X, ChevronDown,
  MessageCircle, Mail, Phone, MapPin,
  ArrowRight, Share2
} from 'lucide-react'
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const NAV_LINKS = [
  { label: "من نحن", href: "/about" },
  {
    label: "الخدمات",
    href: "/services",
    children: [
      { label: "القبول الجامعي", href: "/services" },
      { label: "الإرشاد للمنح الدراسية", href: "/scholarships" },
      { label: "التأشيرة الطلابية", href: "/services" },
      { label: "السكن الطلابي", href: "/services" },
    ],
  },
  { label: "الجامعات", href: "/universities" },
  { label: "المنح الدراسية", href: "/scholarships" },
  { label: "الدراسة في ماليزيا", href: "/study-in-malaysia" },
  { label: "قصص النجاح", href: "/stories" },
  { label: "الأسئلة الشائعة", href: "/faq" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50  duration-300 ${
          isTransparent
            ? 'bg-[white]'
            : 'bg-white  shadow-sm border-b border-slate-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
       <Link to="/" className="group">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwe5NwrCOFu_wHsgpLu-ml6hNtFqQg8LiQpI6LYF4xPRRLv3E"
    alt="Logo"
    className="h-14 w-auto object-contain"
  />
</Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isTransparent
                      ? 'text-white/85 hover:text-white hover:bg-white/10'
                      : 'text-ink/70 hover:text-ink hover:bg-slate-50'
                  } ${location.pathname === link.href ? (isTransparent ? 'text-white' : 'text-navy font-semibold') : ''}`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-ink/70 hover:text-navy hover:bg-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-ink/60 hover:text-ink'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/apply"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                isTransparent
                  ? 'bg-white text-navy hover:bg-white/90'
                  : 'bg-navy text-white hover:bg-navy-light'
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'text-[#0d2b5e] ' : 'text-ink '
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[white] border-t border-slate-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-3 text-sm font-medium text-[#0d2b5e] rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-3 py-3 text-sm font-medium text-ink/70 hover:text-navy hover:bg-surface rounded-xl transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/apply"
                className="mt-2 px-4 py-3 bg-navy text-white rounded-xl text-sm font-semibold text-center hover:bg-navy-light transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <a
  href="https://wa.me/601111000635"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
  <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/40">
    <FaWhatsapp className="text-white text-4xl" />
  </div>

  <span className="absolute  top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0d2b5e] text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all" >
    تواصل معنا عبر واتساب
  </span>
</a>

      {/* PAGE CONTENT */}
      <main className="flex-1 page-enter">{children}</main>

      {/* FOOTER */}
    <footer className="bg-navy text-white">

  {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

    <div className="grid lg:grid-cols-4 gap-10">

      {/* Logo & About */}
      <div className="lg:col-span-1 text-right">
        <div className="flex items-center justify-end gap-3 mb-5">

          <div className="text-right">
            <span className="font-bold text-lg block">
  Malaysian  
</span>

            <span className="text-sm text-white/50">
              دليلك للدراسة في ماليزيا
            </span>
          </div>

       

        </div>

        <p className="text-white/60 leading-8 text-sm">
          نساعد الطلاب في الحصول على القبول الجامعي والمنح الدراسية،
          وإنهاء إجراءات التأشيرة، مع تقديم الدعم الكامل حتى الوصول
          والاستقرار في ماليزيا.
        </p>

        {/* Social */}
       <div className="flex justify-center items-center gap-4 mt-6">

  <a
    href="https://wa.me/201000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#25D366] transition-all duration-300 flex items-center justify-center"
  >
    <FaWhatsapp size={20} />
  </a>

  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#E4405F] transition-all duration-300 flex items-center justify-center"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://facebook.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#1877F2] transition-all duration-300 flex items-center justify-center"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="https://x.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-xl bg-white/10 hover:bg-black transition-all duration-300 flex items-center justify-center"
  >
    <FaXTwitter size={20} />
  </a>

</div>
      </div>

      {/* Company + Universities */}
      <div className="lg:col-span-2 grid md:grid-cols-2 grid-cols-2 gap-8 text-center">

        {/* الشركة */}
        <div>
          <h4 className="font-bold text-lg mb-6">
            الشركة
          </h4>

          <ul className="space-y-4 text-white/60 text-sm">

            <li>
              <Link to="/about" className="hover:text-white transition">
                من نحن
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-white transition">
                خدماتنا
              </Link>
            </li>

            <li>
              <Link
                to="/study-in-malaysia"
                className="hover:text-white transition"
              >
                الدراسة في ماليزيا
              </Link>
            </li>

            <li>
              <Link to="/universities" className="hover:text-white transition">
                الجامعات
              </Link>
            </li>

            <li>
              <Link to="/stories" className="hover:text-white transition">
                قصص النجاح
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-white transition">
                الأسئلة الشائعة
              </Link>
            </li>

          </ul>
        </div>

        {/* الجامعات */}
        <div>
          <h4 className="font-bold text-lg mb-6">
            الجامعات
          </h4>

          <ul className="space-y-4 text-white/60 text-sm">

            <li>
              <Link to="/universities" className="hover:text-white transition">
                جامعة مالايا
              </Link>
            </li>

            <li>
              <Link to="/universities" className="hover:text-white transition">
                جامعة تايلور
              </Link>
            </li>

            <li>
              <Link to="/universities" className="hover:text-white transition">
                 آسيا باسيفيك
              </Link>
            </li>

            <li>
              <Link to="/universities" className="hover:text-white transition">
                جامعة INTI
              </Link>
            </li>

            <li>
              <Link to="/universities" className="hover:text-white transition">
                جامعة بوترا
              </Link>
            </li>

            <li>
              <Link to="/universities" className="hover:text-white transition">
                 الوطنية الماليزية
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* Contact */}
    

    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

      <div className="flex gap-6">
        <Link
          to="/privacy"
          className="hover:text-white transition"
        >
          سياسة الخصوصية
        </Link>

        <Link
          to="/terms"
          className="hover:text-white transition"
        >
          الشروط والأحكام
        </Link>
      </div>

      <p>
        © 2026 Malaysian. جميع الحقوق محفوظة.
      </p>

    </div>
  </div>

</footer>
    </div>
  )
}
