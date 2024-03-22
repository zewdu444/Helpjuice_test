import React from "react";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Your Magic Wand for Instant Documentation
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400 uppercase ">
                Turn ANY process into a simple step-by step Guide
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-700  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Install Wizardshot
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            <div className="mt-4 flex flex-col justify-center">
              <div className="flex flex-col">
                <p className="text-xs text-left max-w-[145px] relative top-8 ">
                  It only takes 3 clicks to publish your first tutorial
                </p>
                <img
                  src="/heroArrow.svg"
                  alt="Logo"
                  className=" w-10 relative top-8 right-4"
                />
              </div>
              <img
                src="/heroImage.png"
                alt="Logo"
                className="rounded-lg gradient-border border-4 border-green-50 max-w-full sm:max-w-[1045px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
