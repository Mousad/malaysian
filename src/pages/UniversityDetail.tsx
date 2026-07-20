import { useParams, Link } from 'react-router-dom'
import { UNIVERSITIES_DATA } from './Universities'
import {
  ArrowRight, MapPin, Star, CheckCircle2, BookOpen,
  Clock, Globe, Award, ArrowLeft
} from 'lucide-react'

const GALLERY = [
  'https://images.unsplash.com/photo-1758270704763-22072a90d3b6?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1758270704524-596810e891b5?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?w=600&h=400&fit=crop&auto=format',
]

export default function UniversityDetail() {
  const { id } = useParams<{ id: string }>()
  const uni = UNIVERSITIES_DATA.find((u) => u.id === id) ?? UNIVERSITIES_DATA[0]

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-16 relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <img
          src={uni.heroImg}
          alt={uni.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <Link
            to="/universities"
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Universities
          </Link>
          <div className="flex items-end gap-4 flex-wrap">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-navy font-bold text-lg shadow-xl">
              {uni.short}
            </div>
            <div>
              <div className="flex gap-2 mb-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium">{uni.rank}</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium">{uni.rankGlobal}</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">{uni.name}</h1>
              <p className="text-white/60 flex items-center gap-1.5 mt-1">
                <MapPin size={14} /> {uni.city}, Malaysia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">About the University</h2>
              <p className="text-muted leading-relaxed text-lg">{uni.about}</p>
            </div>

            {/* Programs */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-5">Available Programs</h2>
              <div className="flex flex-wrap gap-2.5">
                {[...uni.programs, 'MBA', 'Data Science', 'Architecture', 'Public Health'].map((p) => (
                  <span key={p} className="px-4 py-2 bg-surface border border-border rounded-xl text-sm text-ink/70 hover:border-navy/30 hover:text-navy cursor-pointer transition-colors">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-5">Admission Requirements</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'High School Certificate', value: 'Minimum 60% or equivalent' },
                  { label: 'IELTS', value: `Band ${uni.ielts}` },
                  { label: 'TOEFL', value: '550+ (paper-based)' },
                  { label: 'SPM', value: '5 credits minimum' },
                  { label: 'A-Level', value: '2 A-Levels or equivalent' },
                  { label: 'Foundation', value: 'Available through MPE' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-4 bg-surface rounded-2xl border border-border">
                    <CheckCircle2 size={16} className="text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-ink mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarships available */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-5">Available Scholarships</h2>
              <div className="flex flex-col gap-3">
                {uni.scholarships.map((s) => (
                  <div key={s} className="flex items-center gap-3 p-4 bg-accent rounded-2xl">
                    <Award size={16} className="text-navy shrink-0" />
                    <span className="text-sm font-medium text-navy">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-5">Campus Gallery</h2>
              <div className="grid grid-cols-2 gap-3">
                {GALLERY.map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-video bg-slate-100 img-zoom">
                    <img src={src} alt={`Campus ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-ink text-lg leading-relaxed mb-5">
                "Studying at {uni.name} was the best decision of my life. The facilities, the faculty, and the multicultural environment exceeded all my expectations. MPE made every step seamless."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&auto=format"
                  alt="Student"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <p className="font-semibold text-sm text-ink">Ahmed Al-Rashid</p>
                  <p className="text-xs text-muted">{uni.programs[0]} Graduate, 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Quick Facts */}
            <div className="bg-surface rounded-3xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-5">Quick Facts</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: MapPin, label: 'Location', value: uni.city },
                  { icon: Globe, label: 'Type', value: `${uni.type} University` },
                  { icon: BookOpen, label: 'Local Tuition', value: uni.tuition },
                  { icon: BookOpen, label: "Int'l Tuition", value: uni.intlTuition },
                  { icon: Clock, label: 'Duration', value: uni.duration },
                  { icon: Globe, label: 'English Req.', value: `IELTS ${uni.ielts}` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3">
                    <div className="flex items-center gap-2 text-muted text-sm">
                      <Icon size={13} className="text-navy/40 shrink-0" />
                      {label}
                    </div>
                    <span className="text-sm font-medium text-ink text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy rounded-3xl p-6">
              <h3 className="font-bold text-white mb-2">Ready to apply?</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Our advisors will guide you through the entire application process at {uni.name}.
              </p>
              <Link
                to="/apply"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-navy rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
              >
                Apply Now <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="mt-3 w-full flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white rounded-xl font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Free Consultation
              </Link>
            </div>

            {/* Ranking */}
            <div className="bg-surface rounded-3xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-4">Rankings</h3>
              {[
                { label: 'Malaysia Ranking', value: uni.rank },
                { label: 'Global Ranking', value: uni.rankGlobal },
                { label: 'QS Stars', value: '5-Star Rated' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2.5 border-b border-border last:border-0">
                  <span className="text-sm text-muted">{label}</span>
                  <span className="text-sm font-semibold text-navy">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
