'use client';

import { useState } from 'react'; import Header from '../pages/components/Header'; import Footer from '../pages/components/Footer'; import Link from 'next/link';

const courses = Array.from({ length: 20 }, (_, i) => ({ title: `Real Estate Masterclasses ${i + 1}`, provider: "BuyNclose", level: ["Beginner", "Intermediate", "Advanced"][i % 3], duration: ["1-4 Weeks", "1-3 Months", "3+ Months"][i % 3], category: ["Investment", "Management", "Finance"][i % 3], language: "English", image: /course${(i % 3) + 1}.jpg }));

export default function Home() { const [search, setSearch] = useState(""); const [level, setLevel] = useState(""); const [duration, setDuration] = useState(""); const [category, setCategory] = useState("");

const filtered = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) && (level ? c.level === level : true) && (duration ? c.duration === duration : true) && (category ? c.category === category : true) );

return ( <div className="min-h-screen flex flex-col"> <Header />

<main className="flex-1 px-4 md:px-10 py-8">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 border border-gray-200 rounded-md p-4">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        <label className="block mb-1">Level</label>
        <select value={level} onChange={e => setLevel(e.target.value)} className="w-full p-2 mb-4 border rounded">
          <option value="">All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label className="block mb-1">Duration</label>
        <select value={duration} onChange={e => setDuration(e.target.value)} className="w-full p-2 mb-4 border rounded">
          <option value="">All</option>
          <option>1-4 Weeks</option>
          <option>1-3 Months</option>
          <option>3+ Months</option>
        </select>

        <label className="block mb-1">Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 border rounded">
          <option value="">All</option>
          <option>Investment</option>
          <option>Management</option>
          <option>Finance</option>
        </select>
      </aside>

      {/* Course Listings */}
      <section className="flex-1">
        {/* Search */}
        <div className="text-right mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-80 p-2 border rounded"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-base font-semibold mb-1">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.provider}</p>
                <p className="text-xs text-gray-500">Level: {course.level}</p>
                <p className="text-xs text-gray-500">Duration: {course.duration}</p>
                <p className="text-xs text-gray-500 mb-2">Category: {course.category}</p>

                <Link
                  href={`/signup?course=${encodeURIComponent(course.title)}`}
                  className="block w-full text-center py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-gray-500">No courses found.</p>
        )}
      </section>
    </div>
  </main>

  <Footer />
</div>

); }

