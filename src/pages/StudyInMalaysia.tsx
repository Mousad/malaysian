import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MapPin, Cloud, ShieldCheck, Wifi, Bus, Utensils } from 'lucide-react'

const REASONS = [
  { title: 'Affordable Education', desc: 'Tuition fees from MYR 10,000/year — a fraction of UK or US costs — without sacrificing quality.' },
  { title: 'English Medium', desc: 'All programs at our partner universities are taught entirely in English.' },
  { title: 'Muslim-Friendly Country', desc: 'Malaysia is a Muslim-majority country with halal food everywhere, mosques on every corner, and Islamic banking.' },
  { title: 'Multicultural Society', desc: 'Malaysia\'s diverse population — Malay, Chinese, Indian — creates a welcoming environment for everyone.' },
  { title: 'Strategic Location', desc: 'A gateway to Southeast Asia, with easy access to Singapore, Thailand, Indonesia, and beyond.' },
  { title: 'Globally Recognised Degrees', desc: 'Malaysian degrees are recognised by employers and governments in over 70 countries.' },
]

const LIVING = [
  { category: 'Accommodation', items: [
    { label: 'University hostel', price: 'MYR 200–400/month' },
    { label: 'Private room (shared flat)', price: 'MYR 400–700/month' },
    { label: 'Studio apartment', price: 'MYR 800–1,500/month' },
  ]},
  { category: 'Food & Dining', items: [
    { label: 'Hawker stall meal', price: 'MYR 5–10' },
    { label: 'Restaurant meal', price: 'MYR 15–30' },
    { label: 'Groceries (monthly)', price: 'MYR 200–400' },
  ]},
  { category: 'Transportation', items: [
    { label: 'Monthly LRT/MRT pass', price: 'MYR 50–100' },
    { label: 'Grab ride (city)', price: 'MYR 8–15 per trip' },
    { label: 'Bus fare', price: 'MYR 1–3 per journey' },
  ]},
  { category: 'Utilities & Internet', items: [
    { label: 'Monthly utilities', price: 'MYR 50–150' },
    { label: 'High-speed internet', price: 'MYR 100–150/month' },
    { label: 'Mobile data plan', price: 'MYR 40–80/month' },
  ]},
]

export default function StudyInMalaysia() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-16 min-h-[70vh] flex items-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602427384420-71c70e2b2a2f?w=1800&h=900&fit=crop&auto=format"
          alt="Kuala Lumpur skyline during the day"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Your New Home</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 max-w-2xl">
            Life in Malaysia
          </h1>
          <p className="text-white/65 text-xl leading-relaxed max-w-lg mb-10">
            Discover why Malaysia is the most sought-after study destination in Southeast Asia.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white text-navy rounded-2xl font-semibold text-sm hover:bg-accent transition-colors"
          >
            Apply to Study in Malaysia <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* WHY MALAYSIA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-3">Why Malaysia?</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              The smart choice for<br />international education
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map(({ title, desc }) => (
              <div key={title} className="p-8 rounded-3xl bg-surface border border-border hover:border-navy/20 hover:shadow-lg transition-all">
                <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={16} className="text-navy" />
                </div>
                <h3 className="font-bold text-ink mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVING COSTS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-3">Budget Planning</p>
              <h2 className="text-4xl font-bold text-ink tracking-tight mb-4">Living costs in Malaysia</h2>
              <p className="text-muted leading-relaxed mb-6">
                A comfortable student lifestyle in Kuala Lumpur typically costs MYR 1,200–2,000 per month (approximately USD 260–440), making it one of the most affordable capital cities in Asia.
              </p>
              <div className="bg-accent rounded-2xl p-5">
                <p className="font-bold text-navy text-2xl">MYR 1,200–2,000</p>
                <p className="text-sm text-navy/60 mt-1">Estimated monthly expenses in KL</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {LIVING.map(({ category, items }) => (
                <div key={category} className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wide">{category}</h3>
                  <div className="flex flex-col gap-3">
                    {items.map(({ label, price }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-sm text-muted">{label}</span>
                        <span className="text-sm font-semibold text-navy">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE GRID */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-3">Daily Life</p>
            <h2 className="text-4xl font-bold text-ink tracking-tight">Student life in Malaysia</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-5 auto-rows-[280px]">
            {/* Large card */}
            <div className="lg:col-span-3 rounded-3xl overflow-hidden relative group img-zoom">
              <img
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?w=900&h=560&fit=crop&auto=format"
                alt="Students in Malaysia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl">Active Student Community</p>
                <p className="text-white/70 text-sm mt-1">Join clubs, societies, and international student events</p>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="flex-1 rounded-3xl overflow-hidden relative img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1577931683033-1059552104e0?w=600&h=280&fit=crop&auto=format"
                  alt="Kuala Lumpur skyline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold">Vibrant City Life</p>
                  <p className="text-white/70 text-xs mt-0.5">Kuala Lumpur — a world city at your doorstep</p>
                </div>
              </div>
              <div className="flex-1 rounded-3xl overflow-hidden relative img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&h=280&fit=crop&auto=format"
                  alt="Graduation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold">Career Prospects</p>
                  <p className="text-white/70 text-xs mt-0.5">Graduate with a globally recognised degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Cloud, title: 'Tropical Weather', desc: 'Warm weather year-round (25–32°C). No extreme winters. Great for students from Africa and the Middle East.' },
              { icon: ShieldCheck, title: 'Safe & Stable', desc: "Malaysia ranks among the safest countries in Southeast Asia with low crime rates and a stable political environment." },
              { icon: Wifi, title: 'Fast Internet', desc: 'Excellent 4G/5G coverage across the country and most campuses offer gigabit Wi-Fi.' },
              { icon: Bus, title: 'Modern Transport', desc: 'KL has LRT, MRT, monorail, and Grab ride-hailing — getting around is easy and affordable.' },
              { icon: Utensils, title: 'Diverse Halal Food', desc: 'Malaysia is a food paradise with thousands of halal restaurants, street food stalls, and international cuisines.' },
              { icon: MapPin, title: 'Travel Hub', desc: 'KLIA is one of the best airports in the world — direct flights to Khartoum and over 100 destinations.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon size={20} className="text-accent-mid mb-4" />
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
