import { useState } from "react";
import { Link } from "react-router";
import { courses } from "../data/courses";

export default function Courses() {
  const [searchCategory, setSearchCategory] = useState("");

  const filteredCourses = courses.filter(function(course) {
    return course.category
      .toLowerCase()
      .includes(searchCategory.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#fafafa] py-16 px-6">
      <div className="max-w-6xl mx-auto mb-16">

        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          Learning Path 2024
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Explore Our <span className="text-blue-600">Courses.</span>
            </h1>

            <p className="mt-4 text-slate-500 max-w-xl text-lg">
              Gak perlu ribet, pilih materi yang lu mau dan mulai belajar sekarang juga.
            </p>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search category..."
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(function(course) {
          return (
            <Link
              key={course.id}
              to={"/courses/" + course.id}
              className="group relative flex flex-col justify-between bg-white border border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)]"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h2>

                <p className="text-slate-500 text-sm mb-4">
                  {course.description}
                </p>

                <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
            </Link>
          );
        })}

        {filteredCourses.length === 0 && (
          <p className="text-slate-500 col-span-full">
            No courses found for that category.
          </p>
        )}
      </div>
    </div>
  );
}