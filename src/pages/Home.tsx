import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import video from "../pilden/Video.mp4";
import { Navigation, Autoplay } from "swiper/modules";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  GraduationCap,
  FileCheck,
  Plane,
  Home as HomeIcon,
  Car,
  Briefcase,
  FileText,
  BadgeCheck,
  Building2,
  Award,
  TrendingUp,
  BookOpen,
  Globe,
  Clock,
  Users,
  MessageCircle,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";


/* ── Animated counter ─────────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-navy">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

/* ── Stats ────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: GraduationCap,
    title: "القبول الجامعي",
    description: "نساعدك في الحصول على قبول بأفضل الجامعات الماليزية.",
  },
  {
    icon: Building2,
    title: "الجامعات الشريكة",
    description: "تعاون مع جامعات معتمدة توفر برامج أكاديمية متنوعة.",
  },
  {
    icon: MessageCircle,
    title: "استشارة مجانية",
    description: "استشارة تعليمية لمساعدتك في اختيار التخصص والجامعة المناسبة.",
  },
];

/* ── Services ─────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: GraduationCap,
    title: 'University Admission',
    desc: 'End-to-end application support at Malaysia\'s top universities.',
    img: 'https://images.unsplash.com/photo-1781032161857-41214c66559f?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Award,
    title: 'Scholarship Guidance',
    desc: 'Find and apply for scholarships that fund your education.',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: FileCheck,
    title: 'Student Visa',
    desc: 'Expert visa processing with a 98% success rate.',
    img: 'https://images.unsplash.com/photo-1575368022843-fe25cb4c5a15?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: HomeIcon,
    title: 'Accommodation',
    desc: 'Verified student housing near your campus.',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Car,
    title: 'Airport Pickup',
    desc: 'Dedicated reception on your arrival day in Malaysia.',
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Briefcase,
    title: 'Career Consultation',
    desc: 'CV writing, interview prep and job placement support.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: FileText,
    title: 'Translation Services',
    desc: 'Certified Arabic–English translation for all documents.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: BadgeCheck,
    title: 'Document Verification',
    desc: 'Official attestation of academic credentials.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&auto=format',
  },
]

/* ── Process steps ────────────────────────────────────────────── */
const STEPS = [
  { icon: Building2, label: "اختيار الجامعة" },
  { icon: FileText, label: "تجهيز المستندات" },
  { icon: FileCheck, label: "الحصول على القبول" },
  { icon: BadgeCheck, label: "إصدار التأشيرة" },
  { icon: Plane, label: "السفر إلى ماليزيا" },
  { icon: CheckCircle2, label: "الاستقبال والاستقرار" },
];

const SECTIONS = [
  {
    title: "المنح   ",
    description:
      "استكشف أحدث المنح الدراسية ",
    image: "https://i.pinimg.com/1200x/28/b6/63/28b663b21e280c1ef8f8a87d4ea7c678.jpg",
    link: "/scholarships",
  },
  {
    title: "خدماتنا",
    description:
      "نقدم جميع الخدمات تساعد الطالب",
    image: "https://i.pinimg.com/736x/97/f3/2d/97f32dd3dec3221cca5a193bc352c8f3.jpg",
    link: "/services",
  },
];

