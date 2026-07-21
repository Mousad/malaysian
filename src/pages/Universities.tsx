import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock, MapPin,  Search, SlidersHorizontal } from 'lucide-react'

export const UNIVERSITIES_DATA = [
  {
    id: 'um',

      logo: 'https://backend.studyfans.com/storage/media/Universities/logo/2735/uvxavGEUMMA6fXWlLCMzUNXUtuRekKEltWtkuaLG.webp',
    name: 'جامعة مالايا',
    rank: 'الأولى في ماليزيا',
    rankGlobal: 'ضمن أفضل 70 جامعة عالميًا (QS)',
    city: 'كوالالمبور',
    tuition: 'ابتداءً من 12,000 رنجيت ماليزي سنويًا',
    intlTuition: 'للطلاب الدوليين: ابتداءً من 18,000 رنجيت ماليزي سنويًا',
    duration: '3 - 4 سنوات',
    type: 'حكومية',
    programs: [
      'الطب',
      'الهندسة',
      'إدارة الأعمال',
      'القانون',
      'علوم الحاسوب'
    ],
    img: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=1400&h=600&fit=crop&auto=format',
    about:
      'تعد جامعة مالايا أقدم وأعرق جامعة في ماليزيا، وهي تحتل باستمرار مراكز متقدمة ضمن تصنيف QS العالمي. تقع في العاصمة كوالالمبور، وتوفر أكثر من 100 برنامج بكالوريوس و150 برنامج دراسات عليا باللغة الإنجليزية.',
    ielts: '6.0+',
    scholarships: [
      'منحة MARA',
      'منحة التميز بجامعة مالايا',
      'منحة الجدارة الدولية'
    ],
  },

  {
    id: 'taylors',
    name: 'جامعة تايلورز',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EKGgHaNBpvKXmSc1QzhfNdyzgQyJBF_9OjW1i6cnmgEVfqk8j2gsoSI&s=10',
    rank: 'ثاني أفضل جامعة خاصة في ماليزيا',
    rankGlobal: 'ضمن أفضل 250 جامعة في آسيا',
    city: 'سوبانج جايا',
    tuition: 'ابتداءً من 28,000 رنجيت ماليزي سنويًا',
    intlTuition: 'للطلاب الدوليين: ابتداءً من 35,000 رنجيت ماليزي سنويًا',
    duration: '3 سنوات',
    type: 'خاصة',
    programs: [
      'إدارة الأعمال',
      'الضيافة',
      'الهندسة المعمارية',
      'الطب',
      'الهندسة'
    ],
    img: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=1400&h=600&fit=crop&auto=format',
    about:
      'تعتبر جامعة تايلورز من أفضل الجامعات الخاصة في ماليزيا، وتتميز بحرم جامعي حديث وشراكات قوية مع الجامعات العالمية، كما تقدم برامج أكاديمية معترفًا بها دوليًا.',
    ielts: '5.5+',
    scholarships: [
      'منحة التميز بجامعة تايلورز',
      'منحة التفوق',
      'منحة بوميبوترا'
    ],
  },

  {
    id: 'apu',
    name: 'جامعة آسيا والمحيط الهادئ',

      logo: 'https://www.cafueducation.com/media/images/school_logos/apu.jpg',
    rank: 'ضمن أفضل 5 جامعات خاصة',
    rankGlobal: 'ضمن أفضل 200 جامعة في آسيا',
    city: 'كوالالمبور',
    tuition: 'ابتداءً من 22,000 رنجيت ماليزي سنويًا',
    intlTuition: 'للطلاب الدوليين: ابتداءً من 28,000 رنجيت ماليزي سنويًا',
    duration: '3 سنوات',
    type: 'خاصة',
    programs: [
      'تكنولوجيا المعلومات',
      'إدارة الأعمال',
      'الهندسة',
      'التصميم',
      'المحاسبة'
    ],
    img: 'https://images.unsplash.com/photo-1775503059048-214026cce5cf?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1775503059048-214026cce5cf?w=1400&h=600&fit=crop&auto=format',
    about:
      'تعد جامعة آسيا والمحيط الهادئ (APU) من أكثر الجامعات تطورًا في ماليزيا، وتضم طلابًا من أكثر من 130 دولة، كما أنها حاصلة على تصنيف خمس نجوم من QS.',
    ielts: '5.0+',
    scholarships: [
      'منحة APU',
      'منحة التميز الدولية',
      'خصم التسجيل المبكر'
    ],
  },

  {
    id: 'inti',
    name: 'جامعة إنتي الدولية',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHts6h9JoQGAIOweK8t3Z1PXYCd_kZPpa101R-5QXkg&s=10',
    rank: 'تصنيف QS خمس نجوم',
    rankGlobal: 'من أفضل الجامعات الخاصة في ماليزيا',
    city: 'نيلاي - ولاية نيجري سمبيلان',
    tuition: 'ابتداءً من 18,000 رنجيت ماليزي سنويًا',
    intlTuition: 'للطلاب الدوليين: ابتداءً من 25,000 رنجيت ماليزي سنويًا',
    duration: '3 سنوات',
    type: 'خاصة',
    programs: [
      'إدارة الأعمال',
      'علوم الحاسوب',
      'الهندسة',
      'المحاسبة',
      'الصيدلة'
    ],
    img: 'https://images.unsplash.com/photo-1781032161857-41214c66559f?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1781032161857-41214c66559f?w=1400&h=600&fit=crop&auto=format',
    about:
      'جامعة إنتي الدولية عضو في شبكة الجامعات العالمية، وتوفر برامج مشتركة مع جامعات في بريطانيا وأستراليا والولايات المتحدة، كما تتيح للطلاب الحصول على درجات مزدوجة.',
    ielts: '5.5+',
    scholarships: [
      'منحة التميز بجامعة إنتي',
      'منحة الشركاء الدوليين',
      'خصم التقديم المبكر'
    ],
  },

  {
    id: 'upm',
    name: 'جامعة بوترا ماليزيا',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyM4E0ZoMe5M9G5EC1sa1dU-zGIqFIRlawwVWO6nkYA&s=10',
    rank: 'ضمن أفضل 200 جامعة عالميًا',
    rankGlobal: 'ضمن أفضل 200 جامعة عالميًا (QS)',
    city: 'سردانج - سيلانجور',
    tuition: 'ابتداءً من 10,000 رنجيت ماليزي سنويًا',
    intlTuition: 'للطلاب الدوليين: ابتداءً من 16,000 رنجيت ماليزي سنويًا',
    duration: '3 - 4 سنوات',
    type: 'حكومية',
    programs: [
      'الزراعة',
      'الطب',
      'الهندسة',
      'العلوم',
      'الاقتصاد'
    ],
    img: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=1400&h=600&fit=crop&auto=format',
    about:
      'جامعة بوترا ماليزيا من الجامعات البحثية الرائدة في ماليزيا، وتشتهر بحرمها الجامعي الواسع وبرامجها القوية في الزراعة والهندسة والعلوم.',
    ielts: '6.0+',
    scholarships: [
      'المنحة الحكومية الماليزية',
      'منحة الدراسات العليا بجامعة بوترا',
      'منحة الطلاب الدوليين'
    ],
  },

  {
    id: 'ukm',
    name: 'الجامعة الوطنية الماليزية',

      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVMGNUnfsCD0zEe7JYa783qYs_XtOkqAM8uX8GOOpvf2IdKXLXeulL2s&s=10',
    rank: 'ضمن أفضل 250 جامعة عالميًا',
    rankGlobal: 'ضمن أفضل 250 جامعة عالميًا (QS)',
    city: 'بانجي - سيلانجور',
    tuition: 'ابتداءً من 11,000 رنجيت ماليزي سنويًا',
    intlTuition: 'للطلاب الدوليين: ابتداءً من 17,000 رنجيت ماليزي سنويًا',
    duration: '3 - 4 سنوات',
    type: 'حكومية',
    programs: [
      'الطب',
      'طب الأسنان',
      'الهندسة',
      'القانون',
      'التربية'
    ],
    img: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=700&h=420&fit=crop&auto=format',
    heroImg: 'https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=1400&h=600&fit=crop&auto=format',
    about:
      'الجامعة الوطنية الماليزية (UKM) من الجامعات البحثية الرائدة في ماليزيا، وتتميز بكليات قوية في الطب والهندسة والعلوم الإنسانية، وتستقطب آلاف الطلاب الدوليين سنويًا.',
    ielts: '6.0+',
    scholarships: [
      'المنحة الحكومية الماليزية',
      'منحة رئيس الجامعة',
      'منحة البحث للدراسات العليا'
    ],
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
     {/* HERO */}
<section className="pt-32 pb-20 bg-navy relative overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://i.pinimg.com/736x/ed/63/40/ed6340ac8c3e726af18363badae525be.jpg"
      alt="الجامعات الماليزية"
      className="w-full h-full object-cover opacity-15"
    />
    <div className="absolute inset-0 bg-gradient from-navy/6 to-navy" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

    <p className="text-xs font-semibold tracking-widest text-white/50 mb-4">
      جامعاتنا الشريكة
    </p>

    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
      أفضل الجامعات
      <br />
      الماليزية
    </h1>

    <p className="text-white/80 text-lg max-w-2xl mx-auto leading-8">
      اكتشف نخبة من الجامعات الماليزية المعتمدة التي تتعاون معها
      <span className="font-semibold"> UniGuide </span>
      لتوفير أفضل الفرص التعليمية للطلاب، مع برامج أكاديمية متنوعة ورسوم دراسية مناسبة.
    </p>

  </div>
</section>

      {/* FILTERS */}
    

      {/* GRID */}
    <section className="py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {filtered.map(({ id, name,   logo, rank, rankGlobal, city, tuition, duration, type, programs, img }) => (

        <Link
          key={id}
          to={`/universities/${id}`}
          className="group bg-white rounded-3xl overflow-hidden border border-border hover:border-navy/20 hover:shadow-xl transition-all duration-300 flex flex-col"
        >

          {/* صورة الجامعة */}
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-4 left-4 flex gap-2">

              <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-full text-xs font-semibold text-navy">
                {rank}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  type === 'حكومية'
                    ? 'bg-navy text-white'
                    : 'bg-white/95 text-ink'
                }`}
              >
                {type}
              </span>

            </div>
          </div>

          {/* المحتوى */}
          <div className="p-6 flex flex-col flex-1">

            <div className="flex items-start gap-3 mb-4">

              <div className="w-12 h-12 rounded-xl bg-white border border-border p-2 flex items-center justify-center shrink-0">
  <img
    src={logo}
    alt={name}
    className="w-full h-full object-contain"
  />
</div>

              <div>
                <h3 className="font-bold text-lg text-ink leading-snug">
                  {name}
                </h3>

                <p className="text-xs text-muted mt-1 flex items-center gap-1">
                  <MapPin size={12} />
                  {city}
                </p>
              </div>

            </div>

            {/* التصنيف العالمي */}
            <div className="text-xs text-muted mb-4">
              {rankGlobal}
            </div>

            {/* التخصصات */}
            <div className="flex flex-wrap gap-2 mb-5">

              {programs.slice(0, 3).map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 bg-accent rounded-full text-xs text-navy font-medium"
                >
                  {p}
                </span>
              ))}

              {programs.length > 3 && (
                <span className="px-3 py-1 bg-surface rounded-full text-xs text-muted">
                  + {programs.length - 3} تخصصات أخرى
                </span>
              )}

            </div>

            {/* الرسوم والمدة */}
            <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">

              <div className="flex items-center gap-2 text-xs text-muted">
                <BookOpen size={13} className="text-navy" />
                {tuition}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted">
                <Clock size={13} className="text-navy" />
                {duration}
              </div>

            </div>

            {/* زر التفاصيل */}
            <div className="flex items-center justify-between pt-4 border-t border-border">

              <span className="text-navy font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">

                عرض التفاصيل

                <ArrowRight size={15} />

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
