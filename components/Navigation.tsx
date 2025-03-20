"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mb-10 flex justify-end items-center">
      <Link
        href="/tutorial"
        className="px-5 py-2.5 rounded-lg font-medium transition-all duration-200 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
        Tutorial
      </Link>
    </nav>
  );
}
