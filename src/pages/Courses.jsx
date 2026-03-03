import { useState } from "react";
import { Link } from "react-router";
import { courses } from "../data/courses";

export default function Courses() {
  const [searchCategory, setSearchCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCourses = courses.filter(function(course) {
    return course.category
      .toLowerCase()
      .includes(searchCategory.toLowerCase());
  });

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#fafafa] py-16 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Explore Our <span className="text-blue-600">Courses.</span>
            </h1>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search category..."
              value={searchCategory}
              onChange={(e) => {
                setSearchCategory(e.target.value);
                setVisibleCount(3);
              }}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleCourses.map(function(course) {
          return (
            <Link
              key={course.id}
              to={"/courses/" + course.id}
              className="group bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-500 transition"
            >
              <h2 className="text-xl font-bold mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                {course.description}
              </p>
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                {course.category}
              </span>
            </Link>
          );
        })}
      </div>

      {visibleCount < filteredCourses.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount(visibleCount + 6)}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}