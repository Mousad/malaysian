import { useState } from 'react'
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-white" dir="rtl">

      {/* HERO */}
      <section 
  className="pt-30 pb-7 border-b border-border relative overflow-hidden"
  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/45/8c/7c/458c7c9a826c5f0a424ddd52c887e668.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0d2b5e]/60"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="max-w-xl">

      <p className="text-xs font-semibold text-[#ffffff] mb-4">
        تواصل معنا
      </p>

      <h1 className="text-4xl lg:text-6xl font-bold text-[#ffffff] tracking-tight leading-tight mb-5">
        نحن هنا لمساعدتك
      </h1>

      <p className="text-[#ffffff] text-lg leading-relaxed">
        سواء كان لديك سؤال، تحتاج إلى استشارة، أو ترغب في بدء رحلتك التعليمية،
        فريقنا جاهز للتواصل معك ومساعدتك.
      </p>

    </div>

  </div>
</section>


      <section className="py-16 lg:py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12">


          {/* معلومات التواصل */}
          <div className="lg:col-span-2 flex flex-col gap-6">


          {[
  {
    icon: FaWhatsapp,
    label: 'واتساب',
    primary: '+60 11-1100 0635',
    secondary: 'متاح من الأحد إلى الخميس، 9 صباحاً - 9 مساءً',
    href: 'https://wa.me/249912345678',
    cta: 'راسلنا',
    color: 'text-[#25D366]',
  },

  {
    icon: FaPhoneAlt,
    label: 'الهاتف',
    primary: '+60 11-1100 0635',
    secondary: 'المكتب:+60 11-1100 0635  ',
    href: 'tel:+60 11-1100 0635',
    cta: 'اتصل الآن',
    color: 'text-[#0d2b5e]',
  },

  {
    icon: MdEmail,
    label: 'البريد الإلكتروني',
    primary: 'info@mpe-edu.com',
    secondary: 'نرد خلال 24 ساعة',
    href: 'mailto:info@mpe-edu.com',
    cta: 'إرسال بريد',
    color: 'text-red-500',
  },
].map(({ icon: Icon, label, primary, secondary, href, cta }) => (

              <a
                key={label}
                href={href}
                className="group flex items-start gap-4 p-6 bg-surface rounded-2xl border border-border hover:border-navy/20 hover:shadow-md transition-all"
              >

                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-navy" />
                </div>


                <div className="flex-1">

                  <p className="text-xs font-semibold text-muted mb-1">
                    {label}
                  </p>

                  <p className="font-bold text-ink mt-1">
                    {primary}
                  </p>

                  <p className="text-xs text-muted mt-0.5">
                    {secondary}
                  </p>

                </div>


                <span className="text-navy text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity self-center">
                  {cta} ←
                </span>

              </a>

            ))}
            {/* المكتب */}
            <div className="p-6 bg-surface rounded-2xl border border-border">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-navy" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted">
                    المكتب
                  </p>

                  <p className="font-bold text-ink">
                    الخرطوم، السودان
                  </p>
                </div>

              </div>


              <p className="text-sm text-muted leading-relaxed">
                شارع 21، مربع 15
                <br />
                حي العمارات
                <br />
                الخرطوم، السودان
              </p>

            </div>



            {/* ساعات العمل */}
            <div className="p-6 bg-navy rounded-2xl">

              <div className="flex items-center gap-3 mb-4">

                <Clock size={18} className="text-white/60" />

                <p className="font-semibold text-white">
                  ساعات العمل
                </p>

              </div>


              <div className="flex flex-col gap-2">

                {[
                  { 
                    day: 'الأحد - الخميس', 
                    hours: '9:00 صباحاً - 9:00 مساءً' 
                  },

                  { 
                    day: 'السبت', 
                    hours: '10:00 صباحاً - 4:00 مساءً' 
                  },

                  { 
                    day: 'الجمعة', 
                    hours: 'مغلق' 
                  },

                ].map(({ day, hours }) => (

                  <div 
                    key={day} 
                    className="flex justify-between text-sm"
                  >

                    <span className="text-white/60">
                      {day}
                    </span>

                    <span 
                      className={`font-medium ${
                        hours === 'مغلق'
                          ? 'text-white/30'
                          : 'text-white'
                      }`}
                    >
                      {hours}
                    </span>

                  </div>

                ))}

              </div>

            </div>


          </div>
                    {/* النموذج */}
          <div className="lg:col-span-3">

            <div className="bg-surface rounded-3xl border border-border p-8 lg:p-10">

              {sent ? (

                <div className="flex flex-col items-center justify-center py-16 text-center">

                  <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-5">
                    <CheckCircle2 size={28} className="text-navy" />
                  </div>


                  <h3 className="text-2xl font-bold text-ink mb-3">
                    تم إرسال الرسالة!
                  </h3>


                  <p className="text-muted max-w-xs">
                    شكراً لتواصلك معنا. سيقوم أحد أعضاء فريقنا بالرد عليك خلال 24 ساعة.
                  </p>


                  <button

                    onClick={() => { 
                      setSent(false); 
                      setForm({ 
                        name: '', 
                        email: '', 
                        phone: '', 
                        subject: '', 
                        message: '' 
                      }) 
                    }}

                    className="mt-8 px-5 py-2.5 border border-border rounded-xl text-sm text-ink hover:border-navy/30 transition-colors"
                  >
                    إرسال رسالة أخرى
                  </button>

                </div>


              ) : (

                <>

                  <h2 className="text-2xl font-bold text-ink mb-2">
                    أرسل لنا رسالة
                  </h2>


                  <p className="text-muted text-sm mb-8">
                    املأ النموذج وسنقوم بالرد عليك خلال 24 ساعة.
                  </p>



                  <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-5"
                  >


                    <div className="grid sm:grid-cols-2 gap-5">


                      {/* الاسم */}
                      <div>

                        <label className="block text-xs font-semibold text-muted mb-2">
                          الاسم الكامل *
                        </label>


                        <input

                          required

                          value={form.name}

                          onChange={(e) =>
                            setForm({ 
                              ...form, 
                              name: e.target.value 
                            })
                          }

                          placeholder="أحمد الرشيد"

                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"

                        />

                      </div>



                      {/* البريد */}
                      <div>

                        <label className="block text-xs font-semibold text-muted mb-2">
                          البريد الإلكتروني *
                        </label>


                        <input

                          required

                          type="email"

                          value={form.email}

                          onChange={(e) =>
                            setForm({ 
                              ...form, 
                              email: e.target.value 
                            })
                          }

                          placeholder="ahmed@example.com"


                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"

                        />

                      </div>


                    </div>
                                        <div className="grid sm:grid-cols-2 gap-5">


                      {/* الهاتف */}
                      <div>

                        <label className="block text-xs font-semibold text-muted mb-2">
                          رقم الهاتف / واتساب
                        </label>


                        <input

                          value={form.phone}

                          onChange={(e) =>
                            setForm({
                              ...form,
                              phone: e.target.value
                            })
                          }

                          placeholder="+249 91 ..."


                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"

                        />

                      </div>



                      {/* نوع الطلب */}
                      <div>

                        <label className="block text-xs font-semibold text-muted mb-2">
                          نوع الطلب *
                        </label>


                        <select

                          required

                          value={form.subject}

                          onChange={(e) =>
                            setForm({
                              ...form,
                              subject: e.target.value
                            })
                          }


                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"

                        >

                          <option value="">
                            اختر نوع الطلب
                          </option>

                          <option>
                            القبول الجامعي
                          </option>

                          <option>
                            الإرشاد والتقديم على المنح
                          </option>

                          <option>
                            تأشيرة الطالب
                          </option>

                          <option>
                            السكن الجامعي
                          </option>

                          <option>
                            استفسار عام
                          </option>


                        </select>

                      </div>


                    </div>



                    {/* الرسالة */}
                    <div>

                      <label className="block text-xs font-semibold text-muted mb-2">
                        الرسالة *
                      </label>


                      <textarea

                        required

                        rows={5}

                        value={form.message}

                        onChange={(e) =>
                          setForm({
                            ...form,
                            message: e.target.value
                          })
                        }


                        placeholder="أخبرنا عن وضعك، أهدافك الدراسية، وكيف يمكننا مساعدتك..."


                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition resize-none"

                      />


                    </div>



                    {/* زر الإرسال */}
                    <button

                      type="submit"

                      className="w-full flex items-center justify-center gap-2 py-4 bg-navy text-white rounded-2xl font-semibold text-sm hover:bg-navy-light transition-colors mt-2"

                    >

                      <Send size={15} />

                      إرسال الرسالة

                    </button>



                  </form>


                </>

              )}

            </div>

          </div>

        </div>

      </section>
            {/* الخريطة */}
      <section className="h-80 relative overflow-hidden border-t border-border bg-slate-100">

        <img
          src="https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1800&h=400&fit=crop&auto=format"
          alt="موقع المكتب في الخرطوم"
          className="w-full h-full object-cover opacity-60"
        />


        <div className="absolute inset-0 flex items-center justify-center">

          <div className="bg-white/90 backdrop-blur rounded-2xl px-8 py-6 shadow-xl text-center">

            <MapPin 
              size={20} 
              className="text-navy mx-auto mb-2" 
            />


            <p className="font-bold text-ink">
              مكتب UniGuide - الخرطوم
            </p>


            <p className="text-sm text-muted">
              شارع 21، حي العمارات، الخرطوم، السودان
            </p>


          </div>

        </div>

      </section>


    </div>
  )
}