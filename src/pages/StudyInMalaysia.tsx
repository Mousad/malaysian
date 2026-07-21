import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MapPin, Cloud, ShieldCheck, Wifi, Bus, Utensils } from 'lucide-react'

const REASONS = [
  {
    title: 'تعليم عالي الجودة بتكلفة مناسبة',
    desc: 'تبدأ الرسوم الدراسية من حوالي 10,000 رنجت ماليزي سنويًا، وهي أقل بكثير من معظم الدول الغربية مع الحفاظ على جودة التعليم.'
  },
  {
    title: 'الدراسة باللغة الإنجليزية',
    desc: 'جميع البرامج في الجامعات الشريكة تُدرَّس باللغة الإنجليزية، مما يسهل الدراسة للطلاب الدوليين.'
  },
  {
    title: 'بيئة إسلامية مناسبة',
    desc: 'ماليزيا دولة ذات أغلبية مسلمة، وتتوفر فيها المطاعم الحلال والمساجد والخدمات الإسلامية في جميع المدن.'
  },
  {
    title: 'مجتمع متعدد الثقافات',
    desc: 'تتميز ماليزيا بتنوع ثقافي كبير يضم الماليزيين والصينيين والهنود وغيرهم، مما يجعلها بيئة مرحبة بالطلاب من مختلف الجنسيات.'
  },
  {
    title: 'موقع استراتيجي',
    desc: 'تقع ماليزيا في قلب جنوب شرق آسيا، مما يتيح سهولة السفر إلى سنغافورة وتايلاند وإندونيسيا وغيرها.'
  },
  {
    title: 'شهادات معترف بها عالميًا',
    desc: 'تحظى الجامعات الماليزية باعتراف دولي، وتُقبل شهاداتها في العديد من الدول حول العالم.'
  },
]

const LIVING = [
  {
    category: 'السكن',
    items: [
      {
        label: 'السكن الجامعي',
        price: '200–400 رنجت / شهر'
      },
      {
        label: 'غرفة خاصة (شقة مشتركة)',
        price: '400–700 رنجت / شهر'
      },
      {
        label: 'شقة استوديو',
        price: '800–1500 رنجت / شهر'
      },
    ]
  },

  {
    category: 'الطعام',
    items: [
      {
        label: 'وجبة شعبية',
        price: '5–10 رنجت'
      },
      {
        label: 'وجبة في مطعم',
        price: '15–30 رنجت'
      },
      {
        label: 'مصاريف البقالة الشهرية',
        price: '200–400 رنجت'
      },
    ]
  },

  {
    category: 'المواصلات',
    items: [
      {
        label: 'اشتراك شهري للمترو',
        price: '50–100 رنجت'
      },
      {
        label: 'رحلة Grab داخل المدينة',
        price: '8–15 رنجت'
      },
      {
        label: 'تذكرة الحافلة',
        price: '1–3 رنجت'
      },
    ]
  },

  {
    category: 'الإنترنت والخدمات',
    items: [
      {
        label: 'فواتير الكهرباء والمياه',
        price: '50–150 رنجت'
      },
      {
        label: 'إنترنت منزلي',
        price: '100–150 رنجت / شهر'
      },
      {
        label: 'باقة هاتف وإنترنت',
        price: '40–80 رنجت / شهر'
      },
    ]
  },
]

