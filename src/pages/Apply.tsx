import { useState, useRef } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  Upload,
  User,
  BookOpen,
  Building2,
  GraduationCap,
  Award,
  FileText,
  Eye,
} from "lucide-react";



/* خطوات التقديم */
const STEPS = [
  { id: 1, label: "البيانات الشخصية", icon: User },
  { id: 2, label: "المؤهل الدراسي", icon: BookOpen },
  { id: 3, label: "اختيار الجامعة", icon: Building2 },
  { id: 4, label: "اختيار التخصص", icon: GraduationCap },
  { id: 5, label: "المنحة الدراسية", icon: Award },
  { id: 6, label: "رفع المستندات", icon: FileText },
  { id: 7, label: "مراجعة الطلب", icon: Eye },
];

/* الجامعات */
const UNIVERSITIES = [
  "جامعة مالايا (UM)",
  "جامعة تايلور",
  "جامعة آسيا باسيفيك (APU)",
  "جامعة INTI الدولية",
  "جامعة بوترا ماليزيا (UPM)",
  "الجامعة الوطنية الماليزية (UKM)",
];

/* التخصصات */
const PROGRAMS: Record<string, string[]> = {
  "جامعة مالايا (UM)": [
    "علوم الحاسوب",
    "الطب",
    "القانون",
    "الهندسة",
    "إدارة الأعمال",
  ],

  "جامعة تايلور": [
    "إدارة الأعمال",
    "الهندسة المعمارية",
    "إدارة الضيافة",
    "التصميم والإعلام",
    "الهندسة",
  ],

  "جامعة آسيا باسيفيك (APU)": [
    "هندسة البرمجيات",
    "تقنية معلومات الأعمال",
    "الأمن السيبراني",
    "المحاسبة",
    "التصميم",
  ],

  "جامعة INTI الدولية": [
    "علوم الحاسوب",
    "إدارة الأعمال",
    "الهندسة",
    "الصيدلة",
    "المحاسبة",
  ],

  "جامعة بوترا ماليزيا (UPM)": [
    "الزراعة",
    "الطب البيطري",
    "الهندسة",
    "العلوم",
    "الاقتصاد",
  ],

  "الجامعة الوطنية الماليزية (UKM)": [
    "الطب",
    "طب الأسنان",
    "الهندسة",
    "القانون",
    "التربية",
  ],
};

/* المنح الدراسية */
const SCHOLARSHIPS_LIST = [
  "منحة الحكومة الماليزية",
  "منحة التميز بجامعة تايلور",
  "منحة التميز بجامعة APU",
  "منحة MARA",
  "منحة INTI للقبول المبكر",
  "منحة التبادل الثقافي",
  "لا أرغب في التقديم على منحة حالياً",
];

/* المستندات المطلوبة */
const DOCUMENTS = [
  {
    id: "passport",
    label: "جواز السفر (ساري المفعول)",
    required: true,
  },
  {
    id: "certificates",
    label: "الشهادة الدراسية",
    required: true,
  },
  {
    id: "transcript",
    label: "كشف الدرجات",
    required: true,
  },
  {
    id: "english",
    label: "شهادة اللغة الإنجليزية (IELTS / TOEFL)",
    required: false,
  },
  {
    id: "photo",
    label: "صورة شخصية",
    required: true,
  },
];

/* بيانات النموذج */
interface FormData {
  // البيانات الشخصية
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  dob: string;
  gender: string;

  // المؤهل الدراسي
  currentLevel: string;
  graduationYear: string;
  gpa: string;
  englishLevel: string;

  // الجامعة
  university: string;

  // التخصص
  program: string;
  intake: string;

  // المنحة
  scholarship: string;

  // المستندات
  uploadedDocs: Record<string, boolean>;
}

