'use client';

import { useState } from 'react'; import Link from 'next/link';

const enrolledCourses = [ { title: 'Real Estate Masterclass 101', progress: 45, image: '/course1.jpg', duration: '1-3 Months', level: 'Beginner', }, { title: 'Advanced Investment Strategies', progress: 80, image: '/course2.jpg', duration: '3+ Months', level: 'Advanced', }, ];

export default function StudentDashboard() { const [menuOpen, setMenuOpen] = useState(false);

return ( <div className="min-h-screen flex flex-col"> {/* Header */} <header className="bg-white shadow-md sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"> <div className="flex items-center gap-2"> <img src="/page/components/logo.png" alt="BuyNclose Logo" className="w-10 h-10" /> <span className="text-xl font-bold text-blue-600">BuyNclose Portal</span> </div> <nav className="hidden md:flex gap-6 text-sm font-medium"> <Link href="/dashboard" className="hover:text-blue-600">Home</Link> <Link href="/profile" className="hover:text-blue-600">My Profile</Link> <Link href="/support" className="hover:text-blue-600">Need Help?</Link> <Link href="/logout" className="text-red-600 font-semibold">Log Out</Link> </nav> <div className="md:hidden"> <button onClick={() => setMenuOpen(!menuOpen)}> <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> </svg> </button> </div> </div> {menuOpen && ( <div className="md:hidden px-4 pb-4"> <Link href="/dashboard" className="block py-2">Home</Link> <Link href="/profile" className="block py-2">My Profile</Link> <Link href="/support" className="block py-2">Need Help?</Link> <Link href="/logout" className="block py-2 text-red-600">Log Out</Link> </div> )} </header>

{/* Main Content */}
  <main className="flex-1 px-4 md:px-10 py-8 bg-gray-50">
    <h1 className="text-2xl font-bold mb-6 text-center">🎓 My Enrolled Courses</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {enrolledCourses.map((course, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-4">
          <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-4">{course.title}</h2>
          <p className="text-sm text-gray-500">{course.level} | {course.duration}</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Progress: {course.progress}%</p>
          <Link
            href={`/course/${idx}`}
            className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md text-sm"
          >
            Resume Course
          </Link>
        </div>
      ))}
    </div>

    {enrolledCourses.length === 0 && (
      <p className="text-center text-gray-500 mt-10">You are not enrolled in any course yet.</p>
    )}
  </main>

  {/* Footer */}
  <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
    &copy; {new Date().getFullYear()} BuyNclose Learning Portal. All rights reserved.
  </footer>
</div>

); }


