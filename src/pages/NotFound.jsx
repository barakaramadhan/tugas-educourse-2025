export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      
      {/* Ghost Icon */}
      <div className="mb-6">
        <svg
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* kepala */}
          <path d="M12 2a7 7 0 0 0-7 7v11l2-1 2 1 2-1 2 1 2-1 2 1V9a7 7 0 0 0-7-7z" />
          
          {/* mata */}
          <circle cx="9" cy="10" r="0.5" fill="gray" />
          <circle cx="15" cy="10" r="0.5" fill="gray" />

          {/* mulut */}
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-4xl font-semibold text-gray-600 mb-2">
        Whoops!
      </h1>

      <p className="text-gray-400 mb-6">
        We couldn't find the page you were looking for.
      </p>

      {/* Back button */}
      <a
        href="/"
        className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        Back Home
      </a>
    </div>
  );
}