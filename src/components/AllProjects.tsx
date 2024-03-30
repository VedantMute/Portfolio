import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard: React.FC<Project> = ({ imageUrl, title, description, href }) => {
  return (
    <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-slate-950 border border-gray-200 dark:border-gray-800 space-y-6">
      <div style={{ height: "150px" }}>
        <Image src={imageUrl} alt="project cover" width={1300} height={1000} className="w-full rounded object-cover" />
      </div>
      <div className="flex flex-col justify-end space-y-5 text-gray-300">
        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
        <div className="w-max">
          <Link href={href} className="group flex items-center gap-x-3 text-gray-800 dark:text-gray-200 font-medium border-b border-gray-300 dark:border-gray-700">
            View details
            <span className="duration-300 ease-linear group-hover:pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const AllProjects = () => {
  const projects = [
    {
      imageUrl: "/portfolio_projects.png",
      title: "My Portfolio website",
      description: "Built using Next.js, Tailwind CSS for rapid styling , and  components from Acertinity UI for enhanced visual appeal and functionality",
      href: "https://vdantmute.netlify.app", // Example href
    },
    {
      imageUrl: "/sdcllp_projects.png",
      title: "Business website for Company",
      description: "Created a business website using ReactJS for a company to showcase their projects and enhance business relations.",
      href: "https://sahyadri-llp.netlify.app", // Example href
    },
    {
      imageUrl: "/resume_site.png",
      title: "Make My Resume",
      description: "Create a resume just by editing the template and download it as a pdf.",
      href: "https://makemyresume.netlify.app", // Example href
    },
    {
      imageUrl: "https://github.com/Vedant-edu/Invoice-Maker/raw/master/data-input.png",
      title: "Invoice Maker",
      description: "This site collects customer information along with item descriptions and prices, and generates a PDF invoice for it. ",
      href: "https://github.com/VedantMute/Invoice-Maker", // Example href
    },
    {
      imageUrl: "/bank.png",
      title: "Bank Management System",
      description: "This Java-based banking application manages account operations with Swing GUI and OTP authentication via SMS for secure login.",
      href: "#", // Example href
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 dark:bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl space-y-3">
          <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
            Take a look at our amazing works
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          <div className="dark:text-gray-700">More Listing soon.....</div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
