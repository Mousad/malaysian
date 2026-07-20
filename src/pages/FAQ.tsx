import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'

const FAQS = [
  {
    category: 'Admission',
    items: [
      {
        q: 'What are the minimum requirements to study in Malaysia?',
        a: 'Requirements vary by university and program, but generally you need a high school certificate with passing grades, basic English proficiency, and a valid passport. Some universities require IELTS 5.0–6.0. Our consultants will assess your specific qualifications and match you with universities where you qualify.',
      },
      {
        q: 'Can I apply without an IELTS certificate?',
        a: "Yes. Several of our partner universities offer English language entry tests or foundation programs that waive the IELTS requirement. We'll help you find the best route based on your English level.",
      },
      {
        q: 'How long does the admission process take?',
        a: 'Typically 4–8 weeks from when we submit your application to receiving an offer letter. Some universities are faster. Visa processing adds another 4–6 weeks. We advise starting at least 3–4 months before your intended intake.',
      },
      {
        q: 'Can I apply to multiple universities at the same time?',
        a: "Absolutely. We recommend applying to 2–3 universities simultaneously to maximise your options. We manage all applications in parallel at no extra cost.",
      },
    ],
  },
  {
    category: 'Scholarships',
    items: [
      {
        q: 'Is it possible to get a full scholarship to study in Malaysia?',
        a: "Yes. The Malaysian Government Scholarship (MoHE) covers full tuition plus a monthly allowance. MARA also offers full packages for eligible applicants. Our team will assess your eligibility and help you apply.",
      },
      {
        q: 'When should I start applying for scholarships?',
        a: 'As early as possible — ideally 6 months before your intended intake. Some scholarships have fixed annual deadlines (February–April). Others, like university merit awards, are rolling.',
      },
      {
        q: 'Do I need to be a top student to get a scholarship?',
        a: "Not necessarily. While academic merit is important, many scholarships also consider financial need, extracurricular activities, and personal motivation. We'll help you find scholarships that fit your profile.",
      },
    ],
  },
  {
    category: 'Visa',
    items: [
      {
        q: 'What is the Malaysian student visa process?',
        a: "Malaysian student visas are processed through the Education Malaysia Global Services (EMGS) system. The process involves: (1) University issues an approval letter, (2) EMGS processes your visa application, (3) You receive a visa approval letter, (4) You travel and get an endorsement at the port of entry. We manage the entire process.",
      },
      {
        q: 'What is your visa success rate?',
        a: "Our visa success rate is 98%. Rejections are extremely rare and usually due to document issues that we work hard to prevent. In the rare event of a rejection, we handle the appeal at no extra cost.",
      },
      {
        q: 'Do I need to do a medical examination?',
        a: "Yes. Malaysian student visa requires a medical check from an EMGS-approved clinic in Sudan. We'll guide you to the right clinic and what tests are required.",
      },
    ],
  },
  {
    category: 'Costs & Payments',
    items: [
      {
        q: 'How much does your consultation service cost?',
        a: "The initial consultation is completely free. Our service fees vary depending on the level of support required and are discussed transparently before you commit to anything. Many students find our fee is offset many times over by the scholarships we help secure.",
      },
      {
        q: 'What are the tuition fees at Malaysian universities?',
        a: "Tuition varies significantly. Public universities charge MYR 10,000–20,000/year for international students. Private universities range from MYR 18,000–40,000/year. Specific fees for each program are available on each university's page.",
      },
      {
        q: 'Can I pay tuition in USD or SDG?',
        a: "Most Malaysian universities accept tuition in Malaysian Ringgit (MYR). We can guide you on the best currency conversion methods and advise on affordable transfer services.",
      },
    ],
  },
  {
    category: 'Life in Malaysia',
    items: [
      {
        q: 'Is Malaysia safe for Sudanese students?',
        a: "Yes. Malaysia is one of the safest countries in Southeast Asia with a very welcoming attitude towards Arab and African students. There is a large Sudanese and Arab community in Kuala Lumpur.",
      },
      {
        q: 'Can I work part-time as an international student in Malaysia?',
        a: "Yes. International students on a student visa can work up to 20 hours per week off-campus. On-campus work is generally unrestricted. We provide guidance on legal part-time work opportunities.",
      },
      {
        q: 'Is halal food available in Malaysia?',
        a: "Absolutely. Malaysia is a Muslim-majority country. Halal food is available everywhere — from street food to malls to restaurants. Most university canteens are halal-certified.",
      },
    ],
  },
]

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string>(FAQS[0].category)
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-4">FAQ</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-tight mb-5">
              Answers to your questions
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Everything you need to know about studying in Malaysia, the application process, scholarships, and student life.
            </p>
            <a
              href="https://wa.me/249912345678"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors"
            >
              <MessageCircle size={15} /> Can't find your answer? Ask on WhatsApp
            </a>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { value: '50+', label: 'Questions Answered' },
              { value: '24h', label: 'Response Time' },
              { value: '5★', label: 'Support Rating' },
              { value: 'Free', label: 'First Consultation' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-border text-center">
                <p className="text-3xl font-bold text-navy">{value}</p>
                <p className="text-xs text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FAQS.map(({ category }) => (
              <button
                key={category}
                onClick={() => setOpenCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  openCategory === category
                    ? 'bg-navy text-white'
                    : 'bg-surface border border-border text-ink/60 hover:border-navy/30 hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Items */}
          {FAQS.filter((g) => g.category === openCategory).map(({ items }) => (
            <div key={openCategory} className="flex flex-col gap-3">
              {items.map(({ q, a }) => (
                <div
                  key={q}
                  className="border border-border rounded-2xl overflow-hidden hover:border-navy/20 transition-colors"
                >
                  <button
                    onClick={() => setOpenItem(openItem === q ? null : q)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-surface/50 transition-colors"
                  >
                    <span className="font-semibold text-ink text-[15px]">{q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-muted shrink-0 transition-transform duration-200 ${
                        openItem === q ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openItem === q && (
                    <div className="px-6 pb-6 border-t border-border">
                      <p className="text-muted leading-relaxed pt-5">{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Still have questions?</h2>
          <p className="text-muted mb-8 text-lg">Our advisors are available 6 days a week — book a free call or message us on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-7 py-4 bg-navy text-white rounded-2xl font-semibold text-sm hover:bg-navy-light transition-colors flex items-center gap-2 justify-center"
            >
              Book Free Consultation <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/249912345678"
              className="px-7 py-4 border border-border text-ink rounded-2xl font-medium text-sm hover:border-navy/30 hover:bg-white transition-colors flex items-center gap-2 justify-center"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
