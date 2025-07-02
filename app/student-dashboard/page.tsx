'use client';

import { useEffect, useState } from 'react';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';
import Link from 'next/link';

const enrolledCourses = [
  {
    title: 'Real Estate Masterclass: Basics to Pro',
    progress: 45,
    category: 'Investment',
    level: 'Intermediate',
    image: '/course1.jpg',
  },
  {
    title: 'Property Management Essentials',
    progress: 80,
    category: 'Management',
    level: 'Advanced',
    image: '/course2.jpg',
  },
];

export default function StudentDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  useEffect(() => {
    const session = sessionStorage.getItem('loggedIn');
    if (session === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (email === 'johirving8383@gmail.com' && password === 'Tuneplay1!') {
      sessionStorage.setItem('loggedIn', 'true');
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  const toggleChapters = (index: number) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Student Login</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <button
                onClick={() => toggleChapters(index)}
                className="text-left w-full"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {course.category} | {course.level}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Progress: {course.progress}%
                  </p>
                </div>
              </button>

              {/* Chapter Dropdown */}
              {expandedCourse === index && (
                <div className="bg-gray-100 p-4 border-t">
                  <h4 className="font-semibold mb-2 text-sm">Chapters</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 12 }, (_, i) => (
                     <Link
                        key={i}
                        href={`/student-dashboard/chapters?course=${encodeURIComponent(
                          course.title
                        )}&chapter=${i + 1}`}
                      >
                        <button className="text-sm bg-white border rounded px-3 py-1 hover:bg-blue-100">
                          Chapter {i + 1}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}