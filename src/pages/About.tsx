import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Users, Globe, Award, Heart } from 'lucide-react'

const VALUES = [
  {
    icon: Users,
    title: 'الطالب أولاً',
    desc: 'كل قرار نتخذه يركز على مصلحة الطالب ونجاحه قبل أي شيء آخر.',
  },
  {
    icon: Globe,
    title: 'رؤية عالمية',
    desc: 'نجهز الطلاب لعالم عالمي مليء بالفرص، وليس فقط للدراسة في جامعة معينة.',
  },
  {
    icon: Award,
    title: 'التميز',
    desc: 'نرشح فقط الجامعات والبرامج التي تلبي معايير الجودة والاعتماد.',
  },
  {
    icon: Heart,
    title: 'اهتمام حقيقي',
    desc: 'نحافظ على علاقتنا مع الطلاب ونساندهم حتى بعد التخرج.',
  },
]


const TEAM = [
  {
    name: 'د. خالد الأمين',
    role: 'المؤسس والرئيس التنفيذي',
    bio: 'خبير في مجال التعليم الدولي ولديه خبرة طويلة في إرشاد الطلاب.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'سارة عثمان',
    role: 'مديرة القبول والتسجيل',
    bio: 'ساعدت مئات الطلاب في الحصول على قبول جامعي مناسب.',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b9e77b3a?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'محمد علي',
    role: 'خبير التأشيرات',
    bio: 'متخصص في إجراءات تأشيرات الطلاب ومتابعة ملفات السفر.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'ندى يوسف',
    role: 'علاقات الطلاب',
    bio: 'تدعم الطلاب من أول استشارة وحتى بداية حياتهم الجامعية.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
  },
]


export default function About() {

return (
<div className="bg-white" dir="rtl">


{/* HERO */}

<section
  className="relative pt-16 pb-3 border-b border-border overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/96/16/fb/9616fb85452ebcfd3225f75064f4c008.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* طبقة شفافة فوق الصورة */}
  <div className="absolute inset-0 bg-black/50"></div>


  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">


    <div className="max-w-3xl text-white">


      <p className="text-sm font-semibold text-white/70 mb-4">
        من نحن
      </p>


      <h1 className="text-3xl lg:text-6xl font-bold leading-tight mb-6">
        نحوّل الطموح إلى نجاح أكاديمي
      </h1>


      <p className="text-white/80 text-lg leading-relaxed mb-8">

        تأسست <span className='text-[#ffdf20]'>MALAYSIAN</span> بهدف جعل الدراسة في الخارج أكثر سهولة ووضوحاً للطلاب،
        من خلال تقديم الاستشارات، خدمات القبول الجامعي، والمنح الدراسية،
        لمساعدة كل طالب على الوصول إلى مستقبله الأكاديمي.

      </p>



     



      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-xl font-semibold text-sm hover:bg-gray-100 transition"
      >
        تواصل مع فريقنا
        <ArrowLeft size={15}/>
      </Link>



    </div>


  </div>


</section>



      {/* القصة */}
      <section className="py-24 lg:py-32">

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">


          <p className="text-xs font-semibold text-navy/50 mb-4">
            قصتنا
          </p>


          <h2 className="text-4xl font-bold text-ink tracking-tight mb-6">
            من فكرة بسيطة إلى دليل تعليمي موثوق للطلاب
          </h2>


          <p className="text-muted text-lg leading-relaxed mb-6">

            بدأت <span className='text-[#ffdf20]'>MALAYSIAN</span>  من رؤية واضحة: مساعدة الطلاب في الوصول إلى أفضل الفرص
            التعليمية حول العالم بطريقة سهلة وموثوقة.
            لاحظنا أن الكثير من الطلاب يملكون الطموح، لكن يواجهون صعوبة في فهم
            إجراءات القبول والمنح والتأشيرات.

          </p>


          <p className="text-muted leading-relaxed">

            اليوم نعمل على مساعدة الطلاب في اختيار التخصص المناسب،
            التقديم للجامعات، الحصول على المنح الدراسية،
            ومتابعة كل خطوة حتى بداية رحلتهم التعليمية.
            نحن نؤمن أن كل طالب يستحق شخصاً يفهم أهدافه ويدعمه،
            وليس مجرد رقم في ملف تقديم.

          </p>


        </div>

      </section>




      {/* القيم */}
      <section className="py-24 lg:py-32 bg-surface border-y border-border">


        <div className="max-w-7xl mx-auto px-6 lg:px-8">


          <div className="text-center mb-16">


            <p className="text-xs font-semibold text-navy/50 mb-3">
              ما نؤمن به
            </p>


            <h2 className="text-4xl font-bold text-ink tracking-tight">
              قيمنا
            </h2>


          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


            {VALUES.map(({ icon: Icon, title, desc }) => (

              <div
                key={title}
                className="bg-white rounded-3xl p-8 border border-border hover:border-navy/20 hover:shadow-lg transition-all"
              >


                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center mb-5">

                  <Icon 
                    size={22}
                    className="text-navy"
                  />

                </div>


                <h3 className="font-bold text-ink mb-2">
                  {title}
                </h3>


                <p className="text-sm text-muted leading-relaxed">
                  {desc}
                </p>


              </div>

            ))}


          </div>


        </div>


      </section>
            {/* فريق العمل */}
      <section className="py-24 lg:py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">


          <div className="text-center mb-16">

            <p className="text-xs font-semibold text-navy/50 mb-3">
              الأشخاص خلف <span className='text-[#ffdf20]'>MALAYSIAN</span> 
            </p>


            <h2 className="text-4xl font-bold text-ink tracking-tight">
              تعرف على فريقنا
            </h2>


            <p className="mt-4 text-muted max-w-md mx-auto">
              فريق من المستشارين والخبراء الذين يهتمون بمستقبلك التعليمي
              ويساعدونك في تحقيق أهدافك.
            </p>

          </div>




          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


            {TEAM.map(({ name, role, bio, img }) => (

              <div 
                key={name} 
                className="group"
              >


                <div className="rounded-3xl overflow-hidden aspect-square mb-5 bg-slate-100 img-zoom">

                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />

                </div>



                <h3 className="font-bold text-ink">
                  {name}
                </h3>


                <p className="text-xs font-semibold text-navy/60 mt-1 mb-2">
                  {role}
                </p>


                <p className="text-sm text-muted leading-relaxed">
                  {bio}
                </p>



              </div>

            ))}


          </div>


        </div>


      </section>




      {/* الاعتمادات والشراكات */}
      <section className="py-20 bg-navy">


        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">


          <p className="text-white/40 text-xs mb-8">
            شركاؤنا واعتماداتنا
          </p>



          <div className="flex flex-wrap justify-center items-center gap-10">


            {[
              'جامعات دولية معتمدة',
              'شراكات تعليمية عالمية',
              'خبراء في القبول الجامعي',
              'خدمات استشارية موثوقة',

            ].map((cert)=>(


              <div

                key={cert}

                className="px-6 py-3 rounded-xl border border-white/10 text-white/50 text-sm font-medium"

              >

                {cert}

              </div>


            ))}


          </div>


        </div>


      </section>


    </div>
  )
}