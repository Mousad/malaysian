import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Play, Quote } from 'lucide-react'

const STORIES = [
  {
    name: 'Ahmed Al-Rashid',
    program: 'BSc Computer Science',
    university: "Taylor's University",
    year: '2023',
    city: 'from Khartoum, Sudan',
    story: "I always dreamed of studying computer science abroad, but the process seemed overwhelming. MPE simplified everything — from choosing the right university to getting my visa approved. They even had someone waiting for me at the airport. Truly exceptional service.",
    highlight: 'Secured a 30% merit scholarship',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&auto=format',
  },
  {
    name: 'Fatima Ibrahim',
    program: 'MBA Business Administration',
    university: 'Asia Pacific University',
    year: '2022',
    city: 'from Omdurman, Sudan',
    story: "MPE's scholarship guidance was the best investment I ever made. I submitted three scholarship applications simultaneously — something I would never have done alone — and was awarded a 40% tuition reduction. The team genuinely cares about your success.",
    highlight: '40% tuition scholarship secured',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b9e77b3a?w=600&h=700&fit=crop&auto=format',
  },
  {
    name: 'Omar Hassan',
    program: 'BEng Civil Engineering',
    university: 'University of Malaya',
    year: '2021',
    city: 'from Port Sudan, Sudan',
    story: "Getting into the University of Malaya felt like an impossible dream. MPE's team helped me craft a compelling application, prepare for the English test, and navigate the entire EMGS process. I graduated with honours and now work at a construction firm in KL.",
    highlight: 'Graduated with First Class Honours',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&auto=format',
  },
  {
    name: 'Nour Al-Din Mohamed',
    program: 'Bachelor of Medicine',
    university: 'Universiti Putra Malaysia',
    year: '2024',
    city: 'from Kassala, Sudan',
    story: "Medicine is a competitive field. MPE's advisors understood the requirements perfectly and helped me prepare a standout application. The visa process was stressful but they handled everything. I'm now in my second year of medicine at UPM.",
    highlight: 'Accepted to Medicine at UPM',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&auto=format',
  },
  {
    name: 'Hana Salim',
    program: 'BA Architecture',
    university: "Taylor's University",
    year: '2023',
    city: 'from Wad Madani, Sudan',
    story: "As a woman travelling abroad alone for the first time, I was nervous. But MPE arranged my accommodation, picked me up from the airport, and connected me with a Sudanese student community in KL. I felt safe and supported from day one.",
    highlight: 'Full accommodation arranged before arrival',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop&auto=format',
  },
  {
    name: 'Karim Abdalla',
    program: 'BSc Information Technology',
    university: 'INTI International University',
    year: '2022',
    city: 'from El Obeid, Sudan',
    story: "The document attestation process nearly broke me — until I handed it to MPE. They dealt with the Sudan Ministry, the Malaysian Embassy, and EMGS. What would have taken me months, they resolved in three weeks. Zero stress.",
    highlight: 'Documents attested in 3 weeks',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&auto=format',
  },
]

export default function Stories() {
  const [active, setActive] = useState(0)

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-4">Success Stories</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-tight mb-5">
              Real students.<br />Real futures.
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Over 4,500 students trusted us with their education journey. Here are some of their stories.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-xl">
            {/* Image */}
            <div className="relative min-h-[500px] img-zoom bg-slate-100">
              <img
                src={STORIES[active].img}
                alt={STORIES[active].name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur rounded-2xl px-4 py-2.5">
                <p className="text-white font-semibold text-sm">{STORIES[active].highlight}</p>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white p-10 lg:p-12 flex flex-col justify-center">
              <Quote size={32} className="text-navy/10 mb-6" />
              <p className="text-ink text-lg leading-relaxed mb-8">
                "{STORIES[active].story}"
              </p>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={STORIES[active].img}
                  alt={STORIES[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <p className="font-bold text-ink">{STORIES[active].name}</p>
                  <p className="text-sm text-muted">{STORIES[active].program}</p>
                  <p className="text-xs text-navy/60 font-medium mt-0.5">{STORIES[active].university} · {STORIES[active].year}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Navigation dots */}
              <div className="flex gap-2">
                {STORIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? 'w-8 bg-navy' : 'w-2 bg-border hover:bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID OF STORIES */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-8">More stories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map(({ name, program, university, year, story, img }, i) => (
              <div
                key={name}
                onClick={() => setActive(i)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                  i === active ? 'border-navy/30 shadow-lg' : 'border-border'
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 img-zoom">
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-1">
                    {Array(5).fill(0).map((_, j) => (
                      <Star key={j} size={10} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">"{story.slice(0, 100)}…"</p>
                  <div>
                    <p className="font-semibold text-ink text-sm">{name}</p>
                    <p className="text-xs text-muted mt-0.5">{program} · {university} · {year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758270704763-22072a90d3b6?w=1800&h=600&fit=crop&auto=format"
            alt="Students"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Documentary</p>
          <h2 className="text-4xl font-bold text-white mb-5">Watch their journeys</h2>
          <p className="text-white/60 mb-10">Follow four Sudanese students from Khartoum to KL — their fears, their triumphs, and their advice.</p>
          <button className="group w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mx-auto hover:bg-white/20 hover:scale-110 transition-all duration-300">
            <Play size={26} className="text-white ml-1" />
          </button>
          <p className="text-white/30 text-sm mt-5">Coming soon — 2025</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Your story starts here</h2>
          <p className="text-muted mb-8">Join thousands of students who built their future in Malaysia with Malaysian Pacific Education.</p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white rounded-2xl font-semibold text-sm hover:bg-navy-light transition-colors"
          >
            Begin Your Application <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
