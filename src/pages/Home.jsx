import { Link } from "react-router";
import { courses } from "../data/courses";

export default function Home() {
  const featuredCourses = courses
    .filter((course) => course.featured)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Kuasai Skill Baru <br />
            <span className="text-blue-600 italic">Tanpa Batas.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Platform edukasi nomor satu untuk lu yang mau mulai karir di dunia
            tech. Belajar langsung dari praktisi industri.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
            >
              Lihat Semua Kursus
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Featured Courses
              </h2>
              <p className="text-slate-500 mt-2">
                Kursus paling banyak dicari minggu ini.
              </p>
            </div>

            <Link
              to="/courses"
              className="hidden md:block text-sm font-bold text-blue-600 hover:underline"
            >
              Lihat semua →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => {
              const firstLetter = course.title.charAt(0);

              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="font-bold text-xl">{firstLetter}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600">
                    {course.title}
                  </h3>

                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex items-center text-xs font-black text-slate-400 tracking-widest uppercase">
                    Explore Course
                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
