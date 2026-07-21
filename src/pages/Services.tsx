import { Link } from 'react-router-dom'
import {
  GraduationCap, Award, FileCheck, Home, Car, Briefcase,
  FileText, BadgeCheck, ArrowRight, CheckCircle2, ArrowLeft
} from 'lucide-react'

const SERVICES = [
  {
    icon: GraduationCap,
    title: 'القبول الجامعي',
    tagline: 'ابدأ رحلتك الجامعية بثقة',
    desc: 'نساعدك في اختيار الجامعة والتخصص المناسبين، وتجهيز جميع المستندات، وإرسال طلب التقديم ومتابعته حتى الحصول على القبول النهائي.',
    features: [
      'اختيار الجامعة والتخصص',
      'تجهيز ملف التقديم',
      'إرسال ومتابعة الطلب',
      'استلام خطاب القبول',
    ],
    img: 'https://i.pinimg.com/1200x/0a/ef/36/0aef36d87fa8011cb529dd9a46451631.jpg',
  },
  {
    icon: Award,
    title: 'المنح الدراسية',
    tagline: 'احصل على أفضل فرصة',
    desc: 'نساعدك في العثور على أفضل المنح الدراسية المناسبة لك، وتجهيز طلب التقديم لزيادة فرص قبولك.',
    features: [
      'تقييم أهلية المنحة',
      'تجهيز المستندات',
      'التحضير للمقابلات',
      'التقديم على أكثر من منحة',
    ],
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: FileCheck,
    title: 'استخراج التأشيرة الدراسية',
    tagline: 'إجراءات سهلة وسريعة',
    desc: 'نتولى جميع إجراءات استخراج التأشيرة الدراسية ومتابعة الطلب حتى صدور الموافقة.',
    features: [
      'التقديم عبر EMGS',
      'الفحص الطبي',
      'إصدار التأشيرة',
      'متابعة حتى الوصول',
    ],
    img: 'https://i.pinimg.com/736x/9a/21/9c/9a219c5739c2c4d36b8db71c1a6237a1.jpg',
  },
  {
    icon: Home,
    title: 'السكن الطلابي',
    tagline: 'سكن آمن ومناسب',
    desc: 'نوفر خيارات سكن قريبة من الجامعة تناسب ميزانيتك مع ضمان الجودة والأمان.',
    features: [
      'سكن قريب من الجامعة',
      'خيارات متنوعة',
      'حجز قبل السفر',
      'عقود موثوقة',
    ],
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: Car,
    title: 'الاستقبال من المطار',
    tagline: 'راحة من أول لحظة',
    desc: 'يقوم فريقنا باستقبالك في المطار وإيصالك إلى السكن بكل سهولة وأمان.',
    features: [
      'استقبال بالمطار',
      'النقل إلى السكن',
      'المساعدة في أول يوم',
      'دعم على مدار الساعة',
    ],
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: Briefcase,
    title: 'الاستشارات المهنية',
    tagline: 'ابدأ مستقبلك المهني',
    desc: 'نساعدك في إعداد السيرة الذاتية، وتحسين حساب LinkedIn، والتجهيز لسوق العمل.',
    features: [
      'كتابة السيرة الذاتية',
      'تحسين LinkedIn',
      'تدريب على المقابلات',
      'فرص تدريب عملي',
    ],
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: FileText,
    title: 'الترجمة المعتمدة',
    tagline: 'ترجمة احترافية',
    desc: 'ترجمة جميع المستندات الأكاديمية والرسمية ترجمة معتمدة ومقبولة لدى الجامعات.',
    features: [
      'ترجمة قانونية',
      'ترجمة الشهادات',
      'سرعة في الإنجاز',
      'اعتماد رسمي',
    ],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&auto=format',
  },
  {
    icon: BadgeCheck,
    title: 'توثيق الشهادات',
    tagline: 'توثيق رسمي',
    desc: 'نساعدك في توثيق واعتماد جميع الشهادات والمستندات المطلوبة للدراسة بالخارج.',
    features: [
      'توثيق وزارة التعليم',
      'اعتماد السفارة',
      'اعتماد EMGS',
      'تقييم أكاديمي',
    ],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&auto=format',
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* HERO */}
    <section
  className="relative pt-10 pb-27 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/a5/7e/62/a57e62887d881e1f644b1fcfbab7a3c9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0d2b5e]/75"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

    <p className="text-sm font-semibold tracking-widest text-white/80 mb-5">
      خدمات UniGuide
    </p>

    <h1 className="text-3xl lg:text-7xl font-bold text-white leading-tight mb-6">
      كل ما تحتاجه
      <br />
      للدراسة في الخارج
    </h1>

    <p className="max-w-3xl mx-auto text-lg lg:text-xl text-white/85 leading-relaxed mb-10">
      نوفر جميع الخدمات التي يحتاجها الطالب، بدءًا من اختيار الجامعة
      المناسبة، والتقديم، واستخراج التأشيرة، وحتى الاستقبال من المطار
      والسكن والمتابعة بعد الوصول.
    </p>

    <div className="flex  sm:flex-row gap-4 justify-center">

      <Link
        to="/apply"
        className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-[10px] bg-white text-[#0d2b5e] font-bold hover:scale-105 transition-all"
      >
         قدم
        <ArrowLeft size={18} />
      </Link>

      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-[10px] border-2 border-white text-white font-bold hover:bg-white hover:text-[#0d2b5e] transition-all"
      >
        تواصل معنا
      </Link>

    </div>

  </div>
</section>

      {/* SERVICES LIST */}
    <section className="py-10">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-8">

    {SERVICES.map(({ icon: Icon, title, tagline, desc, features, img }, i) => (

      <div
        key={title}
        className={`group grid lg:grid-cols-2 overflow-hidden rounded-[10px] bg-white border border-border hover:border-navy/20 hover:shadow-xl transition-all ${
          i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
        }`}
      >

        {/* الصورة */}
        <div
          className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${
            i % 2 === 1 ? "lg:order-2" : ""
          }`}
        >
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        </div>

        {/* المحتوى */}
        <div
          className={`p-4 lg:p-12 flex flex-col justify-center ${
            i % 2 === 1 ? "lg:order-1" : ""
          }`}
        >

          <div className="w-10 h-10 rounded-2xl bg-navy/10 flex items-center justify-center mb-6">
            <Icon size={26} className="text-navy" />
          </div>

          <p className="text-sm font-semibold text-navy mb-2">
            {tagline}
          </p>

          <h2 className="text-3xl font-bold text-ink mb-3">
            {title}
          </h2>

          <p className="text-muted leading-8 mb-5">
            {desc}
          </p>

          <ul className="space-y-1 mb-5">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-ink/80"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-600 shrink-0"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-[10px] font-semibold hover:bg-[#123b7a] transition self-start"
          >
            ابدأ الآن
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    ))}

  </div>
</section>

      {/* CTA */}
      <section
  className="relative py-10 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/a5/c7/f7/a5c7f771dbf8821b259416f8e6bbbbdc.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0d2b5e]/75"></div>

  <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">

    <span className="inline-block px-5 py-1 rounded-[10px] bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6">
      استشارة مجانية
    </span>

    <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
      لست متأكدًا من الخدمة المناسبة لك؟
    </h2>

    <p className="text-lg leading-8 text-white/90 max-w-2xl mx-auto mb-10">
      يقدم فريق <span className="font-bold">MALAYSIAN</span> استشارة مجانية لمساعدتك في
      اختيار أفضل خدمة تناسب أهدافك الأكاديمية، مع وضع خطة واضحة
      لبدء رحلتك التعليمية بثقة.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#0d2b5e] font-bold hover:scale-105 transition-all"
      >
        احجز استشارة مجانية
        <ArrowRight size={18} />
      </Link>

      <Link
        to="/apply"
        className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0d2b5e] transition-all"
      >
        ابدأ التقديم الآن
      </Link>

    </div>

  </div>
</section>
    </div>
  )
}
