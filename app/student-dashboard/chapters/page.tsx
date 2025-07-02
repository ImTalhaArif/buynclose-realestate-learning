'use client';
import Header from '../../pages/components/Header';
import Footer from '../../pages/components/Footer';

export default function ChapterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Chapter Title</h2>

          {/* Toggle Menu */}
          <div className="flex gap-4 mb-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">PDF</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Video</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Audio</button>
          </div>

          {/* Embedded PDF */}
          <div className="w-full h-[80vh] border rounded overflow-hidden">
            <iframe
              src="/sample.pdf" // Put your actual PDF path here (e.g., /pdfs/ch1.pdf)
              width="100%"
              height="100%"
              className="border-none"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}