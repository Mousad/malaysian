import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown, ArrowRight,  } from 'lucide-react'

const FAQS = [
  {
    category: 'القبول الجامعي',
    items: [
      {
        q: 'ما هي متطلبات الدراسة في ماليزيا؟',
        a: 'تختلف المتطلبات حسب الجامعة والتخصص، ولكن بشكل عام تحتاج إلى شهادة الثانوية أو آخر مؤهل دراسي، وجواز سفر ساري المفعول، وإثبات إجادة اللغة الإنجليزية في بعض الجامعات. يقوم فريق UniGuide بتقييم ملفك واختيار الجامعات المناسبة لك.',
      },
      {
        q: 'هل يمكنني التقديم بدون شهادة IELTS؟',
        a: 'نعم، العديد من الجامعات الماليزية توفر اختبار لغة داخلي أو برامج لغة إنجليزية تغني عن شهادة IELTS. سنساعدك في اختيار الجامعة المناسبة حسب مستواك.',
      },
      {
        q: 'كم تستغرق إجراءات القبول؟',
        a: 'عادةً تستغرق إجراءات القبول من 4 إلى 8 أسابيع حسب الجامعة، ثم تستغرق إجراءات التأشيرة من 4 إلى 6 أسابيع أخرى. لذلك ننصح ببدء التقديم قبل موعد الدراسة بعدة أشهر.',
      },
      {
        q: 'هل يمكنني التقديم لأكثر من جامعة في نفس الوقت؟',
        a: 'نعم، بل ننصح بذلك لزيادة فرص القبول. يقوم فريق UniGuide بإدارة جميع طلبات التقديم ومتابعتها دون أي تعقيدات.',
      },
    ],
  },

  {
    category: 'المنح الدراسية',
    items: [
      {
        q: 'هل يمكنني الحصول على منحة دراسية كاملة؟',
        a: 'نعم، توجد منح حكومية ومنح مقدمة من الجامعات الماليزية تغطي الرسوم الدراسية بالكامل أو جزءاً منها، وقد تشمل أيضاً مخصصاً شهرياً. نقوم بتقييم أهليتك ومساعدتك في التقديم.',
      },
      {
        q: 'متى يجب أن أبدأ التقديم على المنح؟',
        a: 'يفضل البدء قبل موعد الدراسة بحوالي 6 أشهر، لأن بعض المنح لها مواعيد محددة بينما تظل منح أخرى مفتوحة طوال العام.',
      },
      {
        q: 'هل يجب أن أكون من الطلاب المتفوقين للحصول على منحة؟',
        a: 'ليس بالضرورة، فبعض المنح تعتمد على التفوق الأكاديمي، بينما تعتمد منح أخرى على النشاطات، والوضع المالي، والدافع الشخصي للطالب.',
      },
    ],
  },

  {
    category: 'التأشيرة',
    items: [
      {
        q: 'كيف يتم استخراج التأشيرة الدراسية الماليزية؟',
        a: 'بعد الحصول على القبول الجامعي يتم تقديم طلب التأشيرة عبر منصة EMGS، ثم تصدر موافقة التأشيرة، وبعد الوصول إلى ماليزيا يتم استكمال إجراءات ختم التأشيرة. يتولى فريقنا جميع هذه الخطوات نيابةً عنك.',
      },
      {
        q: 'ما نسبة نجاح استخراج التأشيرة؟',
        a: 'تصل نسبة نجاح طلبات التأشيرة التي يقدمها فريقنا إلى أكثر من 98%، حيث نحرص على مراجعة جميع المستندات قبل التقديم لتجنب أي أخطاء.',
      },
      {
        q: 'هل الفحص الطبي إلزامي؟',
        a: 'نعم، تشترط الحكومة الماليزية إجراء الفحص الطبي في أحد المراكز المعتمدة قبل إصدار التأشيرة، وسنرشدك إلى المركز المناسب.',
      },
    ],
  },

  {
    category: 'الرسوم والتكاليف',
    items: [
      {
        q: 'هل الاستشارة مجانية؟',
        a: 'نعم، الاستشارة الأولى مجانية بالكامل، حيث نقوم بتقييم حالتك والإجابة على جميع استفساراتك دون أي رسوم.',
      },
      {
        q: 'كم تبلغ الرسوم الدراسية في الجامعات الماليزية؟',
        a: 'تختلف الرسوم حسب الجامعة والتخصص، حيث تبدأ من حوالي 10,000 رنجيت ماليزي سنوياً في الجامعات الحكومية، ومن 18,000 رنجيت في الجامعات الخاصة.',
      },
      {
        q: 'كيف يمكنني دفع الرسوم الدراسية؟',
        a: 'يتم دفع الرسوم عادةً بالرنغيت الماليزي، وسنساعدك في اختيار أفضل وأقل تكلفة لتحويل الأموال إلى ماليزيا.',
      },
    ],
  },

  {
    category: 'الحياة في ماليزيا',
    items: [
      {
        q: 'هل ماليزيا آمنة للطلاب؟',
        a: 'نعم، تعتبر ماليزيا من أكثر الدول أماناً في آسيا، وتستقبل آلاف الطلاب الدوليين سنوياً، كما يوجد بها جاليات عربية وسودانية كبيرة.',
      },
      {
        q: 'هل يمكنني العمل أثناء الدراسة؟',
        a: 'نعم، يسمح للطلاب الدوليين بالعمل بدوام جزئي وفق القوانين الماليزية، وسنقدم لك الإرشادات اللازمة حول ذلك.',
      },
      {
        q: 'هل الطعام الحلال متوفر؟',
        a: 'بالتأكيد، ماليزيا دولة إسلامية وتنتشر فيها المطاعم الحلال في جميع المدن والجامعات والأسواق.',
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

    {/* النص */}
    <div className="text-right">
      <p className="text-xs font-semibold tracking-widest text-navy/50 mb-4">
        الأسئلة الشائعة
      </p>

      <h1 className="text-4xl lg:text-6xl font-bold text-[#0d2b5e] leading-tight mb-5">
        إجابات لجميع
        <br />
        استفساراتك
      </h1>

      <p className="text-muted text-lg leading-8 mb-8">
        جمعنا أكثر الأسئلة التي يطرحها الطلاب حول الدراسة في ماليزيا،
        بدءًا من شروط القبول والتقديم، مرورًا بالتأشيرة والمنح الدراسية،
        وحتى السكن والحياة الطلابية.
      </p>

      <a
        href="https://wa.me/249912345678"
        className="inline-flex items-center gap-2 px-7 py-2 bg-[#00c950] text-[#f8fafc] rounded-[10px] font-semibold hover:bg-[#123b7a] transition-all"
      >
        <FaWhatsapp size={22} className="text-[#f8fafc]" />
           واتساب
      </a>
    </div>

    {/* الإحصائيات */}
    <div className="hidden lg:grid grid-cols-2 gap-4">

      {[
        {
          value: '+50',
          label: 'سؤال تمت الإجابة عنه',
        },
        {
          value: '24 ساعة',
          label: 'متوسط وقت الرد',
        },
        {
          value: '5★',
          label: 'تقييم خدمة العملاء',
        },
        {
          value: 'مجانًا',
          label: 'الاستشارة الأولى',
        },
      ].map(({ value, label }) => (
        <div
          key={label}
          className="bg-white rounded-2xl p-6 border border-border text-center shadow-sm hover:shadow-lg transition-all"
        >
          <p className="text-3xl font-bold text-navy">
            {value}
          </p>

          <p className="text-sm text-muted mt-2">
            {label}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* FAQ */}
    <section className="py-10 lg:py-24" dir="rtl">
  <div className="max-w-5xl mx-auto px-2 lg:px-8">

    {/* أزرار التصنيفات */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {FAQS.map(({ category }) => (
        <button
          key={category}
          onClick={() => setOpenCategory(category)}
          className={`px-5 py-2 rounded-[10px] text-[10px] font-semibold transition-all ${
            openCategory === category
              ? 'bg-navy text-white'
              : 'bg-surface border border-border text-ink hover:border-navy hover:text-navy'
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* الأسئلة */}
    {FAQS.filter((g) => g.category === openCategory).map(({ items }) => (
      <div key={openCategory} className="flex flex-col gap-4">

        {items.map(({ q, a }) => (
          <div
            key={q}
            className="border border-border rounded-[10px] overflow-hidden bg-white hover:border-navy/20 transition-all duration-300"
          >

            <button
              onClick={() => setOpenItem(openItem === q ? null : q)}
              className="w-full flex items-center justify-between gap-1 p-3 text-right hover:bg-surface/60 transition-colors"
            >

              <span className="font-bold text-ink text-[14px] leading-7">
                {q}
              </span>

              <ChevronDown
                size={20}
                className={`text-navy shrink-0 transition-transform duration-300 ${
                  openItem === q ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openItem === q && (
              <div className="px-6 pb-6 border-t border-border bg-surface/30">
                <p className="text-muted leading-8 pt-5 text-[15px]">
                  {a}
                </p>
              </div>
            )}

          </div>
        ))}

      </div>
    ))}

  </div>
</section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-20 bg-surface border-t border-border" dir="rtl">
  <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">

    <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold mb-5">
      نحن هنا لمساعدتك
    </span>

    <h2 className="text-3xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
      ما زالت لديك أسئلة؟
    </h2>

    <p className="text-muted text-lg leading-8 mb-10">
      فريق <span className="font-semibold text-navy">UniGuide</span> جاهز للإجابة على جميع استفساراتك حول الدراسة في ماليزيا،
      القبول الجامعي، المنح الدراسية، والتأشيرة. يمكنك حجز استشارة مجانية أو التواصل معنا مباشرة عبر واتساب.
    </p>

    <div className="flex  sm:flex-row-reverse gap-4 justify-center">

      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-8 py-2 rounded-[10px]  bg-navy text-white font-semibold hover:bg-[#123b7a] transition-all"
      >
         استشارة 
        <ArrowRight size={18} />
      </Link>

      <a
        href="https://wa.me/249912345678"
        className="inline-flex items-center justify-center gap-2 px-8 py-2 rounded-[10px] bg-[#00c950] border border-border text-[#f8fafc] font-medium hover:border-navy hover:bg-white transition-all"
      >
<FaWhatsapp className="text-[20px] text-[#f8fafc]" />          واتساب
      </a>

    </div>

  </div>
</section>
    </div>
  )
}
