import { Link } from 'react-router-dom'
import {
  GraduationCap, Award, FileCheck, Home, Car, Briefcase,
  FileText, BadgeCheck, ArrowRight, CheckCircle2
} from 'lucide-react'

const SERVICES = [
  {
    icon: GraduationCap,
    title: 'University Admission',
    tagline: 'Get into your dream university',
    desc: 'We manage your entire university application — from choosing the right institution and program, to preparing documents, submitting applications, and negotiating your admission.',
    features: [
      'University and program selection',
      'Statement of purpose writing',
      'Application submission & follow-up',
      'Offer letter handling',
    ],
    img: 'https://images.unsplash.com/photo-1758270704763-22072a90d3b6?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: Award,
    title: 'Scholarship Guidance',
    tagline: 'Fund your future',
    desc: 'We identify all available scholarships from Malaysian universities and government bodies, help you build a competitive application, and maximise your chances of financial support.',
    features: [
      'Scholarship eligibility assessment',
      'Application essays & documents',
      'Interview preparation',
      'Multiple scholarship applications',
    ],
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: FileCheck,
    title: 'Student Visa Processing',
    tagline: '98% approval rate',
    desc: 'Our visa team has processed thousands of Malaysian student visas. We prepare your complete application, liaise directly with immigration, and guide you through every requirement.',
    features: [
      'EMGS application management',
      'Medical check coordination',
      'Visa endorsement support',
      'Post-arrival immigration guidance',
    ],
    img: 'https://images.unsplash.com/photo-1575368022843-fe25cb4c5a15?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: Home,
    title: 'Accommodation',
    tagline: 'A home before you arrive',
    desc: 'We arrange verified, safe, and affordable student accommodation near your campus before you board your flight. No arrival-day housing stress.',
    features: [
      'Campus-nearby options',
      'Verified & inspected properties',
      'Booking before departure',
      'Contract review in Arabic',
    ],
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: Car,
    title: 'Airport Pickup',
    tagline: 'We meet you at KLIA',
    desc: 'A dedicated MPE representative will be waiting at Kuala Lumpur International Airport when you land, and will take you directly to your accommodation.',
    features: [
      'Dedicated MPE representative',
      'Direct transport to accommodation',
      'Welcome orientation pack',
      'Emergency contact for first days',
    ],
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: Briefcase,
    title: 'Career Consultation',
    tagline: 'Your career starts here',
    desc: 'Through partnerships with Malaysian employers, we provide CV building, LinkedIn coaching, interview preparation, and internship placement support.',
    features: [
      'Professional CV building',
      'LinkedIn profile optimisation',
      'Mock interview sessions',
      'Internship referrals',
    ],
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: FileText,
    title: 'Translation Services',
    tagline: 'Certified Arabic–English translation',
    desc: 'All your academic documents, birth certificates, transcripts, and official certificates professionally translated and certified for Malaysian university submission.',
    features: [
      'Certified legal translations',
      'Academic document translation',
      'Fast turnaround (24–72 hours)',
      'Accepted by all partner universities',
    ],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: BadgeCheck,
    title: 'Document Verification',
    tagline: 'Officially recognised credentials',
    desc: 'We handle the full attestation chain for your documents — Ministry of Education Sudan, Malaysian Embassy, and EMGS — so your credentials are 100% accepted.',
    features: [
      'Sudan Ministry attestation',
      'Malaysian Embassy legalisation',
      'EMGS document verification',
      'University academic assessment',
    ],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&auto=format',
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-4">Our Services</p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h1 className="text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-tight">
              Every step of your<br />journey, covered
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Malaysian Pacific Education offers a complete range of services — from university selection to your first week in Malaysia. You focus on your future; we handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          {SERVICES.map(({ icon: Icon, title, tagline, desc, features, img }, i) => (
            <div
              key={title}
              className={`group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border hover:border-navy/20 hover:shadow-xl transition-all bg-white ${
                i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`aspect-[16/9] lg:aspect-auto overflow-hidden bg-slate-100 img-zoom ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-11 h-11 rounded-2xl bg-navy/5 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-navy" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-2">{tagline}</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-4 tracking-tight">{title}</h2>
                <p className="text-muted leading-relaxed mb-8">{desc}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-ink/70">
                      <CheckCircle2 size={14} className="text-navy shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors self-start"
                >
                  Get started <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-ink tracking-tight mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-muted mb-8 text-lg">
            Book a free 30-minute consultation and we'll map out exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-7 py-4 bg-navy text-white rounded-2xl font-semibold text-sm hover:bg-navy-light transition-colors flex items-center gap-2 justify-center"
            >
              Book Free Consultation <ArrowRight size={15} />
            </Link>
            <Link
              to="/apply"
              className="px-7 py-4 border border-border text-ink rounded-2xl font-medium text-sm hover:border-navy/30 hover:bg-surface transition-colors text-center"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
