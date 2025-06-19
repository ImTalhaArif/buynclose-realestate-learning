'use client';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

const courses = Array.from({ length: 20 }, (_, i) => ({
  title: `Real Estate Masterclass ${i + 1}`,
  provider: "BuyNclose",
  level: ["Beginner", "Intermediate", "Advanced"][i % 3],
  duration: ["1-4 Weeks", "1-3 Months", "3+ Months"][i % 3],
  category: ["Investment", "Management", "Finance"][i % 3],
  language: "English",
  image: `/course${(i % 3) + 1}.jpg`
}));

export default function Home() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) &&
    (level ? c.level === level : true) &&
    (duration ? c.duration === duration : true) &&
    (category ? c.category === category : true)
  );

  return (
    <div>
      <Header />

      {/* Main Section */}
      <div style={{ display: 'flex', padding: '40px', gap: '30px' }}>
        {/* Sidebar Filters */}
        <aside style={{ minWidth: '250px', borderRight: '1px solid #eee', paddingRight: '20px' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 600 }}>Filters</h3>

          <label style={{ display: 'block', margin: '15px 0 5px' }}>Level</label>
          <select value={level} onChange={e => setLevel(e.target.value)} style={{ width: '100%', padding: '8px' }}>
            <option value="">All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <label style={{ display: 'block', margin: '15px 0 5px' }}>Duration</label>
          <select value={duration} onChange={e => setDuration(e.target.value)} style={{ width: '100%', padding: '8px' }}>
            <option value="">All</option>
            <option>1-4 Weeks</option>
            <option>1-3 Months</option>
            <option>3+ Months</option>
          </select>

          <label style={{ display: 'block', margin: '15px 0 5px' }}>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '8px' }}>
            <option value="">All</option>
            <option>Investment</option>
            <option>Management</option>
            <option>Finance</option>
          </select>
        </aside>

        {/* Course Listings */}
        <section style={{ flex: 1 }}>
          {/* Search */}
          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '300px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {filtered.map((course, i) => (
              <div key={i} style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
              }}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <div style={{ padding: '15px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '5px' }}>{course.title}</h4>
                  <p style={{ margin: '2px 0', fontSize: '14px', color: '#555' }}>{course.provider}</p>
                  <p style={{ margin: '2px 0', fontSize: '13px', color: '#777' }}>Level: {course.level}</p>
                  <p style={{ margin: '2px 0', fontSize: '13px', color: '#777' }}>Duration: {course.duration}</p>
                  <p style={{ margin: '2px 0', fontSize: '13px', color: '#777' }}>Category: {course.category}</p>
                 import Link from 'next/link'; // ensure this is at the top

...

<Link
  href={`/signup?course=${encodeURIComponent(course.title)}`}
  style={{
    marginTop: '10px',
    display: 'inline-block',
    textAlign: 'center',
    padding: '8px',
    width: '100%',
    backgroundColor: '#0070f3',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px'
  }}
>
  Enroll Now
</Link>

                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <p style={{ marginTop: '30px', color: '#888', textAlign: 'center' }}>
              No courses found.
            </p>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
