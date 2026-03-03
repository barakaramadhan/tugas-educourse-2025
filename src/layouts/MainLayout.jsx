import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-white font-black text-sm">E</span>
            </div>
            <span className="text-slate-900 font-black tracking-tighter text-xl">
              EduCourse
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-bold transition-all rounded-xl ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-bold transition-all rounded-xl ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-bold transition-all rounded-xl ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-800 pb-12">
            <div>
              <h2 className="text-2xl font-black tracking-tighter mb-2">
                EduCourse.
              </h2>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Platform belajar masa kini buat lu yang mau jago tech tanpa pusing.
              </p>
            </div>

            <div className="flex md:justify-end gap-6 text-slate-400 text-sm font-bold">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            <p>© 2026 EDUCOURSE PROJECT. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}