/* ── Featured universities ────────────────────────────────────── */
const UNIVERSITIES = [
  {
    name: "جامعة مالايا",
    short: "UM",
    rank: "الأولى في ماليزيا",
    city: "كوالالمبور",
    tuition: "تبدأ من 12,000 رنجيت ماليزي سنويًا",
    duration: "3 - 4 سنوات",
    img: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=600&h=380&fit=crop&auto=format",
    logo: "https://backend.studyfans.com/storage/media/Universities/logo/2735/uvxavGEUMMA6fXWlLCMzUNXUtuRekKEltWtkuaLG.webp",
  },
  {
    name: "جامعة تايلور",
    short: "TU",
    rank: "الثانية بين الجامعات الخاصة",
    city: "سوبانج جايا",
    tuition: "تبدأ من 28,000 رنجيت ماليزي سنويًا",
    duration: "3 سنوات",
    img: "https://images.unsplash.com/photo-1651670630202-d3bae630885b?w=600&h=380&fit=crop&auto=format",
    logo: "https://uranuseducation.com/wp-content/uploads/2024/08/taylor-university-logo.png",
  },
  {
    name: "جامعة آسيا باسيفيك",
    short: "APU",
    rank: "ضمن أفضل 5 جامعات خاصة",
    city: "كوالالمبور",
    tuition: "تبدأ من 22,000 رنجيت ماليزي سنويًا",
    duration: "3 سنوات",
    img: "https://images.unsplash.com/photo-1775503059048-214026cce5cf?w=600&h=380&fit=crop&auto=format",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIpNKKjWpmAyYmiX-ILi9bKgEgdZt5X9PBiuSYGlMJQ&s=10",
  },
  {
    name: "جامعة إنتي الدولية",
    short: "INTI",
    rank: "تصنيف QS خمس نجوم",
    city: "نيلاي",
    tuition: "تبدأ من 18,000 رنجيت ماليزي سنويًا",
    duration: "3 سنوات",
    img: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=600&h=380&fit=crop&auto=format",
    logo: "https://backend.studyfans.com/storage/media/Universities/logo/2777/DGjosfRsnGZkYafN9LqqOvLor7FavcMmzBAj6y3u.webp",
  },
  {
    name: "جامعة بوترا ماليزيا",
    short: "UPM",
    rank: "ضمن أفضل 200 جامعة عالميًا (QS)",
    city: "سيردانغ",
    tuition: "تبدأ من 10,000 رنجيت ماليزي سنويًا",
    duration: "3 - 4 سنوات",
    img: "https://images.unsplash.com/photo-1781032161857-41214c66559f?w=600&h=380&fit=crop&auto=format",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyM4E0ZoMe5M9G5EC1sa1dU-zGIqFIRlawwVWO6nkYA&s=10",
  },
  {
    name: "الجامعة الوطنية الماليزية",
    short: "UKM",
    rank: "ضمن أفضل 250 جامعة عالميًا (QS)",
    city: "بانغي",
    tuition: "تبدأ من 11,000 رنجيت ماليزي سنويًا",
    duration: "3 - 4 سنوات",
    img: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=600&h=380&fit=crop&auto=format",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS164jcDWSFpNQOpSVUTaAAv-RX9YSSpJFgehehoEnnrM_YfGtUDhQuB6YN&s=10",
  },
];