export default function StudyInMalaysia() {
  return (
    <div className="bg-white" dir="rtl">
      {/* HERO */}
      <section className="pt-6 min-h-[70vh] flex items-center relative overflow-hidden"  dir="rtl">

  <img
    src="https://images.unsplash.com/photo-1602427384420-71c70e2b2a2f?w=1800&h=900&fit=crop&auto=format"
    alt="الدراسة في ماليزيا"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-l from-navy/90 via-navy/70 to-transparent" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">

    <p className="text-xs font-semibold tracking-widest text-white/40 mb-4">
      وجهتك التعليمية الجديدة
    </p>

    <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-2xl">
      الدراسة في ماليزيا
    </h1>

    <p className="text-white/70 text-xl leading-relaxed max-w-xl mb-10">
      اكتشف لماذا أصبحت ماليزيا واحدة من أفضل الوجهات الدراسية للطلاب الدوليين،
      بفضل جامعاتها المتميزة، وتكاليفها المناسبة، وجودة الحياة العالية.
    </p>

    <div className="flex  gap-4">

      <Link
        to="/apply"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-navy rounded-[10px] font-semibold hover:bg-accent transition-all"
      >
          قدم 
        <ArrowRight size={18} />
      </Link>

      <Link
        to="/universities"
        className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-[10px] font-semibold hover:bg-white/10 transition-all"
      >
         الجامعات
      </Link>

    </div>

  </div>

</section>

      {/* WHY MALAYSIA */}
    <section className="py-10 lg:py-32 bg-white">

  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <div className="text-center mb-10">

      <p className="text-xs font-semibold tracking-widest text-navy/50 mb-3">
        لماذا ماليزيا؟
      </p>

      <h2 className="text-3xl lg:text-5xl font-bold text-[#0d2b5e] leading-tight">
        لماذا تعد ماليزيا
        <br />
        الخيار الأفضل للدراسة؟
      </h2>

      <p className="text-muted text-lg mt-6 max-w-3xl mx-auto leading-8">
        تتميز ماليزيا بجامعاتها العالمية، وانخفاض تكاليف الدراسة والمعيشة،
        وبيئتها الآمنة والمتعددة الثقافات، مما يجعلها واحدة من أفضل الوجهات
        التعليمية للطلاب الدوليين.
      </p>

    </div>

    <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-6">

      {REASONS.map(({ title, desc }) => (

        <div
          key={title}
          className="p-8 rounded-[10p5] bg-surface border border-border hover:border-navy/20 hover:shadow-lg transition-all"
        >

          <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mb-5">
            <CheckCircle2 size={18} className="text-navy" />
          </div>

          <h3 className="text-xl font-bold text-ink mb-3">
            {title}
          </h3>

          <p className="text-muted leading-8">
            {desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* LIVING COSTS */}
     <section className="py-10 bg-white border-y border-border">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* النص */}
      <div>

        <p className="text-xs font-semibold tracking-widest text-navy/50 mb-3">
          تكاليف المعيشة
        </p>

        <h2 className="text-4xl font-bold text-[#0d2b5e] mb-4">
          تكلفة الدراسة والمعيشة في ماليزيا
        </h2>

        <p className="text-muted leading-8 mb-6">
          تُعد ماليزيا من أكثر الوجهات الدراسية المناسبة للطلاب من حيث
          التكاليف، حيث يمكن للطالب أن يعيش حياة مريحة في العاصمة كوالالمبور
          بميزانية شهرية تتراوح بين <span className="font-semibold">1200</span> و
          <span className="font-semibold">2000 رنجت ماليزي</span>، وتشمل السكن
          والطعام والمواصلات والاحتياجات الأساسية.
        </p>

        <div className="bg-accent rounded-2xl p-6">

          <p className="text-3xl font-bold text-navy">
            1200 – 2000 رنجت ماليزي
          </p>

          <p className="text-sm text-navy/70 mt-2">
            متوسط المصروفات الشهرية للطالب في كوالالمبور
          </p>

        </div>

      </div>

      {/* بطاقات التكاليف */}
      <div className="flex flex-col gap-5">

        {LIVING.map(({ category, items }) => (

          <div
            key={category}
            className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all"
          >

            <h3 className="font-bold text-lg text-ink mb-5">
              {category}
            </h3>

            <div className="flex flex-col gap-4">

              {items.map(({ label, price }) => (

                <div
                  key={label}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >

                  <span className="text-muted">
                    {label}
                  </span>

                  <span className="font-semibold text-navy">
                    {price}
                  </span>

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
    <section className="py-10 lg:py-32 bg-white" dir="rtl">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-16">
      <p className="text-xs font-semibold text-navy/50 mb-3">
        الحياة الطلابية
      </p>

      <h2 className="text-4xl font-bold text-ink">
        الحياة الطلابية في ماليزيا
      </h2>
    </div>

    <div className="grid lg:grid-cols-5 gap-5 auto-rows-[280px]">

      {/* البطاقة الكبيرة */}
      <div className="lg:col-span-3 rounded-3xl overflow-hidden relative group img-zoom">
        <img
          src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?w=900&h=560&fit=crop&auto=format"
          alt="طلاب في ماليزيا"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

        <div className="absolute bottom-6 right-6 text-right">
          <p className="text-white font-bold text-xl">
            مجتمع طلابي متنوع
          </p>

          <p className="text-white/80 text-sm mt-1">
            شارك في الأندية والأنشطة الطلابية والفعاليات الدولية، وكون صداقات
            مع طلاب من مختلف دول العالم.
          </p>
        </div>
      </div>

      {/* العمود الجانبي */}
      <div className="lg:col-span-2 flex flex-col gap-5">

        <div className="flex-1 rounded-3xl overflow-hidden relative img-zoom">
          <img
            src="https://images.unsplash.com/photo-1577931683033-1059552104e0?w=600&h=280&fit=crop&auto=format"
            alt="مدينة كوالالمبور"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

          <div className="absolute bottom-4 right-4 text-right">
            <p className="text-white font-bold">
              أسلوب حياة عصري
            </p>

            <p className="text-white/80 text-xs mt-1">
              استمتع بالحياة في كوالالمبور، مدينة تجمع بين الحداثة والثقافات
              المتنوعة والخدمات المتكاملة.
            </p>
          </div>
        </div>

        <div className="flex-1 rounded-3xl overflow-hidden relative img-zoom">
          <img
            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&h=280&fit=crop&auto=format"
            alt="حفل التخرج"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

          <div className="absolute bottom-4 right-4 text-right">
            <p className="text-white font-bold">
              مستقبل مهني واعد
            </p>

            <p className="text-white/80 text-xs mt-1">
              احصل على شهادة جامعية معترف بها دولياً وافتح أمامك فرص العمل
              والدراسات العليا في مختلف أنحاء العالم.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* FACTS */}
     <section className="py-10 bg-navy" dir="rtl">
  <div className="max-w-7xl mx-auto px-2 lg:px-8">
    <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-3">

      {[
        {
          icon: Cloud,
          title: 'مناخ  معتدل',
          desc: 'تتميز ماليزيا بطقس دافئ طوال العام بدرجات حرارة تتراوح بين 25 و32 درجة مئوية، مما يوفر بيئة   .',
        },
        {
          icon: ShieldCheck,
          title: 'الأمان والاستقرار',
          desc: 'تعد ماليزيا من أكثر الدول أماناً في جنوب شرق آسيا، وتوفر بيئة مستقرة ومناسبة للطلاب الدوليين.',
        },
        {
          icon: Wifi,
          title: 'إنترنت سريع',
          desc: 'تتوفر شبكات إنترنت عالية السرعة وخدمات Wi-Fi في الجامعات والسكنات الطلابية ومعظم الأماكن العامة.',
        },
        {
          icon: Bus,
          title: 'مواصلات حديثة',
          desc: 'تمتلك ماليزيا شبكة مواصلات متطورة تشمل قطارات MRT وLRT والمونوريل إضافة إلى خدمات   مثل ',
        },
        {
          icon: Utensils,
          title: ' المأكولات الحلال',
          desc: 'تضم ماليزيا آلاف المطاعم الحلال التي تقدم المأكولات الماليزية والعربية والعالمية بأسعار  .',
        },
        {
          icon: MapPin,
          title: 'موقع استراتيجي',
          desc: 'تعتبر ماليزيا بوابة إلى آسيا، حيث يسهل السفر منها إلى العديد من الدول عبر مطار كوالالمبور الدولي.',
        },
      ].map(({ icon: Icon, title, desc }) => (
       <div
  key={title}
  className="bg-white/5 rounded-[10px] p-5 border border-white/10 hover:bg-white/10 transition-colors text-center flex flex-col items-center"
>
  {/* Icon */}
  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
    <Icon size={24} className="text-accent-mid" />
  </div>

  {/* Title */}
  <h3 className="font-bold text-white text-[16px] mb-3">
    {title}
  </h3>

  {/* Description */}
  <p className="text-sm text-white/70 leading-6 max-w-[160px]">
    {desc}
  </p>
</div>
      ))}

    </div>
  </div>
</section>
    </div>
  )
}
