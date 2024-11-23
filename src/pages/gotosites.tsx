'use client'
import 'tailwindcss/tailwind.css';

// Types
interface Site {
  name: string;
  url: string;
  description: string;
}

// Site Block Component
function SiteBlock({ site }: { site: Site }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-300 cursor-pointer group">
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">{site.name}</h3>
         
        </div>
        <p className="text-sm text-gray-400 mb-4">{site.url}</p>
        <p className="text-sm text-gray-300">{site.description}</p>
      </div>
    </div>
  )
}

// Main Go to Sites Component
function GotoSites() {
  const sites: Site[] = [
    {
      name: "Turfer",
      url: "https://turfer.netlify.app",
      description: "A modern turf booking platform with responsive design, advanced search filters, and real-time booking functionality.",
    },
    {
      name: "Civil Tech",
      url: "https://civiltech.netlify.app",
      description: "A knowledge-sharing hub for developers, offering solutions, tutorials, and resources for coding and development.",
    },
    {
      name: "SCOE Project",
      url: "https://project9112.netlify.app",
      description: "A comprehensive platform for student and faculty feedback. shhhh.....secret!",
    },
    {
      name: "BE Project Database",
      url: "https://n4qfppx0-5000.inc1.devtunnels.ms/",
      description: "A centralized database for final-year BE projects, offering a collaborative space for sharing and accessing project details.",
    },
    {
      name: "All Projects",
      url: "https://vedantmute.online/projects",
      description: "view my all ultimate projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-4">Go to Sites</h1>
        <p className="text-xl text-center text-gray-300 mb-8">
          Explore these popular sites developed by me as a webdev, that can create impact in real world!
        </p>
        <p className='text-[10px] text-center'>
          Actually, these websites are hosted on free hosting platforms like Netlify, Vercel, or Global Link. To ensure they are created by me, this page has been made.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sites.map((site) => (
            <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer">
              <SiteBlock site={site} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// Page Component
export default function Home() {
  return <GotoSites />
}

