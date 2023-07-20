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
    <main className="min-h-screen p-24 flex flex-column justify-center">
      <div className="z-10 w-full max-w-5xl text-center">
        <h1 className="font-medium text-5xl">What the FOUT!</h1>
        <p className="my-8 text-left">
          A CSS playground for F-mods. This tool will help you find the right
          fallback for your font and tweak it in order to get the best possible
          results. If you want to know more about the problem and the proposed
          solution, check out{" "}
          <a
            className="underline text-teal-500 hover:text-teal-800"
            target="_blank"
            href="https://developer.chrome.com/blog/font-fallbacks/"
          >
            this article
          </a>
          .
        </p>
        <Interface
          googleFonts={googleFontResponse.items}
          standardFonts={standardFonts}
        />
      </div>
    </main>
  );
}
