import { Interface } from "./components/Interface";
import { GoogleFontResponse } from "./types";
import { getStandardFonts } from "./utils/getStandardFonts";

const getGoogleFonts = async (): Promise<GoogleFontResponse> => {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const res = await fetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const standardFonts = getStandardFonts();

  const googleFontResponse = await getGoogleFonts();

  return (
    <main className="min-h-screen p-6 md:p-12 flex flex-column justify-center">
      <div className="z-10 w-full max-w-none md:max-w-5xl text-center">
        <h1 className="font-medium text-5xl">What the FOUT! 🤌</h1>
        <p className="my-8 text-left">
          A CSS playground for <code>size-adjust</code> and F-mods (font metric
          overrides). It will help you find the right fallback for your font and
          tweak it in order to get the best possible results. If you want to
          know more about the problem and the proposed solution, check out{" "}
          <a
            className="underline text-sky-500 hover:text-sky-700 transition-colors"
            target="_blank"
            href="https://javascript.plainenglish.io/font-fallbacks-with-almost-no-headache-758fef3f4c32"
          >
            this article
          </a>
          .
        </p>
        <Interface
          googleFonts={googleFontResponse.items}
          standardFonts={standardFonts}
        />
        <div className="mt-8 text-sm text-slate-600 text-left md:text-center leading-6">
          Made by&nbsp;
          <a
            className="border-b-2 border-slate-600 border-dotted"
            target="_blank"
            href="https://antoniocosentino.com"
          >
            Antonio Cosentino
          </a>{" "}
          &copy; 2023 ·<br className="md:hidden" />
          <span className="hidden md:inline-block">&nbsp;</span>
          Built with Next.js & Tailwind CSS ·
          <br className="md:hidden" />
          <span className="hidden md:inline-block">&nbsp;</span>
          <a
            target="_blank"
            href="https://github.com/antoniocosentino/what-the-fout"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Github"
              className="w-3 h-3 inline-block bottom-0.5 relative"
              src="https://antoniocosentino.github.io/what-the-fout/github.svg"
            />
          </a>
          &nbsp;
          <a
            className="border-b-2 border-slate-600 border-dotted"
            target="_blank"
            href="https://github.com/antoniocosentino/what-the-fout"
          >
            Source Code
          </a>
        </div>
      </div>
    </main>
  );
}
