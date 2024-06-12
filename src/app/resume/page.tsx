import React from 'react'
import Head from 'next/head';

const page = () => {
    const pdfUrl = '/resume.pdf';
  return (
    <>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <iframe
          src={pdfUrl}
          className="w-full max-w-4xl h-[80vh] border-2 border-gray-300 mb-4"
          title="Resume"
        ></iframe>
        <a
          href={pdfUrl}
          download
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Download Resume
        </a>
      </div>
    </>
  )
}

export default page