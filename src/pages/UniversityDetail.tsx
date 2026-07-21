import { useParams, Link } from 'react-router-dom'
import { UNIVERSITIES_DATA } from './Universities'
import {
  ArrowRight,
  MapPin,
  Star,
  CheckCircle2,
  BookOpen,
  Clock,
  Globe,
  Award,
  ArrowLeft,
} from 'lucide-react'

const GALLERY = [
  'https://i.pinimg.com/736x/6a/5b/dd/6a5bddd8543e28aa1f98554f32b2d68f.jpg  ',
  'https://i.pinimg.com/1200x/ce/fa/0d/cefa0dbc5522b2951738b78e4801b932.jpg',
  'https://i.pinimg.com/1200x/a2/68/9c/a2689cfc37a73cd6b3947fac846ce585.jpg',
  'https://i.pinimg.com/1200x/86/a8/3d/86a83dff4cc9f9ba68832e1e7a823081.jpg',
]

export default function UniversityDetail() {
  const { id } = useParams<{ id: string }>()
  const uni =
    UNIVERSITIES_DATA.find((u) => u.id === id) ??
    UNIVERSITIES_DATA[0]

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
            <ArrowLeft size={14} />
            العودة إلى الجامعات
          </Link>

          <div className="flex items-end gap-4 flex-wrap">

           <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xl overflow-hidden p-0">
  <img
    src={uni.logo}
    alt={uni.name}
    className="w-full h-full object-contain"
  />
</div>

            <div>

              <div className="flex gap-2 mb-2 flex-wrap">

                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium">
                  {uni.rank}
                </span>

                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium">
                  {uni.rankGlobal}
                </span>

              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                {uni.name}
              </h1>

              <p className="text-white/60 flex items-center gap-1.5 mt-1">
                <MapPin size={14} />
                {uni.city}، ماليزيا
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* المحتوى */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* المحتوى الرئيسي */}

          <div className="lg:col-span-2 flex flex-col gap-12">

            {/* نبذة عن الجامعة */}

            <div>

              <h2 className="text-2xl font-bold text-ink mb-4">
                نبذة عن الجامعة
              </h2>

              <p className="text-muted leading-relaxed text-lg">
                {uni.about}
              </p>

            </div>

            {/* التخصصات */}

            <div>

              <h2 className="text-2xl font-bold text-ink mb-5">
                التخصصات المتاحة
              </h2>

              <div className="flex flex-wrap gap-2.5">

                {[
                  ...uni.programs,
                  'إدارة الأعمال MBA',
                  'علوم البيانات',
                  'الهندسة المعمارية',
                  'الصحة العامة',
                ].map((p) => (

                  <span
                    key={p}
                    className="px-4 py-2 bg-surface border border-border rounded-xl text-sm text-ink/70 hover:border-navy/30 hover:text-navy cursor-pointer transition-colors"
                  >
                    {p}
                  </span>

                ))}

              </div>

            </div>
                        {/* متطلبات القبول */}

            <div>

              <h2 className="text-2xl font-bold text-ink mb-5">
                متطلبات القبول
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  {
                    label: 'الشهادة الثانوية',
                    value: 'معدل لا يقل عن 60٪ أو ما يعادله',
                  },
                  {
                    label: 'اختبار IELTS',
                    value: `درجة ${uni.ielts}`,
                  },
                  {
                    label: 'اختبار TOEFL',
                    value: '550 فأكثر (ورقي)',
                  },
                  {
                    label: 'شهادة SPM',
                    value: 'خمسة مواد ناجحة على الأقل',
                  },
                  {
                    label: 'A-Level',
                    value: 'مادتان أو ما يعادلهما',
                  },
                  {
                    label: 'السنة التأسيسية',
                    value: 'متوفرة عبر UniGuide',
                  },
                ].map(({ label, value }) => (

                  <div
                    key={label}
                    className="flex items-start gap-3 p-4 bg-surface rounded-2xl border border-border"
                  >

                    <CheckCircle2
                      size={16}
                      className="text-navy shrink-0 mt-0.5"
                    />

                    <div>

                      <p className="text-xs font-semibold text-muted">
                        {label}
                      </p>

                      <p className="text-sm font-medium text-ink mt-0.5">
                        {value}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* المنح الدراسية */}

            <div>

              <h2 className="text-2xl font-bold text-ink mb-5">
                المنح الدراسية المتاحة
              </h2>

              <div className="flex flex-col gap-3">

                {uni.scholarships.map((s) => (

                  <div
                    key={s}
                    className="flex items-center gap-3 p-4 bg-accent rounded-2xl"
                  >

                    <Award
                      size={16}
                      className="text-navy shrink-0"
                    />

                    <span className="text-sm font-medium text-navy">
                      {s}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* معرض الصور */}

            <div>

              <h2 className="text-2xl font-bold text-ink mb-5">
                معرض صور الجامعة
              </h2>

              <div className="grid grid-cols-2 gap-2">

                {GALLERY.map((src, i) => (

                  <div
                    key={i}
                    className="rounded-[10px] overflow-hidden aspect-video bg-slate-100 img-zoom"
                  >

                    <img
                      src={src}
                      alt={`صورة ${i + 1}`}
                      className="w-full h-full object-cover"
                    />

                  </div>

                ))}

              </div>

            </div>

            {/* آراء الطلاب */}

            <div className="bg-surface rounded-[10px] p-5 border border-border">

              <div className="flex gap-1 mb-4">

                {Array(5)
                  .fill(0)
                  .map((_, i) => (

                    <Star
                      key={i}
                      size={13}
                      className="text-amber-400 fill-amber-400"
                    />

                  ))}

              </div>

              <p className="text-ink text-lg leading-relaxed mb-5">

                "كانت الدراسة في {uni.name} من أفضل القرارات في حياتي.
                البيئة التعليمية والأساتذة والخدمات المميزة ساعدتني على
                تحقيق أهدافي الأكاديمية، كما قدم لي فريق UniGuide
                الدعم الكامل منذ التقديم وحتى الوصول إلى ماليزيا."

              </p>

              <div className="flex items-center gap-3">

                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&auto=format"
                  alt="طالب"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                />

                <div>

                  <p className="font-semibold text-sm text-ink">
                    طالب دولي
                  </p>

                  <p className="text-xs text-muted">
                    خريج {uni.programs[0]} - دفعة 2023
                  </p>

                </div>

              </div>

            </div>

          </div>          {/* الشريط الجانبي */}

          <div className="flex flex-col gap-5">

            {/* معلومات سريعة */}

            <div className="bg-surface rounded-[10px] p-4 border border-border">

              <h3 className="font-bold text-ink mb-5">
                معلومات سريعة
              </h3>

              <div className="flex flex-col gap-4">

                {[
                  {
                    icon: MapPin,
                    label: 'الموقع',
                    value: uni.city,
                  },
                  {
                    icon: Globe,
                    label: 'نوع الجامعة',
                    value: uni.type,
                  },
                  {
                    icon: BookOpen,
                    label: 'الرسوم الدراسية',
                    value: uni.tuition,
                  },
                  {
                    icon: BookOpen,
                    label: 'رسوم الطلاب الدوليين',
                    value: uni.intlTuition,
                  },
                  {
                    icon: Clock,
                    label: 'مدة الدراسة',
                    value: uni.duration,
                  },
                  {
                    icon: Globe,
                    label: 'متطلبات اللغة',
                    value: `IELTS ${uni.ielts}`,
                  },
                ].map(({ icon: Icon, label, value }) => (

                  <div
                    key={label}
                    className="flex justify-between items-start gap-3"
                  >

                    <div className="flex items-center gap-2 text-muted text-sm">

                      <Icon
                        size={13}
                        className="text-navy/40 shrink-0"
                      />

                      {label}

                    </div>

                    <span className="text-sm font-medium text-ink text-right">
                      {value}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* صندوق التقديم */}

            <div className="bg-navy rounded-3xl p-6">

              <h3 className="font-bold text-white mb-2">
                جاهز للتقديم؟
              </h3>

              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                سيقوم فريق UniGuide بمساعدتك في جميع خطوات التقديم
                إلى {uni.name} وحتى الحصول على القبول الجامعي.
              </p>

              <Link
                to="/apply"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-navy rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
              >
                قدّم الآن
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/contact"
                className="mt-3 w-full flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white rounded-xl font-medium text-sm hover:bg-white/10 transition-colors"
              >
                احصل على استشارة مجانية
              </Link>

            </div>

            {/* التصنيف */}

            <div className="bg-surface rounded-3xl p-6 border border-border">

              <h3 className="font-bold text-ink mb-4">
                تصنيف الجامعة
              </h3>

              {[
                {
                  label: 'التصنيف داخل ماليزيا',
                  value: uni.rank,
                },
                {
                  label: 'التصنيف العالمي',
                  value: uni.rankGlobal,
                },
                {
                  label: 'تصنيف QS',
                  value: '5 نجوم',
                },
              ].map(({ label, value }) => (

                <div
                  key={label}
                  className="flex justify-between py-2.5 border-b border-border last:border-0"
                >

                  <span className="text-sm text-muted">
                    {label}
                  </span>

                  <span className="text-sm font-semibold text-navy">
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}