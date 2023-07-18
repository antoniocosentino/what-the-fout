export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-column justify-center">
      <div className="z-10 w-full max-w-5xl text-center">
        <h1 className="font-medium text-5xl">What the FOUT!</h1>
        <p className="font-mono my-8 text-left">
          A playground for F-mods. This tool will help you find the right
          fallback for your font and tweak it in order to get the best possible
          results.
        </p>

        <div className="text-left my-10">
          <h2 className="font-medium text-2xl">Demo text</h2>
          <textarea className="w-full p-4 rounded my-2 focus:outline-none font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia hendrerit est, ut vulputate ipsum. Maecenas vel mollis ante.
            Mauris porta neque non blandit ultrices.
          </textarea>
        </div>

        <div className="flex flex-row place-content-around">
          <div>
            <h2 className="font-medium text-2xl">Web Font</h2>
          </div>

          <div>
            <h2 className="font-medium text-2xl">Fallback font</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
