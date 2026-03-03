import { useParams } from "react-router";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const params = useParams();
  const id = params.id;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl font-medium text-slate-400">
          Course tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
        {course.title}
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed mb-10 border-l-4 border-blue-500 pl-4">
        {course.description}
      </p>

      <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-slate-400 mb-6">
        Kurikulum Materi
      </h3>

      <ul className="space-y-3">
        {course.lessons.map((lesson, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-default group"
          >
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {index + 1}
            </span>

            <span className="font-semibold text-slate-700 group-hover:text-slate-900">
              {lesson}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}