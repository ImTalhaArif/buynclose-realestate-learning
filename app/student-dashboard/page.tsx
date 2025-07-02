'use client';

import { useState } from 'react';

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

  const handleLogin = () => {
    if (email === 'johirving8383@gmail.com' && password === 'Tuneplay1!') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
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
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="BuyNClose Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-xl font-semibold text-blue-600">BuyNClose Portal</h1>
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">My Profile</a>
          <a href="#" className="hover:text-blue-600">Need Help?</a>
          <a href="#" className="hover:text-red-600">Log Out</a>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{course.category} | {course.level}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Progress: {course.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} BuyNClose Learning Portal. All rights reserved.
      </footer>
    </div>
  );
}
