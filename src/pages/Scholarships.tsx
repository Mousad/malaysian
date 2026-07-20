import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle2, Award, BookOpen, Users, DollarSign } from 'lucide-react'


const SCHOLARSHIPS = [
  {
    name: 'منحة الحكومة الماليزية (MoHE)',
    provider: 'وزارة التعليم العالي الماليزية',
    type: 'منحة كاملة',
    coverage: 'تغطية كاملة للرسوم الدراسية + بدل معيشة شهري',
    amount: 'رسوم كاملة + بدل معيشة',
    deadline: '31 مارس 2025',

    eligibility: [
      'معدل أكاديمي ممتاز',
      'العمر أقل من 25 سنة',
      'إثبات الحاجة المالية',
      'سجل دراسي قوي'
    ],

    documents: [
      'جواز السفر',
      'الشهادات الأكاديمية',
      'كشف الحساب البنكي',
      'خطابات التوصية'
    ],

    universities: [
      'جامعة مالايا',
      'جامعة بوترا الماليزية',
      'جامعة كيبانغسان الماليزية'
    ],

    img:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&h=420&fit=crop&auto=format',

    color: 'bg-navy',
    badge: 'منحة كاملة',
  },


  {
    name: 'منحة التميز من جامعة تايلور',
    provider: 'جامعة تايلور الماليزية',
    type: 'منحة جزئية',

    coverage:
      'خصم من الرسوم الدراسية بنسبة تصل إلى 50%',

    amount:
      'خصم يصل إلى 50%',

    deadline:
      'التقديم مفتوح طوال العام',

    eligibility: [
      'نتائج دراسية جيدة',
      'إجادة اللغة الإنجليزية',
      'المشاركة في الأنشطة'
    ],

    documents: [
      'جواز السفر',
      'الشهادة الدراسية',
      'IELTS أو TOEFL'
    ],

    universities: [
      'جامعة تايلور'
    ],

    img:
      'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=700&h=420&fit=crop&auto=format',

    color: 'bg-slate-700',
    badge: 'حتى 50%',
  },


  {
    name: 'منحة التميز الدولية APU',

    provider:
      'جامعة آسيا والمحيط الهادئ',

    type:
      'منحة حسب الجدارة',

    coverage:
      'خصم من الرسوم الدراسية بين 10% و50%',

    amount:
      'خصم يصل إلى 50%',

    deadline:
      '30 أبريل 2025',

    eligibility: [
      'أداء أكاديمي متميز',
      'العمر أقل من 30 سنة',
      'اجتياز المقابلة الشخصية'
    ],

    documents: [
      'جواز السفر',
      'الشهادات الأكاديمية',
      'البيان الشخصي'
    ],

    universities: [
      'جامعة آسيا والمحيط الهادئ APU'
    ],

    img:
      'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=700&h=420&fit=crop&auto=format',

    color: 'bg-slate-800',
    badge: 'حسب الجدارة',
  },


  {
    name: 'منحة MARA',

    provider:
      'مجلس أمانة الشعب الماليزي',

    type:
      'منحة كاملة',

    coverage:
      'رسوم كاملة + سكن + تذاكر سفر + مخصص شهري',

    amount:
      'حزمة كاملة',

    deadline:
      '28 فبراير 2025',

    eligibility: [
      'متطلبات خاصة بالمتقدمين',
      'معدل تراكمي 3.5 أو أعلى',
      'برامج دراسية محددة',
      'العمر أقل من 23 سنة'
    ],

    documents: [
      'نموذج التقديم',
      'الهوية الشخصية',
      'النتائج الأكاديمية',
      'خطابات توصية'
    ],

    universities: [
      'عدة جامعات ماليزية'
    ],

    img:
      'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=700&h=420&fit=crop&auto=format',

    color: 'bg-navy-dark',
    badge: 'حزمة كاملة',
  },


]


