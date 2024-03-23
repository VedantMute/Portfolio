import { Exo_2 } from 'next/font/google';

const roboto = Exo_2({
  weight: '400',
  subsets: ['latin'],
});

export default function Title({ hProp = 'About', sProp = 'Me' }) {
  return (
    <h1 className={`text-4xl sm:px-6 lg:px-3 md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl    capitalize sm:text-center lg:text-left ${roboto.className}`}>
          {hProp} <span className="text-slate-500">{sProp}</span>
    </h1> 
  );
}

