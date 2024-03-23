import React from "react";

function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="col-span-full lg:col-span-1">
            <div className="flex flex-col gap-3">
              <a
                className="inline-flex text-xl font-semibold dark:text-white pt-2"
                href="#"
                aria-label="Brand"
              >
                <img src="/logo.svg" alt="Logo" className=" w-4rem" />
              </a>
              <p className="text-base max-w-[250px]">
                Turn complex process into a simple step-by step Guide
              </p>
              <div className="flex flex-col border-4 border-black max-w-[160px]">
                <div className="flex flex-row justify-evenly ">
                  <div className="flex flex-col  text-center pr-2 text-[0.75rem] font-semibold border-r-4 border-black">
                    <p className="text-xl">12</p>
                    <p className="text-lg">YEARS</p>
                  </div>
                  <div className="flex flex-col text-center  text-[0.75rem] font-semibold ">
                    <p className="text-sm text-center">BUILT BY</p>
                    <p className="text-center mx-auto">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.813 0.343994C5.22301 0.343994 0.679688 4.94128 0.679688 10.598C0.679688 16.2546 5.22301 20.8519 10.813 20.8519C16.4037 20.8519 20.9464 16.2546 20.9464 10.598C20.9464 4.94128 16.4037 0.343994 10.813 0.343994ZM14.2304 2.2229C16.423 3.14238 18.181 4.92131 19.0897 7.14001L17.0357 7.99953C16.3443 6.32051 15.0404 4.98128 13.381 4.30169L14.2304 2.2229ZM7.39635 2.2229L8.24568 4.30169C6.58635 5.00125 5.26302 6.32051 4.59102 7.99953L2.53702 7.14001C3.44569 4.90134 5.18368 3.14238 7.39635 2.2229ZM7.39635 18.973C5.20368 18.0536 3.44569 16.2746 2.53702 14.0559L4.59102 13.1965C5.28235 14.8755 6.58635 16.2146 8.24568 16.8943L7.39635 18.973ZM5.26302 10.598C5.26302 7.49978 7.75168 4.98128 10.813 4.98128C13.875 4.98128 16.3637 7.49978 16.3637 10.598C16.3637 13.6961 13.875 16.2146 10.813 16.2146C7.75168 16.2146 5.26302 13.6961 5.26302 10.598ZM14.2304 18.973L13.381 16.8943C15.0404 16.1947 16.3637 14.8755 17.0357 13.1965L19.0897 14.0559C18.181 16.2946 16.443 18.0536 14.2304 18.973Z"
                          fill="#3A3A3A"
                        />
                      </svg>
                    </p>
                    <p className="text-center pt-1">HELPJUICE</p>
                  </div>
                </div>
                <div className="flex flex-col py-2 border-t-4 border-black text-[0.5rem]">
                  <p className="font-bold text-center">
                    #1 Rated Knowledge Base Software
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold">Learn more</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Wizardshot
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Community Page
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Help Center
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Security information
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold ">Company</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Status Page
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="sm:flex flex-col hidden ">
              <h4 className="text-base text-right">+1 (833) 387 3877</h4>
              <h4 className="text-base text-right">success@wizardshot.com</h4>
            </div>
            <div className="flex flex-row gap-1 pt-2  sm:justify-end">
              <svg
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.2826 8.80101C25.2003 7.62093 24.6038 6.10542 24.6043 4.53662H19.7118V23.2878C19.674 24.3026 19.2255 25.2637 18.4606 25.9689C17.6957 26.674 16.6741 27.0682 15.6109 27.0683C13.3626 27.0683 11.4943 25.3142 11.4943 23.1366C11.4943 20.5356 14.1226 18.5849 16.8301 19.3864V14.6078C11.3676 13.9122 6.58594 17.9649 6.58594 23.1366C6.58594 28.1722 10.9559 31.7561 15.5951 31.7561C20.5668 31.7561 24.6043 27.9 24.6043 23.1366V13.6249C26.5882 14.9857 28.9701 15.7157 31.4126 15.7117V11.0391C31.4126 11.0391 28.4359 11.1752 26.2826 8.80101Z"
                  fill="#0D0D0D"
                  fillOpacity="0.8"
                />
              </svg>
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6299 0.0244141C19.4111 0.0289506 20.3152 0.0380238 21.0958 0.0591946L21.403 0.0697799C21.7576 0.0818774 22.1075 0.0969993 22.5303 0.115146C24.215 0.190755 25.3645 0.444804 26.3731 0.818317C27.4181 1.20241 28.2984 1.72261 29.1787 2.56188C29.9838 3.31782 30.6068 4.23223 31.0043 5.24149C31.3954 6.20476 31.6614 7.30261 31.7406 8.9131C31.7596 9.31534 31.7754 9.64954 31.788 9.98978L31.7976 10.2831C31.8213 11.0271 31.8308 11.8906 31.834 13.5918L31.8356 14.7199V16.7009C31.8394 17.8039 31.8273 18.9069 31.7991 20.0096L31.7896 20.3029C31.777 20.6432 31.7611 20.9774 31.7421 21.3796C31.663 22.9901 31.3938 24.0865 31.0043 25.0512C30.608 26.0611 29.9848 26.9757 29.1787 27.7309C28.387 28.4995 27.4296 29.0945 26.3731 29.4744C25.3645 29.8479 24.215 30.102 22.5303 30.1776C22.1546 30.1945 21.7788 30.2096 21.403 30.2229L21.0958 30.232C20.3152 30.2532 19.4111 30.2638 17.6299 30.2668L16.4487 30.2683H14.3761C13.2207 30.2721 12.0653 30.2605 10.9102 30.2335L10.603 30.2245C10.2272 30.2109 9.8514 30.1952 9.47572 30.1776C7.79105 30.102 6.64155 29.8479 5.63138 29.4744C4.57478 29.0954 3.61773 28.5003 2.8273 27.7309C2.02145 26.9752 1.3979 26.0607 1.00013 25.0512C0.609049 24.088 0.343049 22.9901 0.263882 21.3796C0.246242 21.0208 0.230409 20.6619 0.216382 20.3029L0.208466 20.0096C0.179288 18.9069 0.166092 17.8039 0.168882 16.7009V13.5918C0.164463 12.4888 0.176076 11.3858 0.203716 10.2831L0.214799 9.98978C0.227466 9.64954 0.243299 9.31534 0.262299 8.9131C0.341466 7.30261 0.607466 6.20627 0.998549 5.24149C1.39615 4.2312 2.02094 3.3165 2.82888 2.56188C3.61911 1.79289 4.57553 1.19786 5.63138 0.818317C6.64155 0.444804 7.78947 0.190755 9.47572 0.115146C9.89688 0.0969993 10.2484 0.0818774 10.603 0.0697799L10.9102 0.0607066C12.0648 0.0338391 13.2197 0.0222445 14.3745 0.0259261L17.6299 0.0244141ZM16.0022 7.58539C13.9026 7.58539 11.889 8.38199 10.4043 9.79995C8.91962 11.2179 8.08555 13.1411 8.08555 15.1464C8.08555 17.1517 8.91962 19.0748 10.4043 20.4928C11.889 21.9107 13.9026 22.7073 16.0022 22.7073C18.1018 22.7073 20.1155 21.9107 21.6001 20.4928C23.0848 19.0748 23.9189 17.1517 23.9189 15.1464C23.9189 13.1411 23.0848 11.2179 21.6001 9.79995C20.1155 8.38199 18.1018 7.58539 16.0022 7.58539ZM16.0022 10.6098C16.626 10.6097 17.2437 10.7269 17.82 10.9548C18.3964 11.1827 18.9201 11.5168 19.3612 11.938C19.8024 12.3592 20.1523 12.8592 20.3911 13.4096C20.6299 13.96 20.7529 14.5499 20.753 15.1456C20.7531 15.7414 20.6304 16.3313 20.3917 16.8817C20.1531 17.4322 19.8033 17.9324 19.3623 18.3537C18.9213 18.775 18.3977 19.1093 17.8215 19.3373C17.2452 19.5654 16.6276 19.6829 16.0038 19.683C14.744 19.683 13.5358 19.205 12.645 18.3542C11.7542 17.5034 11.2538 16.3495 11.2538 15.1464C11.2538 13.9432 11.7542 12.7893 12.645 11.9385C13.5358 11.0877 14.744 10.6098 16.0038 10.6098M24.3163 5.3171C23.7914 5.3171 23.288 5.51625 22.9168 5.87074C22.5457 6.22523 22.3371 6.70602 22.3371 7.20734C22.3371 7.70866 22.5457 8.18946 22.9168 8.54395C23.288 8.89843 23.7914 9.09758 24.3163 9.09758C24.8412 9.09758 25.3446 8.89843 25.7158 8.54395C26.087 8.18946 26.2955 7.70866 26.2955 7.20734C26.2955 6.70602 26.087 6.22523 25.7158 5.87074C25.3446 5.51625 24.8412 5.3171 24.3163 5.3171Z"
                  fill="#0D0D0D"
                  fillOpacity="0.8"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-end pt-4 text-xl font-bold gap-3 sm:mr-0 mr-4">
              <h4 className="text-right">Sign Up</h4>
              <h4 className="text-right">Log in</h4>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t-2 sm:border-t-0">
          <div className="sm:hidden flex-col flex py-2 ">
            <h4 className="text-base text-center">+1 (833) 387 3877</h4>
            <h4 className="text-base text-center">success@wizardshot.com</h4>
          </div>
          <p className="text-sm sm:text-black  text-gray-400 text-center">
            © 2024 Wizardshot – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