export default function Scholarships() {

  const [selected, setSelected] =
    useState<typeof SCHOLARSHIPS[0] | null>(null)



  return (

    <div className="bg-white" dir="rtl">


      {/* HERO */}

     <section
  className="relative pt-32 pb-20 border-b border-border bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=900&fit=crop&auto=format')",
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80"></div>


  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">


    <div className="grid lg:grid-cols-2 gap-12 items-center">


      <div>


        <p className="text-xs font-semibold text-navy/50 mb-4">
          المنح الدراسية
        </p>


        <h1 className="text-4xl lg:text-6xl font-bold text-ink leading-tight mb-5">

           مستقبلك
          <br />

          التعليمي

        </h1>



        <p className="text-muted text-lg leading-relaxed mb-8">

          نساعدك في الوصول إلى أفضل فرص المنح الدراسية
          في الجامعات العالمية، مع توفير الدعم الكامل
          من التقديم حتى القبول.

        </p>



        <div className="flex gap-8">


          {[
            {
              value: '20+',
              label: 'منحة متاحة'
            },

            {
              value: '60%',
              label: 'طلاب يحصلون على دعم'
            },

            {
              value: '8M+ MYR',
              label: 'قيمة المنح'
            }

          ].map(({value,label})=>(


            <div key={label}>

              <p className="text-3xl font-bold text-navy">
                {value}
              </p>


              <p className="text-xs text-muted mt-1">
                {label}
              </p>


            </div>


          ))}


        </div>


      </div>


    </div>


  </div>


</section>
      {/* SCHOLARSHIPS GRID */}

      <section className="py-14 lg:py-24">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">


          <div className="grid lg:grid-cols-3 gap-6">


            {SCHOLARSHIPS.map((s) => (


              <div
                key={s.name}
                className="group bg-white rounded-[10px] overflow-hidden border border-border hover:border-navy/20 hover:shadow-xl transition-all flex flex-col"
              >


                {/* الصورة */}

                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 img-zoom">


                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />


                  <div
                    className={`absolute top-4 right-4 px-3 py-1.5 ${s.color} text-white text-xs font-bold rounded-full`}
                  >

                    {s.badge}

                  </div>


                </div>



                {/* المحتوى */}

                <div className="p-4 flex flex-col flex-1">


                  <p className="text-xs font-semibold text-muted mb-1">

                    {s.provider}

                  </p>



                  <h3 className="font-bold text-ink mb-3 leading-snug">

                    {s.name}

                  </h3>



                  




                  




                  <div className="flex items-center gap-2 mb-5">


                    <Calendar
                      size={13}
                      className="text-muted"
                    />


                    <span className="text-xs text-muted">

                      آخر موعد:
                      <span className="font-semibold text-ink mr-1">

                        {s.deadline}

                      </span>

                    </span>


                  </div>





                  <div className="mt-auto flex gap-3">


                    <button

                      onClick={() => setSelected(s)}

                      className="flex-1 px-2 py-2 border border-border rounded-[10px] text-sm font-medium text-ink hover:border-navy/30 hover:bg-surface transition-colors"

                    >

                      التفاصيل

                    </button>



                    <Link

                      to="/apply"

                      className="flex-1 px-4 py-2 bg-navy text-white rounded-[10px] text-sm font-semibold text-center hover:bg-navy-light transition-colors flex items-center justify-center gap-1.5"

                    >


                      تقديم

                      <ArrowLeft size={13} />


                    </Link>


                  </div>


                </div>



              </div>


            ))}


          </div>


        </div>


      </section>

      {/* MODAL */}

      {selected && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >


          <div

            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"

            onClick={(e) => e.stopPropagation()}

          >


            {/* الصورة */}

            <div className="aspect-video overflow-hidden rounded-t-3xl bg-slate-100">


              <img

                src={selected.img}

                alt={selected.name}

                className="w-full h-full object-cover"

              />


            </div>




            <div className="p-8">



              <p className="text-xs font-semibold text-muted mb-1">

                {selected.provider}

              </p>



              <h2 className="text-2xl font-bold text-ink mb-3">

                {selected.name}

              </h2>



              <p className="text-navy font-semibold mb-6">

                {selected.amount}

              </p>




              <div className="grid sm:grid-cols-2 gap-6 mb-6">



                {/* الشروط */}


                <div>


                  <h4 className="font-semibold text-ink mb-3 flex items-center gap-2">


                    <Users
                      size={15}
                      className="text-navy"
                    />


                    شروط القبول


                  </h4>



                  <ul className="flex flex-col gap-2">


                    {selected.eligibility.map((e) => (


                      <li

                        key={e}

                        className="flex items-start gap-2 text-sm text-muted"

                      >


                        <CheckCircle2

                          size={13}

                          className="text-navy mt-0.5 shrink-0"

                        />


                        {e}


                      </li>


                    ))}


                  </ul>


                </div>





                {/* المستندات */}


                <div>


                  <h4 className="font-semibold text-ink mb-3 flex items-center gap-2">


                    <BookOpen

                      size={15}

                      className="text-navy"

                    />


                    المستندات المطلوبة


                  </h4>



                  <ul className="flex flex-col gap-2">


                    {selected.documents.map((d) => (


                      <li

                        key={d}

                        className="flex items-start gap-2 text-sm text-muted"

                      >


                        <CheckCircle2

                          size={13}

                          className="text-navy mt-0.5 shrink-0"

                        />


                        {d}


                      </li>


                    ))}



                  </ul>


                </div>


              </div>







              {/* الجامعات */}


              <div className="mb-6">


                <h4 className="font-semibold text-ink mb-3 flex items-center gap-2">


                  <Award

                    size={15}

                    className="text-navy"

                  />


                  الجامعات المتاحة


                </h4>



                <div className="flex flex-wrap gap-2">


                  {selected.universities.map((u) => (


                    <span

                      key={u}

                      className="px-3 py-1.5 bg-accent text-navy text-xs font-medium rounded-full"

                    >


                      {u}


                    </span>


                  ))}


                </div>


              </div>







              {/* الفوتر */}


              <div className="flex items-center justify-between pt-5 border-t border-border">



                <div className="flex items-center gap-2 text-sm text-muted">


                  <Calendar size={13} />


                  آخر موعد:

                  <span className="font-semibold text-ink">

                    {selected.deadline}

                  </span>


                </div>





                <Link

                  to="/apply"

                  className="flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors"

                >


                  قدم الآن

                  <ArrowLeft size={14} />


                </Link>



              </div>



            </div>



          </div>


        </div>

      )}
      {/* CTA */}

     <section
  className="relative py-20 border-t border-border bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=700&fit=crop&auto=format')",
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-navy/70"></div>


  <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">


    <h2 className="text-3xl font-bold text-white mb-4">

      غير متأكد من المنحة المناسبة لك؟

    </h2>



    <p className="text-white/80 mb-8 leading-relaxed">

      فريق UniGuide يقدم لك تقييماً مجانياً
      لمساعدتك في اختيار أفضل منحة تناسب مؤهلاتك
      وطموحاتك الأكاديمية.

    </p>



    <Link

      to="/contact"

      className="inline-flex items-center gap-2 px-5 py-2 bg-white text-navy rounded-[10px] font-semibold text-sm hover:bg-gray-100 transition-colors"

    >

        استشارة مجانية

      <ArrowLeft size={15} />

    </Link>



  </div>


</section>



    </div>

  )

}