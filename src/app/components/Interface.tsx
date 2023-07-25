"use client";
import { useEffect, useState } from "react";
import { GoogleFonts, StandardFonts } from "../types";
import { getDummyText } from "../utils/getDummyText";
import { Helmet } from "react-helmet";
import { useOutsideClick } from "../customHooks/useOutsideClick";

type InterfaceProps = {
  googleFonts: GoogleFonts;
  standardFonts: StandardFonts;
};

const DEFAULT_GOOGLE_FONT = "Lato";
const DEFAULT_STANDARD_FONT = "Arial";
const DEFAULT_FONT_SIZE = 22;
const DEFAULT_LINE_HEIGHT = 1.4;
const DEFAULT_FONT_WEIGHT = "normal";
const DEFAULT_LETTER_SPACING = 0;
const DEFAULT_WORD_SPACING = 0;
const DEFAULT_SIZE_ADJUST = 98;
const DEFAULT_ASCENT_OVERRIDE = 192;
const DEFAULT_DESCENT_OVERRIDE = 112;
const DEFAULT_LINE_GAP_OVERRIDE = 100;

// this is used in order to allow commas (or dots) in the number input
const NUMBERS_PATTERN = "([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]";

const INPUT_CLASSES =
  "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500";

export const Interface = (props: InterfaceProps) => {
  const { googleFonts, standardFonts } = props;

  const [sampleText, setSampleText] = useState(getDummyText());

  // UI settings
  const [fontName, setFontName] = useState(DEFAULT_GOOGLE_FONT);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [lineHeight, setLineHeight] = useState(DEFAULT_LINE_HEIGHT);
  const [fontWeight, setFontWeight] = useState(DEFAULT_FONT_WEIGHT);
  const [letterSpacing, setLetterSpacing] = useState(DEFAULT_LETTER_SPACING);
  const [wordSpacing, setWordSpacing] = useState(DEFAULT_WORD_SPACING);

  const [fallbackFontName, setFallbackFontName] = useState(
    DEFAULT_STANDARD_FONT
  );

  const [sizeAdjust, setSizeAdjust] = useState(DEFAULT_SIZE_ADJUST);
  const [ascentOverride, setAscentOverride] = useState(DEFAULT_ASCENT_OVERRIDE);
  const [descentOverride, setDescentOverride] = useState(
    DEFAULT_DESCENT_OVERRIDE
  );
  const [lineGapOverride, setLineGapOverride] = useState(
    DEFAULT_LINE_GAP_OVERRIDE
  );

  const [isInEditMode, setIsInEditMode] = useState(false);

  const handleTextareaType = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSampleText(event.target.value);
  };

  const handleClickOutside = () => {
    if (sampleText === "") {
      setSampleText(getDummyText());
      return;
    }
    setIsInEditMode(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  // putting the cursor in the textarea when clicking
  useEffect(() => {
    if (isInEditMode) {
      ref.current?.focus();
    }
  }, [isInEditMode, ref]);

  return (
    <>
      <Helmet>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${fontName}`}
        />
      </Helmet>

      <Helmet
        style={[
          {
            cssText: `
              @font-face {
                font-family: "fallback for ${fontName}";
                src: local(${fallbackFontName});
                size-adjust: ${sizeAdjust}%;
                ascent-override: ${ascentOverride}%;
                descent-override: ${descentOverride}%;
                line-gap-override: ${lineGapOverride}%;
              }
            `,
          },
        ]}
      />
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
                className={INPUT_CLASSES}
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_FONT_SIZE}
                onChange={(e) => setFontSize(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/4">
              <label className="block font-bold text-left mb-1 pr-4">
                Line Height (em):
              </label>
            </div>
            <div className="w-2/4">
              <input
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_LINE_HEIGHT}
                onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
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
                className={INPUT_CLASSES}
                defaultValue={DEFAULT_FONT_WEIGHT}
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_LETTER_SPACING}
                onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_WORD_SPACING}
                onChange={(e) => setWordSpacing(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
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
              <select
                onChange={(e) => setFallbackFontName(e.target.value)}
                className={INPUT_CLASSES}
              >
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_SIZE_ADJUST}
                onChange={(e) => setSizeAdjust(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_ASCENT_OVERRIDE}
                onChange={(e) => setAscentOverride(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_DESCENT_OVERRIDE}
                onChange={(e) => setDescentOverride(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
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
                className={INPUT_CLASSES}
                type="number"
                defaultValue={DEFAULT_LINE_GAP_OVERRIDE}
                onChange={(e) => setLineGapOverride(parseFloat(e.target.value))}
                pattern={NUMBERS_PATTERN}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left mt-8">
        <h2 className="font-medium text-2xl">Preview</h2>
      </div>

      <div className="text-left mt-3 bg-slate-50 rounded p-4 pt-1 pb-8">
        <div className="mt-6 relative">
          {!isInEditMode && (
            <>
              <div
                className="relative opacity-40"
                style={{
                  fontFamily: `fallback for ${fontName}`,
                  fontSize: `${fontSize}px`,
                  lineHeight: `${lineHeight}em`,
                  fontWeight: fontWeight,
                  letterSpacing: `${letterSpacing}px`,
                  wordSpacing: `${wordSpacing}px`,
                }}
              >
                {sampleText}
              </div>
              <div
                className="absolute top-0"
                onClick={() => setIsInEditMode(true)}
                style={{
                  fontFamily: fontName,
                  fontSize: `${fontSize}px`,
                  lineHeight: `${lineHeight}em`,
                  fontWeight: fontWeight,
                  letterSpacing: `${letterSpacing}px`,
                  wordSpacing: `${wordSpacing}px`,
                }}
              >
                {sampleText}
              </div>
            </>
          )}
          {isInEditMode && (
            <div
              className="relative"
              style={{
                fontSize: 0,
              }}
            >
              <textarea
                ref={ref}
                style={{
                  fontFamily: `${fontName}`,
                  fontSize: `${fontSize}px`,
                  lineHeight: `${lineHeight}em`,
                  fontWeight: fontWeight,
                  letterSpacing: `${letterSpacing}px`,
                  wordSpacing: `${wordSpacing}px`,
                }}
                className="w-full focus:outline-none resize-none bg-slate-50"
                onChange={handleTextareaType}
                value={sampleText}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
