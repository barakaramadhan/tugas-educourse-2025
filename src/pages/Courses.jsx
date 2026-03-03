import { Link } from "react-router";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-16 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          Learning Path 2024
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Explore Our <span className="text-blue-600">Courses.</span>
        </h1>

        <p className="mt-4 text-slate-500 max-w-xl text-lg ">
          Gak perlu ribet, pilih materi yang lu mau dan mulai belajar sekarang juga.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {courses.map(function(course) {
          return (
            <Link
              key={course.id}
              to={"/courses/" + course.id}
              className="group relative flex flex-col justify-between bg-white border border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-blue-600 transition-colors">
                    {course.title.charAt(0)}
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Instructor
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      {course.instructor}
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h2>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {course.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1,2,3].map(function(i) {
                    return (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
                    );
                  })}
                </div>

                <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  START LEARNING <span className="text-base">→</span>
                </span>
              </div>
            </Link>
          );
        })}

      </div>
    </div>
  );
}