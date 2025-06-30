'use client';

import { useState } from 'react';

export default function AdminUploadPage() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    video: null,
    thumbnail: null,
    pdf: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setCourseData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setCourseData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', courseData.title);
    formData.append('description', courseData.description);
    if(courseData.video)formData.append('video', courseData.video);
     if(courseData.thumbnail)formData.append('thumbnail', courseData.thumbnail);
     if(courseData.pdf)formData.append('pdf', courseData.pdf);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    alert(result.success ? '✅ Course uploaded!' : '❌ Upload failed');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Add New Course</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Course Title" required onChange={handleChange} />
        <br /><br />
        <textarea name="description" placeholder="Description" required onChange={handleChange}></textarea>
        <br /><br />
        <input name="video" type="file" accept="video/*" required onChange={handleChange} />
        <br /><br />
        <input name="thumbnail" type="file" accept="image/*" onChange={handleChange} />
        <br /><br />
        <input name="pdf" type="file" accept=".pdf" onChange={handleChange} />
        <br /><br />
        <button type="submit">Upload Course</button>
      </form>
    </div>
  );
}