const EMPTY: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  nationality: "سوداني",
  dob: "",
  gender: "",

  currentLevel: "",
  graduationYear: "",
  gpa: "",
  englishLevel: "",

  university: "",
  program: "",
  intake: "",

  scholarship: "",

  uploadedDocs: {},
};

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="text-right">
      <label className="block text-xs font-semibold text-muted mb-2">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>

      <input
        dir="rtl"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink placeholder:text-muted focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="text-right">
      <label className="block text-xs font-semibold text-muted mb-2">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>

      <select
        dir="rtl"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-ink focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/10 transition"
      >
        <option value="">اختر...</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Apply() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<FormData>(EMPTY)
  const topRef = useRef<HTMLDivElement>(null)

  const set = (field: keyof FormData) => (value: string) => setData({ ...data, [field]: value })
  const toggleDoc = (id: string) => setData({ ...data, uploadedDocs: { ...data.uploadedDocs, [id]: !data.uploadedDocs[id] } })

  const next = () => {
    if (step < 7) {
      setStep(step + 1)
      topRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setSubmitted(true)
    }
  }
  const back = () => {
    if (step > 1) {
      setStep(step - 1)
      topRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const programs = data.university ? PROGRAMS[data.university] ?? [] : []

 if (submitted) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="max-w-lg w-full text-center">

        {/* أيقونة النجاح */}
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} className="text-white" />
        </div>

        {/* العنوان */}
        <h1 className="text-3xl font-bold text-ink mb-3">
          تم إرسال طلبك بنجاح
        </h1>

        {/* الرسالة */}
        <p className="text-muted leading-relaxed mb-2">
          شكراً لك <strong>{data.firstName} {data.lastName}</strong>،
          لقد استلمنا طلب التقديم الخاص بك.
        </p>

        <p className="text-muted text-sm leading-relaxed mb-8">
          سيقوم أحد أعضاء فريقنا بمراجعة طلبك والتواصل معك عبر البريد الإلكتروني
          <strong> {data.email} </strong>
          خلال 48 ساعة لإكمال إجراءات القبول.
        </p>

        {/* ملخص الطلب */}
        <div className="bg-white rounded-2xl border border-border p-6 mb-8 text-right">

          <p className="text-xs font-semibold text-muted mb-4">
            ملخص الطلب
          </p>

          {[
            {
              label: "اسم المتقدم",
              value: `${data.firstName} ${data.lastName}`,
            },
            {
              label: "الجامعة",
              value: data.university,
            },
            {
              label: "التخصص",
              value: data.program,
            },
            {
              label: "المنحة",
              value: data.scholarship || "لم يتم اختيار منحة",
            },
            {
              label: "موعد الدراسة",
              value: data.intake,
            },
          ].map(({ label, value }) =>
            value ? (
              <div
                key={label}
                className="flex justify-between items-center py-2 border-b border-border last:border-0"
              >
                <span className="text-sm font-semibold text-ink">
                  {value}
                </span>

                <span className="text-sm text-muted">
                  {label}
                </span>
              </div>
            ) : null
          )}
        </div>

        {/* رقم الطلب */}
        <p className="text-xs text-muted">
          رقم الطلب:
          <span className="font-bold text-navy">
            {" "}
            MPE-{Date.now().toString().slice(-8)}
          </span>
        </p>

      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-surface pt-18" ref={topRef}>
      {/* HEADER */}
      <div className="bg-[white] border-b border-border fixed top-1 left-0 right-0 z-50" dir="rtl">
  <div className="max-w-3xl mx-auto px-0 py-8">

   

    {/* الخطوات */}
    <div className="flex items-center gap-0 overflow-x-auto pb-1">

      {STEPS.map(({ id, label, icon: Icon }, i) => (
        <div key={id} className="flex items-center shrink-0">

          <div className="flex flex-col items-center gap-4">

            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                id < step
                  ? 'bg-navy text-[#0d2b5e]'
                  : id === step
                  ? 'bg-navy text-white ring-0 ring-navy/20'
                  : 'bg-border text-muted'
              }`}
            >
              {id < step ? <CheckCircle2 size={12} /> : <Icon size={12} />}
            </div>

            <span
              className={`text-xs hidden sm:block whitespace-nowrap ${
                id === step
                  ? 'font-semibold text-navy'
                  : 'text-[#0d2b5e]'
              }`}
            >
              {label}
            </span>

          </div>

          {i < STEPS.length - 1 && (
            <div
              className={`h-px w-4 sm:w-12 mx-1 mb-1 transition-colors ${
                id < step ? 'bg-[#0d2b5e]' : 'bg-border'
              }`}
            />
          )}

        </div>
      ))}

    </div>
  </div>
</div>

      {/* FORM BODY */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl border border-border p-8 lg:p-10">

          {/* Step 1 — Personal */}
         {step === 1 && (
  <div>
    <h2 className="text-2xl font-bold text-ink mb-1">
      المعلومات الشخصية
    </h2>

   

    <div className="grid sm:grid-cols-2 gap-5">

      <Input
        label="الاسم الأول"
        value={data.firstName}
        onChange={set('firstName')}
        placeholder="أحمد"
        required
      />

      <Input
        label="اسم العائلة"
        value={data.lastName}
        onChange={set('lastName')}
        placeholder="الرشيد"
        required
      />

      <Input
        label="البريد الإلكتروني"
        type="email"
        value={data.email}
        onChange={set('email')}
        placeholder="ahmed@example.com"
        required
      />

      <Input
        label="رقم الهاتف / واتساب"
        value={data.phone}
        onChange={set('phone')}
        placeholder="+249 91 ..."
        required
      />

      <Select
        label="الجنسية"
        value={data.nationality}
        onChange={set('nationality')}
        options={[
          'سوداني',
          'مصري',
          'سعودي',
          'عربي آخر',
          'أخرى'
        ]}
        required
      />

      <Input
        label="تاريخ الميلاد"
        type="date"
        value={data.dob}
        onChange={set('dob')}
        required
      />

      <Select
        label="الجنس"
        value={data.gender}
        onChange={set('gender')}
        options={[
          'ذكر',
          'أنثى',
          'أفضل عدم التحديد'
        ]}
        required
      />

    </div>
  </div>
)}

        {/* Step 2 — Academic */}
{step === 2 && (
  <div>

    <h2 className="text-2xl font-bold text-ink mb-1">
      المعلومات الأكاديمية
    </h2>

    <p className="text-muted text-sm mb-8">
      ساعدنا في اختيار البرنامج المناسب حسب خلفيتك الدراسية.
    </p>

    <div className="grid sm:grid-cols-2 gap-5">

      <Select
        label="المستوى التعليمي الحالي"
        value={data.currentLevel}
        onChange={set('currentLevel')}
        options={[
          'الثانوية العامة',
          'الدبلوم',
          'البكالوريوس (للتقديم على الماجستير)',
          'السنة التأسيسية',
          'A-Level'
        ]}
        required
      />

      <Select
        label="سنة التخرج"
        value={data.graduationYear}
        onChange={set('graduationYear')}
        options={[
          '2024',
          '2023',
          '2022',
          '2021',
          '2020',
          'قبل ذلك'
        ]}
        required
      />

      <Select
        label="المعدل / التقدير"
        value={data.gpa}
        onChange={set('gpa')}
        options={[
          'ممتاز (90% فأعلى)',
          'جيد جداً (80–89%)',
          'جيد (70–79%)',
          'مقبول (60–69%)',
          'أقل من 60%'
        ]}
        required
      />

      <Select
        label="مستوى اللغة الإنجليزية"
        value={data.englishLevel}
        onChange={set('englishLevel')}
        options={[
          'IELTS 7.0 فأعلى',
          'IELTS 6.0–6.5',
          'IELTS 5.0–5.5',
          'TOEFL 90 فأعلى',
          'TOEFL 70–89',
          'لا يوجد شهادة حالياً',
          'متحدث أصلي / مستوى متقدم جداً'
        ]}
        required
      />

    </div>

  </div>
)}

        {/* Step 3 — University */}
{step === 3 && (
  <div>

    <h2 className="text-2xl font-bold text-ink mb-1">
      اختيار الجامعة
    </h2>

    <p className="text-muted text-sm mb-8">
      اختر الجامعة التي تفضلها. سنبدأ بالتقديم على جامعة واحدة أولاً، ويمكنك إضافة المزيد لاحقاً.
    </p>

    <div className="grid sm:grid-cols-2 gap-4">

      {UNIVERSITIES.map((u) => (
        <button
          key={u}
          type="button"
          onClick={() => setData({ ...data, university: u, program: '' })}
          className={`p-5 rounded-2xl border-2 text-right transition-all ${
            data.university === u
              ? 'border-navy bg-navy/5 shadow-md'
              : 'border-border hover:border-navy/30 hover:bg-surface'
          }`}
        >

          <div className="flex items-start gap-3">

            <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center text-xs font-bold text-navy shrink-0">
              {u.split(' ').map((w) => w[0]).join('').slice(0, 3)}
            </div>

            <div>
              <p
                className={`font-semibold text-sm ${
                  data.university === u
                    ? 'text-navy'
                    : 'text-ink'
                }`}
              >
                {u}
              </p>
            </div>

          </div>

          {data.university === u && (
            <div className="flex justify-end mt-2">
              <CheckCircle2 size={16} className="text-navy" />
            </div>
          )}

        </button>
      ))}

    </div>

  </div>
)}

  {/* Step 4 — Program */}
{step === 4 && (
  <div>

    <h2 className="text-2xl font-bold text-ink mb-1">
      اختيار البرنامج الدراسي
    </h2>

    <p className="text-muted text-sm mb-8">
      البرامج المتاحة في <strong>{data.university || 'الجامعة المختارة'}</strong>.
    </p>

    <div className="grid sm:grid-cols-2 gap-3 mb-6">

      {programs.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => setData({ ...data, program: p })}
          className={`p-4 rounded-2xl border-2 text-right text-sm font-medium transition-all flex items-center justify-between ${
            data.program === p
              ? 'border-navy bg-navy/5 text-navy'
              : 'border-border text-ink/70 hover:border-navy/30'
          }`}
        >

          {p}

          {data.program === p && (
            <CheckCircle2
              size={15}
              className="text-navy shrink-0"
            />
          )}

        </button>
      ))}

    </div>

    <Select
      label="موعد بدء الدراسة المفضل"
      value={data.intake}
      onChange={set('intake')}
      options={[
        'سبتمبر 2025',
        'يناير 2026',
        'مارس 2026',
        'يوليو 2026',
        'سبتمبر 2026'
      ]}
      required
    />

  </div>
)}

        {/* Step 5 — Scholarship */}
{step === 5 && (
  <div>

    <h2 className="text-2xl font-bold text-ink mb-1">
      خيارات المنح الدراسية
    </h2>

    <p className="text-muted text-sm mb-8">
      اختر المنحة التي ترغب في التقديم لها، وسنقوم بتقييم مدى أهليتك.
    </p>

    <div className="flex flex-col gap-3">

      {SCHOLARSHIPS_LIST.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => setData({ ...data, scholarship: s })}
          className={`p-5 rounded-2xl border-2 text-right text-sm transition-all flex items-center justify-between ${
            data.scholarship === s
              ? 'border-navy bg-navy/5'
              : 'border-border hover:border-navy/30'
          }`}
        >

          <div>

            <p
              className={`font-semibold ${
                data.scholarship === s
                  ? 'text-navy'
                  : 'text-ink'
              }`}
            >
              {s}
            </p>

            {s !== 'غير مهتم بالمنح الدراسية في الوقت الحالي' && (
              <p className="text-xs text-muted mt-0.5">
                سيتم تقييم أهليتك أثناء الاستشارة
              </p>
            )}

          </div>

          {data.scholarship === s && (
            <CheckCircle2
              size={16}
              className="text-navy shrink-0 mr-3"
            />
          )}

        </button>
      ))}

    </div>

  </div>
)}

        {/* Step 6 — Documents */}
{step === 6 && (
  <div>

    <h2 className="text-2xl font-bold text-ink mb-1">
      رفع المستندات
    </h2>

    <p className="text-muted text-sm mb-8">
      قم برفع المستندات المطلوبة. الملفات المقبولة PDF أو JPG أو PNG، بحد أقصى 10MB لكل ملف.
    </p>

    <div className="flex flex-col gap-4">

      {DOCUMENTS.map(({ id, label, required }) => (
        <div
          key={id}
          onClick={() => toggleDoc(id)}
          className={`group relative flex items-center gap-4 p-5 rounded-2xl border-2 border-dashed cursor-pointer transition-all ${
            data.uploadedDocs[id]
              ? 'border-navy bg-navy/5'
              : 'border-border hover:border-navy/40 hover:bg-surface'
          }`}
        >

          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              data.uploadedDocs[id]
                ? 'bg-navy text-white'
                : 'bg-surface text-muted'
            }`}
          >
            {data.uploadedDocs[id] 
              ? <CheckCircle2 size={18} /> 
              : <Upload size={18} />
            }
          </div>

          <div className="flex-1">

            <p
              className={`font-semibold text-sm ${
                data.uploadedDocs[id]
                  ? 'text-navy'
                  : 'text-ink'
              }`}
            >
              {label}

              {required && (
                <span className="text-red-400 mr-1">
                  *
                </span>
              )}

            </p>

            <p className="text-xs text-muted mt-0.5">
              {data.uploadedDocs[id]
                ? 'تم الرفع ✓'
                : 'اضغط لرفع الملف'
              }
            </p>

          </div>

        </div>
      ))}

    </div>

    <p className="text-xs text-muted mt-5">
      يمكنك أيضاً إرسال المستندات عبر واتساب أو البريد الإلكتروني بعد إرسال الطلب. سنقوم بإرشادك خلال الخطوات.
    </p>

  </div>
)}

          {/* Step 7 — Review */}
{step === 7 && (
  <div>

    <h2 className="text-2xl font-bold text-ink mb-1">
      مراجعة طلبك
    </h2>

    <p className="text-muted text-sm mb-8">
      يرجى مراجعة بياناتك قبل إرسال الطلب.
    </p>

    <div className="flex flex-col gap-4">

      {[
        {
          title: 'المعلومات الشخصية',
          items: [
            ['الاسم', `${data.firstName} ${data.lastName}`],
            ['البريد الإلكتروني', data.email],
            ['رقم الهاتف', data.phone],
            ['الجنسية', data.nationality],
          ],
        },

        {
          title: 'الخلفية الأكاديمية',
          items: [
            ['المستوى التعليمي', data.currentLevel],
            ['سنة التخرج', data.graduationYear],
            ['المعدل', data.gpa],
            ['اللغة الإنجليزية', data.englishLevel],
          ],
        },

        {
          title: 'الجامعة والبرنامج المختار',
          items: [
            ['الجامعة', data.university],
            ['البرنامج الدراسي', data.program],
            ['موعد بدء الدراسة', data.intake],
          ],
        },

        {
          title: 'المنحة الدراسية',
          items: [
            ['الاختيار', data.scholarship || 'لا يوجد'],
          ],
        },

      ].map(({ title, items }) => (

        <div
          key={title}
          className="bg-surface rounded-2xl border border-border p-5"
        >

          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">
            {title}
          </p>

          <div className="flex flex-col gap-2">

            {items.map(([label, value]) =>
              value ? (
                <div
                  key={label}
                  className="flex justify-between items-center gap-4"
                >

                  <span className="text-sm text-muted shrink-0">
                    {label}
                  </span>

                  <span className="text-sm font-medium text-ink text-right">
                    {value}
                  </span>

                </div>
              ) : null
            )}

          </div>

        </div>

      ))}

    </div>


    <div className="mt-6 p-5 bg-accent rounded-2xl border border-accent-mid/30">

      <p className="text-sm text-navy/80 leading-relaxed">
        عند إرسال هذا الطلب، فإنك توافق على أن تقوم UniGuide بالتواصل معك لمناقشة طلبك والخطوات القادمة. 
        يتم الحفاظ على معلوماتك بسرية تامة ولن يتم استخدامها إلا لغرض متابعة طلب الدراسة.
      </p>

    </div>

  </div>
)}

          {/* Navigation */}
<div className="flex items-center justify-between mt-8 pt-6 border-t border-border">

  <button
    onClick={back}
    disabled={step === 1}
    className="px-5 py-3 rounded-[10px] text-sm font-medium text-ink/60 hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-border hover:border-navy/30"
  >
    السابق
  </button>


  <div className="flex items-center gap-3">



    <button
      onClick={next}
      className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-[10px] text-sm font-semibold hover:bg-navy-light transition-colors"
    >

      {step === 7 ? 'إرسال الطلب' : 'متابعة'}

   <ChevronLeft size={15} />
    </button>

  </div>

</div>
        </div>
      </div>
    </div>
  )
}
