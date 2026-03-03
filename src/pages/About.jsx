export default function About() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="flex justify-center mb-6">
          <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-indigo-100">
            Since 2024
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 text-center tracking-tighter mb-8">
          We build <span className="text-indigo-600">future</span> talent.
        </h1>

        <p className="text-xl text-slate-500 text-center leading-relaxed max-w-2xl mx-auto mb-12">
          EduCourse adalah platform belajar yang fokus pada skill praktis. Gak cuma teori, kita pengen lu langsung bisa praktek dan dapet kerja.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-slate-100">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-slate-900">10K+</h4>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">
              Students
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-slate-900">50+</h4>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">
              Expert Mentors
            </p>
          </div>

          <div className="text-center col-span-2 md:col-span-1">
            <h4 className="text-3xl font-bold text-slate-900">100%</h4>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">
              Online
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm italic">
            "Belajar itu investasi, bukan beban." — Tim EduCourse
          </p>
        </div>
      </div>
    </div>
  );
}