/* ── Testimonials ─────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "محمد أحمد",
    program: "بكالوريوس هندسة البرمجيات -  ",
    text: "    ممتازة، ساعدوني في استخراج القبول الجامعي والتأشيرة حتى وصلت إلى ماليزيا بكل سهولة.",
    img: "https://i.pinimg.com/1200x/57/e3/5d/57e35d9f049ffc0c123d796da1ad10b2.jpg",
  },
  {
    name: "سارة علي",
    program: "بكالوريوس إدارة الأعمال -  ",
    text: "الفريق كان متعاونًا في كل خطوة، من اختيار الجامعة وحتى الاستقبال بعد الوصول.",
    img: "https://i.pinimg.com/1200x/c6/e8/9f/c6e89fb6de1f807cd4193805e2a29a23.jpg",
  },
  {
    name: "أحمد خالد",
    program: "بكالوريوس علوم الحاسب -  ",
    text: "أنصح أي طالب يرغب بالدراسة في ماليزيا بالتعامل مع UniGuide، الخدمة كانت احترافية وسريعة.",
    img: "https://i.pinimg.com/1200x/0b/89/c0/0b89c051bf4175a2d99faeca20405fe0.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-white "  dir="rtl">
      {/* ── HERO ──────────────────────────────────────────────────── */}
     <section className="relative min-h-screen overflow-hidden flex items-center">

  {/* الفيديو كخلفية */}
  <video
    src={video}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* طبقة داكنة فوق الفيديو */}
  <div className="absolute inset-0 bg-black/25" />

  {/* المحتوى */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

    <div className="max-w-3xl">

      

      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
        ابدأ مستقبلك الأكاديمي
        <br />
        <span className="text-[#FFD54A]">
          مع Malaysian
        </span>
      </h1>

      <p className="text-white/90 text-lg lg:text-xl leading-7 max-w-2xl mb-8">
        نوفر لك جميع الخدمات التي تحتاجها للدراسة في ماليزيا،
        بدءًا من اختيار الجامعة والتخصص المناسب، مرورًا بالحصول
        على القبول الجامعي والمنحة الدراسية، وحتى استخراج التأشيرة
        والاستقبال في المطار ومساعدتك على الاستقرار.
      </p>

      <div className="flex  sm:flex-row gap-4">

        <Link
          to="/apply"
          className="px-5 py-2 rounded-xl bg-[#0d2b5e] text-[white] font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          قدّم 
          <ArrowRight size={18} />
        </Link>

        <Link
          to="/contact"
          className="px-5 py-2 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center"
        >
           استشارة 
        </Link>

      </div>

      <div className="flex  gap-10 mt-6">

        {[
          "قبول ",
          "منح ",
          "تأشيرة ",
         
        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-2 text-white"
          >
            <CheckCircle2
              size={18}
              className="text-[#FFD54A]"
            />
            {item}
          </div>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
     <section className="bg-white border-b border-border">
  <div className="max-w-5xl mx-auto px-1 lg:px-8 py-5 grid md:grid-cols-3 grid-cols-3 gap-4">

    {FEATURES.map(({ icon: Icon, title, description }) => (
      <div
        key={title}
        className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all"
      >
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0d2b5e] flex items-center justify-center">
          <Icon size={25} className="text-white" />
        </div>

        <h3 className="text-[17px] font-bold text-[#0d2b5e] mb-2">
          {title}
        </h3>

        
      </div>
    ))}

  </div>
</section>

<section className="bg-white py-8">
  <div className="max-w-7xl mx-auto px-1">

    <div className="text-center mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-3">
    خدماتنا
  </p>
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        اختر ما تبحث عنه
      </h2>
      <p className="text-gray-600 mt-4">
        سواء كنت تبحث عن منحة دراسية أو ترغب في الاستفادة من خدماتنا، ستجد كل ما تحتاجه هنا.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-2">
      {SECTIONS.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          className="group rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition-all"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-42 w-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="p-5 text-right">
            <h3 className="text-[18px] font-bold text-[#0d2b5e] mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-5">
              {item.description}
            </p>

            <div className="mt-2 text-[#0d2b5e] font-semibold">
              عرض المزيد ←
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
    

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section className="py-8 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
  <p className="text-xs font-semibold tracking-widest text-navy/50 mb-3">
    آلية العمل
  </p>

  <h2 className="text-4xl lg:text-5xl font-bold text-ink tracking-tight">
    رحلتك إلى ماليزيا خطوة بخطوة
  </h2>

  <p className="mt-4 text-muted max-w-md mx-auto leading-8">
    نتولى جميع الإجراءات بدءًا من الاستشارة المجانية وحتى وصولك إلى ماليزيا
    وبدء رحلتك الدراسية بكل سهولة واحترافية.
  </p>
</div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-3   sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4">
              {STEPS.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex flex-col items-center gap-3 text-center">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm transition-colors ${
                      i === 0 ? 'bg-navy text-white' : 'bg-surface text-navy border border-border'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-ink leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">

            <Link
  to="/contact"
  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors"
>
   استشارة مجانية
 <ChevronRight size={15} /></Link>
            
            
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-2 lg:px-8">

    <div className="relative rounded-[10px] overflow-hidden h-[400px]">

      {/* الصورة */}
      <img
        src="https://i.pinimg.com/736x/b0/06/86/b00686378e3b8a20d7f4b8520c6f100e.jpg"
        alt="من نحن"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* طبقة داكنة */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e]/90 via-[#0d2b5e]/80 to-transparent" />

      {/* النص */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-xl px-5 lg:px-16 text-white">

          <span className="inline-block px-2 py-2 rounded-full bg-[#0d2b5e] backdrop-blur text-sm font-semibold mb-6">
            من نحن
          </span>

          <h2 className="text-2xl  text- lg:text-6xl font-bold leading-tight mb-6">
            نرشدك إلى أفضل
            <br />
            الجامعات في ماليزيا
          </h2>

          <p className="text-white/90 text-lg leading-6 mb-6">
            في <span className="font-bold text-yellow-300">Malaysian</span>
            نساعد الطلاب في اختيار الجامعة المناسبة،
            والتقديم على المنح الدراسية،
            واستخراج القبول الجامعي،
            وإنهاء إجراءات التأشيرة،
            مع متابعة كاملة حتى وصولك إلى ماليزيا.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 px-5 py-2 rounded-[10px] bg-[#0d2b5e] text-[#f8fafc] font-bold hover:bg-yellow-300 transition-all"
          >
            تعرف علينا
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>

    </div>

  </div>
</section>

      {/* ── FEATURED UNIVERSITIES ─────────────────────────────────── */}
      <section className="py-8 lg:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-5 lg:px-8">
    {/* Header */}
    <div className="flex items-end justify-between mb-16 gap-6 flex-wrap flex justify-center ">
    <div className="text-center mb-5">
  <p className="text-xs font-semibold tracking-widest text-navy/50 mb-3">
    الجامعات
  </p>

  <h2 className="text-3xl lg:text-5xl font-bold text-ink tracking-tight">
    الجامعات الشريكة معنا
  </h2>
</div>

      
    </div>

    {/* Slider */}
    <Swiper
     
      loop={true}
      spaceBetween={24}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
  
        {UNIVERSITIES.map(
  ({ name, logo, rank, city, tuition, duration, img }) => (
          <SwiperSlide key={name}>
          <Link
  to="/universities"
  className="group block bg-white rounded-[10px] overflow-hidden border border-border hover:border-navy/20 hover:shadow-2xl transition-all duration-300"
>
  {/* صورة الغلاف */}
  <div className="relative">
    <img
      src={img}
      alt={name}
      className="w-full h-42 object-cover group-hover:scale-105 transition duration-500"
    />

    {/* التصنيف */}
    <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-xs font-bold text-[#0d2b5e] shadow">
      {rank}
    </div>

    {/* شعار الجامعة */}
    <div className="absolute -bottom-11 right-26">
      <div className="w-15 h-15 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-contain p-2"
        />
      </div>
    </div>
  </div>

  {/* البيانات */}
  <div className="pt-10 px-4 pb-6 text-right">
    <h3 className="text-xl font-bold text-[#0d2b5e]">
      {name}
    </h3>

  

    <div className="mt-5 space-y-3">

      <div className="flex items-center gap-2 text-gray-600">
        <BookOpen size={17} className="text-[#0d2b5e]" />
        <span>{tuition}</span>
      </div>

    

    </div>

    
  </div>
</Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
   <div className="flex justify-center mt-10">
  <Link
    to="/universities"
    className="inline-flex items-center gap-2 bg-[#0d2b5e] text-white px-5 py-2 rounded-xl font-semibold hover:bg-[#17468c] transition-all"
  >
      الجامعات
    <ArrowLeft size={18} />
  </Link>
</div>
  </div>
</section>



      {/* ── WHY MALAYSIA ──────────────────────────────────────────── */}
      <section className="py-10 lg:py-32 bg-navy overflow-hidden relative">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1577931683033-1059552104e0?w=1800&h=900&fit=crop&auto=format"
      alt="مدينة كوالالمبور"
      className="w-full h-full object-cover opacity-10"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* النص */}
      <div className="text-right">
        <p className="text-xs font-semibold tracking-widest text-accent-mid/70 mb-3">
          لماذا الدراسة في ماليزيا؟
        </p>

        <h2 className="text-2xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
          تعليم عالمي
          <br />
          بتكاليف مناسبة
        </h2>

        <p className="text-white/60 leading-relaxed mb-5">
          تُعد ماليزيا من أفضل الوجهات الدراسية للطلاب الدوليين، حيث توفر جامعات
          معترفًا بها عالميًا، وبرامج تُدرس باللغة الإنجليزية، وبيئة آمنة ومتعددة
          الثقافات، مع تكاليف دراسية ومعيشية أقل مقارنة بالعديد من الدول الأخرى.
        </p>

        <ul className="flex flex-col gap-5">

          {[
            {
              title: "رسوم دراسية مناسبة",
              desc: "ابدأ دراستك برسوم تبدأ من 10,000 رنجيت ماليزي سنويًا، بتكلفة أقل بكثير من الدول الغربية.",
            },
            {
              title: "الدراسة باللغة الإنجليزية",
              desc: "معظم البرامج الأكاديمية تُدرس باللغة الإنجليزية، مما يسهل على الطلاب الدوليين الدراسة.",
            },
            {
              title: "بيئة آمنة ومريحة",
              desc: "ماليزيا دولة آمنة، مناسبة للطلاب العرب والمسلمين، وتتميز بتنوعها الثقافي.",
            },
            {
              title: "شهادات معترف بها عالميًا",
              desc: "الجامعات الماليزية تمنح شهادات معترفًا بها في مختلف دول العالم.",
            },
          ].map(({ title, desc }) => (
            <li key={title} className="flex gap-4 text-right">
              <div className="w-6 h-6 rounded-full bg-accent-mid/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={13} className="text-accent-mid" />
              </div>

              <div>
                <p className="font-semibold text-white text-sm">
                  {title}
                </p>

               
              </div>
            </li>
          ))}

        </ul>

        <Link
          to="/study-in-malaysia"
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-white text-navy rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
        >
         الدراسة في ماليزيا
          <ArrowLeft size={15} />
        </Link>
      </div>

      {/* الصور */}
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {[
          "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=500&h=400&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1602427384420-71c70e2b2a2f?w=500&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?w=500&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=500&h=400&fit=crop&auto=format",
        ].map((src, i) => (
          <div
            key={i}
            className={`rounded-2xl overflow-hidden bg-navy-light ${
              i % 2 === 0 ? "mt-0" : "mt-6"
            }`}
          >
            <img
              src={src}
              alt="الحياة الطلابية في ماليزيا"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
     <section className="py-24 lg:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* العنوان */}
    <div className="text-center mb-16">
      <p className="text-xs font-semibold tracking-widest text-navy/50 mb-3">
        قصص النجاح
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-ink tracking-tight">
        حققوا حلمهم... وحان دورك
      </h2>

      <p className="mt-4 text-muted max-w-2xl mx-auto">
        تعرف على تجارب طلابنا الذين حققوا حلم الدراسة في ماليزيا بمساعدتنا.
      </p>
    </div>

    {/* السلايدر */}
    <Swiper
     
      loop={true}
      spaceBetween={24}
      breakpoints={{
        320: {
          slidesPerView: 1.1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {TESTIMONIALS.map(({ name, program, text, img }) => (
        <SwiperSlide key={name}>
          <div className="bg-surface rounded-3xl p-8 border border-border hover:border-navy/15 hover:shadow-xl transition-all h-full">

            {/* النجوم */}
           

            {/* رأي الطالب */}
           

            {/* بيانات الطالب */}
            <div className="flex items-center justify-center gap-3">

              <img
                src={img}
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
              />

              <div className="text-right">
                <h3 className="font-bold text-[#0d2b5e]">
                  {name}
                </h3>

                <p className="text-sm text-gray-500">
                  {program}
                </p>
              </div>

              

            </div>
             <p className="text-ink leading-8 text-center mb-8">
              "{text}"
            </p>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* الزر */}
    <div className="flex justify-center mt-12">
      <Link
        to="/stories"
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#0d2b5e] text-white rounded-xl font-semibold hover:bg-[#17468c] transition-all"
      >
        عرض جميع قصص النجاح
        <ArrowLeft size={18} />
      </Link>
    </div>

  </div>
</section>
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-3 lg:px-8">

    <div className="text-center mb-12">
      <span className="inline-block px-4 py-2 rounded-full bg-[#0d2b5e]/10 text-[#0d2b5e] font-semibold text-sm mb-4">
        موقعنا
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#0d2b5e] mb-5">
        زوروا مكتبنا في ماليزيا
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto leading-8">
        يسعدنا استقبالكم في مكتب Malaysian بماليزيا للإجابة على جميع
        استفساراتكم المتعلقة بالدراسة والقبول الجامعي والخدمات الطلابية.
      </p>
    </div>

    <div className="overflow-hidden rounded-[10px] shadow-2xl border border-gray-200">

      <iframe
        src="https://www.google.com/maps?q=Kuala+Lumpur,+Malaysia&output=embed"
        width="100%"
        height="250"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />

    </div>

    

  </div>
</section>

<section className="relative py-8 lg:py-32 overflow-hidden">

  {/* صورة الخلفية */}
  <div className="absolute inset-0">
    <img
      src="https://i.pinimg.com/736x/5d/6f/d8/5d6fd8c2c47688f78ece623a0bebdc9d.jpg"
      alt=""
      className="w-full h-full object-cover"
    />

    {/* طبقة تغميق */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* المحتوى */}
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="border-b border-white/20">
      <div className="py-7 grid lg:grid-cols-2 gap-8 items-center">

        <div className="text-right">
         

          <h2 className="text-4xl font-bold text-white">
            هل أنت مستعد للدراسة في ماليزيا؟
          </h2>

          <p className="mt-4 text-white/80">
            انضم إلى آلاف الطلاب الذين حققوا حلمهم بالدراسة في ماليزيا معنا.
          </p>
        </div>

        <div className="flex  sm:flex-row gap-3 lg:justify-end">

          <Link
            to="/apply"
            className="px-4 py-2 bg-white text-[#0d2b5e] rounded-xl font-semibold"
          >
            قدّم الآن
          </Link>

          <Link
            to="/contact"
            className="px-4 py-2 border border-white text-white rounded-xl"
          >
              استشارة مجانية
          </Link>

        </div>

      </div>
    </div>

  </div>

</section>
    </div>
  )
}
