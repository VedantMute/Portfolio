import Image from "next/image";
import Link from "next/link";
import { Exo_2 } from 'next/font/google';

const roboto = Exo_2({
  weight: '400',
  subsets: ['latin'],
});
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
        <Link href="https://medium.com/@TheVedant" passHref>
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
    cover: "/github_blogs.jpeg",
    published_at: "Mar 8, 2024",
    title: "How to setup GitHub from your pc full guide",
    summary:
      "This guide should help you set up GitHub on your PC and start collaborating on projects or managing your own code repositories ",
  },
  {
    id: 2,
    cover: "/led_arduino.jpeg",
    published_at: "Mar 10, 2024",
    title: "Controlling an LED over Wi-Fi with ESP8266 and Arduino",
    summary:
      "In this blog post, we’ll explore how to control an LED using the ESP8266 Wi-Fi module and Arduino. This project will all ",
  },
];

const Blogs = () => {
  return (
    <section className="py-20  bg-black">
      <div className="max-w-7xl mx-auto px-5 py-10 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className={`text-5xl font-bold text-gray-900 dark:text-white capitalize  ${roboto.className}`}>
            Most recent  <span className="text-slate-500"> Articles</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Captivating visuals and engaging content, our Blogs section invites you to explore, learn, and grow. Fuel your passion for discovery and stay informed with our latest insights.
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
                Follow Me on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 dark:from-blue-300 dark:to-violet-400">
                  Medium
                </span>{" "}
                for more.
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                <button className="font-bold border rounded bg-gray-950 hover:bg-slate-700 md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-light text-xs  w-fit mx-auto ">
                  <Link href="https://medium.com/@TheVedant">Join Now</Link>
                </button>
              </p>

            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://medium.com/@TheVedant"
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
