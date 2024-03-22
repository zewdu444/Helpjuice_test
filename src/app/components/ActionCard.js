import React from "react";

function ActionCard() {
  return (
    <div className="">
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-4">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
              <h2 className="block font-semibold text-gray-800 text-2xl md:text-4xl lg:text-4xl dark:text-gray-200">
                Say <u>Goodbye To Writing Docs</u> , and Hello To Wizardshot
                Doing it for YOU.
              </h2>
            </div>

            <div className="py-8 ">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="group flex flex-col  bg-white  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                    src="/cardone.png"
                    alt="cardone"
                    className="max-w-full sm:max-w-[300px]  gradient-border-card "
                  />
                  <div className=" p-2 md:p-3">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white text-left">
                      1.Click Capture
                    </h4>
                    <p className="text-gray-500 text-left text-xs ">
                      Once you install the Chrome extension, fire it up, and
                      click “Capture”
                    </p>
                  </div>
                  <hr className=" h-8 border-t-[2px] border-dashed relative w-5 bottom-40 left-[12.5rem]" />
                  <hr class="h-8 border-t-[2px] border-dashed relative w-[10rem] bottom-[8rem] left-[8rem] transform rotate-90" />
                </div>

                <div className="group flex flex-col  bg-white  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                    src="/cardtwo.png"
                    alt="cardone"
                    className="max-w-full sm:max-w-[300px]  gradient-border-card "
                  />
                  <div className=" p-2 md:p-3">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white text-left">
                      2.Perform Your Actions
                    </h4>
                    <p className="text-gray-500 text-left text-xs ">
                      Once capturing, Wizardshot carefully monitors what you do
                      to understand how to document it.
                    </p>
                  </div>
                  <hr />
                </div>

                <div className="group flex flex-col  bg-white  dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                    src="/cardthree.png"
                    alt="cardone"
                    className="max-w-full sm:max-w-[300px]  gradient-border-card "
                  />
                  <div className=" p-2 md:p-3">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white text-left">
                      3.Done. Article Written
                    </h4>
                    <p className="text-gray-500 text-left text-xs ">
                      Wizardshot carefully crafts the perfect article based off
                      your actions recorded. Just click “Done” and we’ll write
                      up the article in a second.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl justify-center items-center flex flex-col">
              <h2 className="font-semibold text-gray-800 text-lg dark:text-gray-200 max-w-[240px] text-center underline">
                +32 MORE FEATURES
              </h2>
              <h4 className="font-semibold text-gray-800 text-xs dark:text-gray-200 max-w-[280px] text-center">
                INCLUDING A KB INTEGRATION
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
