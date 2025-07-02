'use client';

import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Link from 'next/link';

const topCourses = Array.from({ length: 5 }, (_, i) => ({
  title: `Real Estate Masterclass ${i + 1}`,
  provider: 'BuyNclose',
  level: ['Beginner', 'Intermediate', 'Advanced'][i % 3],
  duration: ['1-4 Weeks', '1-3 Months', '3+ Months'][i % 3],
  category: ['Investment', 'Management', 'Finance'][i % 3],
  language: 'English',
  image: `/course${(i % 3) + 1}.jpg`,
}));

export default function Dashboard() {
  return (
    <div>
      <Header />

      {/* Carousel Section */}
     <section className="w-full overflow-hidden relative">
  <div className="w-full h-64 sm:h-80 md:h-[400px] bg-gray-200 flex items-center justify-center overflow-x-auto space-x-4 p-4">
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE..." // your base64 string
      alt="Image 1"
      className="h-full object-cover rounded"
    />
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..." // another base64 string
      alt="Image 2"
      className="h-full object-cover rounded"
    />
    {/* Add more <img> tags if needed */}
  </div>
</section>
      {/* Introduction Section */}
      <section className="px-6 md:px-20 py-12 bg-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to BuyNclose Learning Portal</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Empowering aspiring and seasoned real estate professionals with top-quality masterclasses, expert guidance, and practical knowledge.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="px-6 md:px-20 py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry leaders with years of experience in real estate.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">Access anytime, anywhere with our online learning system.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Career Growth</h3>
            <p className="text-gray-600">Boost your knowledge and career with certified courses.</p>
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Top Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topCourses.map((course, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{course.provider}</p>
                <p className="text-sm text-gray-600 mb-1">Level: {course.level}</p>
                <p className="text-sm text-gray-600 mb-1">Duration: {course.duration}</p>
                <p className="text-sm text-gray-600 mb-3">Category: {course.category}</p>
                <Link
                  href={`/signup?course=${encodeURIComponent(course.title)}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}