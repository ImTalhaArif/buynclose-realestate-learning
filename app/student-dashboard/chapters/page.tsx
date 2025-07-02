"use client";

import { useSearchParams } from "next/navigation"; import { useState } from "react";

export default function ChapterPage() { const searchParams = useSearchParams(); const chapter = searchParams.get("chapter") || "1"; const course = searchParams.get("course") || "Real Estate Masterclass";

const [view, setView] = useState("pdf"); // 'pdf', 'video', or 'audio'

const renderContent = () => { switch (view) { case "video": return ( <div className="w-full aspect-video bg-black text-white flex items-center justify-center"> <p className="text-center">Video player will appear here</p> </div> ); case "audio": return ( <div className="w-full p-4 bg-gray-100 text-center"> <p>Audio player will appear here</p> </div> ); case "pdf": default: return ( <iframe src={/pdfs/${course}-chapter-${chapter}.pdf} className="w-full h-[80vh] border rounded-md" title={Chapter ${chapter} PDF} /> ); } };

return ( <div className="p-6 max-w-6xl mx-auto"> <h1 className="text-2xl font-bold mb-4"> {course} - Chapter {chapter} </h1>

{/* View toggle */}
  <div className="flex gap-4 mb-6">
    {[
      { id: "pdf", label: "PDF" },
      { id: "video", label: "Video" },
      { id: "audio", label: "Audio" },
    ].map((item) => (
      <button
        key={item.id}
        className={`px-4 py-2 rounded-md border ${
          view === item.id
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
        onClick={() => setView(item.id)}
      >
        {item.label}
      </button>
    ))}
  </div>

  {renderContent()}
</div>

); }


