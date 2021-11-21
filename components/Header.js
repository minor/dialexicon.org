import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function Header() {
  const [top, setTop] = useState(true);
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white dark:bg-gray-900 shadow-lg"
      }`}
    >
      <div className="max-w-6xl px-5 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/">
              <a className="block" aria-label="Cruip">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 8.8366 7.16344 16 16 16 8.8366 0 16-7.1634 16-16Z"
                    fill="url(#a)"
                  />
                  <path
                    d="M15.02 23.2c-1.2133 0-2.2067-.4733-2.98-1.42-.76-.96-1.14-2.3667-1.14-4.22 0-1.8667.3867-3.28 1.16-4.24.7733-.96 1.7867-1.44 3.04-1.44.7867 0 1.4333.1533 1.94.46.5067.3067.9067.6867 1.2 1.14h.1c-.04-.2133-.0867-.52-.14-.92-.0533-.4133-.08-.8333-.08-1.26V7.8h2.98V23h-2.28l-.58-1.42h-.12c-.2933.4533-.6867.84-1.18 1.16-.4933.3067-1.1333.46-1.92.46Zm1.04-2.38c.8267 0 1.4067-.24 1.74-.72.3333-.4933.5067-1.2267.52-2.2v-.32c0-1.0667-.1667-1.88-.5-2.44-.32-.56-.92-.84-1.8-.84-.6533 0-1.1667.2867-1.54.86-.3733.56-.56 1.3733-.56 2.44s.1867 1.8733.56 2.42c.3733.5333.9.8 1.58.8Z"
                    fill="#fff"
                  />
                  <defs>
                    <radialGradient
                      id="a"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(6.76864 27.5402) scale(25.5811)"
                    >
                      <stop offset=".145833" stop-color="#7977D3" />
                      <stop offset=".536458" stop-color="#B179CB" />
                      <stop offset="1" stop-color="#E684AE" />
                    </radialGradient>
                  </defs>
                </svg>
              </a>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <li>
                <Link href="/signin">
                  <a className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  {/* <a className="ml-3 text-gray-200 bg-gray-900 btn-sm hover:bg-gray-800">
                    <span>Sign up</span>
                    <svg
                      className="flex-shrink-0 w-3 h-3 ml-2 -mr-1 text-gray-400 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a> */}
                  <a className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Journal
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/discord">
                  <a className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Community
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="ml-4">
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-800 dark:text-gray-200"
                    >
                      {theme === "dark" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <svg className="svg-icon" viewBox="0 0 20 20">
                          <path
                            fill="none"
                            d="M10.544 8.717l1.166-.855 1.166.855-.467-1.399 1.012-.778h-1.244l-.467-1.243-.466 1.244H10l1.011.778-.467 1.398zm5.442.855l-.467 1.244h-1.244l1.011.777-.467 1.4 1.167-.855 1.165.855-.466-1.4 1.011-.777h-1.244l-.466-1.244zm-8.979-3.02c0-2.259.795-4.33 2.117-5.955A9.418 9.418 0 00.594 9.98c0 5.207 4.211 9.426 9.406 9.426 2.94 0 5.972-1.354 7.696-3.472-.289.026-.987.044-1.283.044-5.194.001-9.406-4.219-9.406-9.426M10 18.55c-4.715 0-8.551-3.845-8.551-8.57 0-3.783 2.407-6.999 5.842-8.131a10.32 10.32 0 00-1.139 4.703c0 5.368 4.125 9.788 9.365 10.245A9.733 9.733 0 0110 18.55m9.406-16.246h-1.71l-.642-1.71-.642 1.71h-1.71l1.39 1.069-.642 1.924 1.604-1.176 1.604 1.176-.642-1.924 1.39-1.069z"
                          />
                        </svg>
                      )}
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
