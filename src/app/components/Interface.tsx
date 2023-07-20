"use client";
import { useState } from "react";
import { GoogleFonts, StandardFonts } from "../types";
import { getDummyText } from "../utils/getDummyText";
import { Helmet } from "react-helmet";

type InterfaceProps = {
  googleFonts: GoogleFonts;
  standardFonts: StandardFonts;
};

const DEFAULT_GOOGLE_FONT = "Roboto";

export const Interface = (props: InterfaceProps) => {
  const { googleFonts, standardFonts } = props;

  const [sampleText, setSampleText] = useState(getDummyText());

  // UI settings
  const [fontName, setFontName] = useState(DEFAULT_GOOGLE_FONT);
  const [fontSize, setFontSize] = useState(22);
  const [lineHeight, setLineHeight] = useState(27);
  const [fontWeight, setFontWeight] = useState("normal");
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [wordSpacing, setWordSpacing] = useState(0);

  const handleTextareaType = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSampleText(event.target.value);
  };

  return (
    <>
      <Helmet>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${fontName}`}
        />
      </Helmet>
      <div className="text-left my-10">
        <h2 className="font-medium text-2xl">Sample text</h2>
        <textarea
          className="w-full p-4 rounded my-2 focus:outline-none font-mono resize-none"
          placeholder={getDummyText()}
          onChange={handleTextareaType}
        ></textarea>
      </div>

      <div className="flex flex-row justify-between gap-4">
        <div className="bg-slate-50 basis-1/2 p-6 rounded shadow-lg">
          <h2 className="font-medium text-2xl mb-5">Web Font</h2>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Font Family:
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="text"
                list="google-fonts"
                defaultValue={DEFAULT_GOOGLE_FONT}
                onChange={(e) => setFontName(e.target.value)}
              />
              <datalist id="google-fonts">
                {googleFonts?.map((font) => {
                  return <option key={font.family}>{font.family}</option>;
                })}
              </datalist>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Font Size (px):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="22"
                onChange={(e) => setFontSize(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Line Height (px):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="27"
                onChange={(e) => setLineHeight(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Font Weight:
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                defaultValue="normal"
                onChange={(e) => setFontWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Letter Spacing (px):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="0"
                onChange={(e) => setLetterSpacing(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Word Spacing (px):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="0"
                onChange={(e) => setWordSpacing(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 basis-1/2 p-4 rounded shadow-lg">
          <h2 className="font-medium text-2xl mb-5">Fallback font</h2>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Font family:
              </label>
            </div>
            <div className="w-2/4">
              <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600">
                {standardFonts.map((font) => {
                  return <option key={font.id}>{font.fullName}</option>;
                })}
              </select>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Size Adjust (%):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="2"
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Ascent Override (%):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="2"
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Descent Override (%):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="2"
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Line Gap override (%):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600"
                type="number"
                defaultValue="2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left my-10">
        <h2 className="font-medium text-2xl">Preview</h2>
        <div className="mt-4">
          <div
            style={{
              fontFamily: fontName,
              fontSize: `${fontSize}px`,
              lineHeight: `${lineHeight}px`,
              fontWeight: fontWeight,
              letterSpacing: `${letterSpacing}px`,
              wordSpacing: `${wordSpacing}px`,
            }}
          >
            {sampleText}
          </div>
        </div>
      </div>
    </>
  );
};
