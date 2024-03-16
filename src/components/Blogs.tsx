import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  cover: string;
  published_at: string;
  title: string;
  summary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ cover, published_at, title, summary }) => {
  return (
    <div className="flex p-px flex-col bg-gray-100 dark:bg-slate-950 group border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex rounded-[7px] bg-gray-300 dark:bg-gray-700">
        <Image
          width={1000}
          height={600}
          src={cover}
          className="rounded-[7px] aspect-[4/2.8] w-full object-cover"
          alt="image article"
        />
      </div>
      <div className="flex flex-col p-5 relative space-y-4">
        <Link href="#" passHref>
          <p className="text-xl/tight font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">
            {title}
          </p>
        </Link>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">{summary}</p>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-18 0h.008v.008H3v-.008zM6 15h.008v.008H6V15zm0 2.25h.008v.008H6v-.008zM9 15h.008v.008H9V15zm0 2.25h.008v.008H9v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM15 15h.008v.008H15V15zm0 2.25h.008v.008H15v-.008zM18 15h.008v.008H18V15zm0 2.25h.008v.008H18v-.008zm-2.25-4.5h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zm-2.25-4.5h.008v.008H12v-.008zm0 2.25h.008v.008H12v-.008zm0 2.25h.008v.008H12v-.008zm-2.25-4.5h.008v.008H9v-.008zm0 2.25h.008v.008H9v-.008zm0 2.25h.008v.008H9v-.008z"
            />
          </svg>
          <span>{published_at}</span>
        </div>
      </div>
    </div>
  );
};

const posts = [
  {
    id: 1,
    cover: "/images/working-on-housing-project.jpg",
    published_at: "Jun 12, 2021",
    title: "How to Structure your ReactJs Application like a Legend",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum ",
  },
  {
    id: 2,
    cover: "/images/working-on-housing-project.jpg",
    published_at: "Jun 12, 2021",
    title: "You're probably fetching data in the wrong way",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum ",
  },
];

const Blogs = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white capitalize">
            Most recent Articles
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
          Captivating visuals and engaging content, our Blogs section invites you to explore, learn, and grow. Fuel your passion for discovery and stay informed with our latest insights. Dive in and discover a world of endless possibilities!





          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-t-lg">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
          <div className="sm:col-span-2 lg:col-span-1 p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 dark:bg-slate-950 flex flex-col space-y-6 relative">
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40"></div>
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40"></div>
            <div className="lg:h-full flex flex-col items-center text-center justify-center space-y-5 mx-auto max-w-2xl">
              <h1 className="font-bold text-gray-900 dark:text-white text-3xl">
                Join Me on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 dark:from-blue-300 dark:to-violet-400">
                  Medium
                </span>{" "}
                for more.
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, rem eius dicta
              </p>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="px-6 py-3 border rounded-lg border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3"
          >
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
