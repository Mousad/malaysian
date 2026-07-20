import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock, MapPin, Search, SlidersHorizontal } from 'lucide-react'

export const UNIVERSITIES_DATA = [
  {
    id: 'um',
    name: 'University of Malaya',
    short: 'UM',
    rank: '#1 in Malaysia',
    rankGlobal: 'QS Top 70 Globally',
    city: 'Kuala Lumpur',
    tuition: 'From MYR 12,000/yr',
    intlTuition: 'From MYR 18,000/yr',
    duration: '3–4 years',
    type: 'Public',
    programs: ['Medicine', 'Engineering', 'Business', 'Law', 'Computer Science'],
    img: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=1400&h=600&fit=crop&auto=format',
    about: "The University of Malaya is Malaysia's oldest and highest-ranked university, consistently placed in the QS World University Rankings Top 100. Located in Kuala Lumpur, UM offers over 100 undergraduate and 150 postgraduate programs in English.",
    ielts: '6.0+',
    scholarships: ['MARA Scholarship', 'UM Excellence Award', 'International Merit Scholarship'],
  },
  {
    id: 'taylors',
    name: "Taylor's University",
    short: 'TU',
    rank: '#2 Private Malaysia',
    rankGlobal: 'QS Top 250 Asia',
    city: 'Subang Jaya',
    tuition: 'From MYR 28,000/yr',
    intlTuition: 'From MYR 35,000/yr',
    duration: '3 years',
    type: 'Private',
    programs: ['Business', 'Hospitality', 'Architecture', 'Medicine', 'Engineering'],
    img: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=1400&h=600&fit=crop&auto=format',
    about: "Taylor's University is one of Malaysia's leading private universities, renowned for its modern campus and strong industry connections. It offers globally-recognised programs and has partnerships with top universities worldwide.",
    ielts: '5.5+',
    scholarships: ["Taylor's Excellence Award", 'Merit Scholarship', 'Bumiputera Scholarship'],
  },
  {
    id: 'apu',
    name: 'Asia Pacific University',
    short: 'APU',
    rank: 'Top 5 Private',
    rankGlobal: 'QS Top 200 Asia',
    city: 'Kuala Lumpur',
    tuition: 'From MYR 22,000/yr',
    intlTuition: 'From MYR 28,000/yr',
    duration: '3 years',
    type: 'Private',
    programs: ['Technology', 'Business', 'Engineering', 'Design', 'Accounting'],
    img: 'https://images.unsplash.com/photo-1775503059048-214026cce5cf?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1775503059048-214026cce5cf?w=1400&h=600&fit=crop&auto=format',
    about: 'Asia Pacific University (APU) is among the most progressive universities in Malaysia with a unique international student community from over 130 countries. APU is a QS 5-Star Rated University.',
    ielts: '5.0+',
    scholarships: ['APU Scholarship', 'International Excellence Award', 'Early Bird Discount'],
  },
  {
    id: 'inti',
    name: 'INTI International University',
    short: 'INTI',
    rank: 'QS 5-Star',
    rankGlobal: 'Top Private Malaysia',
    city: 'Nilai, Negeri Sembilan',
    tuition: 'From MYR 18,000/yr',
    intlTuition: 'From MYR 25,000/yr',
    duration: '3 years',
    type: 'Private',
    programs: ['Business', 'Computing', 'Engineering', 'Accounting', 'Pharmacy'],
    img: 'https://images.unsplash.com/photo-1781032161857-41214c66559f?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1781032161857-41214c66559f?w=1400&h=600&fit=crop&auto=format',
    about: 'INTI International University is a Laureate International Universities institution offering programs linked with top universities in the UK, Australia, and the US. Students can complete dual degrees.',
    ielts: '5.5+',
    scholarships: ['INTI Excellence Scholarship', 'Laureate Partner Award', 'Early Application Discount'],
  },
  {
    id: 'upm',
    name: 'Universiti Putra Malaysia',
    short: 'UPM',
    rank: 'QS Top 200',
    rankGlobal: 'QS Top 200 Globally',
    city: 'Serdang, Selangor',
    tuition: 'From MYR 10,000/yr',
    intlTuition: 'From MYR 16,000/yr',
    duration: '3–4 years',
    type: 'Public',
    programs: ['Agriculture', 'Medicine', 'Engineering', 'Science', 'Economics'],
    img: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=1400&h=600&fit=crop&auto=format',
    about: 'Universiti Putra Malaysia (UPM) is one of the leading research universities in Malaysia with a sprawling green campus. UPM is particularly strong in agriculture, science, and engineering.',
    ielts: '6.0+',
    scholarships: ['Malaysian Government Scholarship', 'UPM Graduate Fellowship', 'International Student Award'],
  },
  {
    id: 'ukm',
    name: 'Universiti Kebangsaan Malaysia',
    short: 'UKM',
    rank: 'QS Top 250',
    rankGlobal: 'QS Top 250 Globally',
    city: 'Bangi, Selangor',
    tuition: 'From MYR 11,000/yr',
    intlTuition: 'From MYR 17,000/yr',
    duration: '3–4 years',
    type: 'Public',
    programs: ['Medicine', 'Dentistry', 'Engineering', 'Law', 'Education'],
    img: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=1400&h=600&fit=crop&auto=format',
    about: "Universiti Kebangsaan Malaysia (UKM) is a comprehensive research university and one of Malaysia's 5 research universities. It has strong faculties in medical sciences and humanities.",
    ielts: '6.0+',
    scholarships: ['Malaysian Government Scholarship', 'UKM Chancellor Award', 'Graduate Research Fellowship'],
  },
]

export default function Universities() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'All' | 'Public' | 'Private'>('All')

  const filtered = UNIVERSITIES_DATA.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.city.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || u.type === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1597148543182-830ef7bbb904?w=1800&h=600&fit=crop&auto=format"
            alt="Malaysian university skyline"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Our Network</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Partner Universities
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            35+ accredited Malaysian universities — from world-ranked public institutions to industry-connected private colleges.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 bg-surface border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search universities or cities..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"
            />
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-muted" />
            {(['All', 'Public', 'Private'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-navy text-white'
                    : 'bg-white border border-border text-ink/60 hover:border-navy/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted whitespace-nowrap">{filtered.length} universities</p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ id, name, short, rank, rankGlobal, city, tuition, duration, type, programs, img }) => (
              <Link
                key={id}
                to={`/universities/${id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-border hover:border-navy/20 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur rounded-full text-xs font-semibold text-navy">{rank}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      type === 'Public' ? 'bg-navy/90 text-white' : 'bg-white/95 text-ink'
                    }`}>{type}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {short}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink leading-snug">{name}</h3>
                      <p className="text-xs text-muted mt-0.5 flex items-center gap-1">
                        <MapPin size={10} /> {city}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-muted mb-4">{rankGlobal}</div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {programs.slice(0, 3).map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-accent rounded-full text-xs text-navy font-medium">
                        {p}
                      </span>
                    ))}
                    {programs.length > 3 && (
                      <span className="px-2.5 py-1 bg-surface rounded-full text-xs text-muted">
                        +{programs.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                    {[
                      { icon: BookOpen, val: tuition },
                      { icon: Clock, val: duration },
                    ].map(({ icon: Icon, val }) => (
                      <div key={val} className="flex items-center gap-1.5 text-xs text-muted">
                        <Icon size={12} className="text-navy/40 shrink-0" />
                        {val}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-navy font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
