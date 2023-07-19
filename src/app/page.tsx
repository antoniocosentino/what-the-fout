import { getStandardFonts } from "./utils/getStandardFonts";

export default function Home() {
  const standardFonts = getStandardFonts();

  return (
    <main className="min-h-screen p-24 flex flex-column justify-center">
      <div className="z-10 w-full max-w-5xl text-center">
        <h1 className="font-medium text-5xl">What the FOUT!</h1>
        <p className="font-mono my-8 text-left">
          A CSS playground for F-mods. This tool will help you find the right
          fallback for your font and tweak it in order to get the best possible
          results.
        </p>

        <div className="text-left my-10">
          <h2 className="font-medium text-2xl">Sample text</h2>
          <textarea
            className="w-full p-4 rounded my-2 focus:outline-none font-mono resize-none"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia hendrerit est, ut vulputate ipsum. Maecenas vel mollis ante.
            Mauris porta neque non blandit ultrices."
          ></textarea>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <div className="bg-slate-50 basis-1/2 p-6 rounded shadow-lg">
            <h2 className="font-medium text-2xl mb-5">Web Font</h2>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Font Family:
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="text"
                  list="google-fonts"
                  defaultValue="Whatever"
                />
                <datalist id="google-fonts">
                  <option>Roboto</option>
                  <option>Whatever</option>
                </datalist>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Font Size (px):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="14"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Line Height (px):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="17"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Font Weight:
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="400"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Letter Spacing (px):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="3"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Word Spacing (px):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="2"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 basis-1/2 p-4 rounded shadow-lg">
            <h2 className="font-medium text-2xl mb-5">Fallback font</h2>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Font family:
                </label>
              </div>
              <div className="w-2/4">
                <select
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                >
                  {standardFonts.map((font) => {
                    return <option key={font.id}>{font.fullName}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Size Adjust (%):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="2"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Ascent Override (%):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="2"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Descent Override (%):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="2"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-2/4">
                <label
                  className="block font-bold text-left mb-1 pr-4"
                  htmlFor="inline-full-name"
                >
                  Line Gap override (%):
                </label>
              </div>
              <div className="w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                  id="inline-full-name"
                  type="number"
                  defaultValue="2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
