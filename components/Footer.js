import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-8 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/">
                <a className="inline-block" aria-label="Cruip">
                  <svg
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                        <stop offset=".145833" stopColor="#7977D3" />
                        <stop offset=".536458" stopColor="#B179CB" />
                        <stop offset="1" stopColor="#E684AE" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a
                href="#"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                href="#"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/blog">
                  <a className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Tutorials
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.youtube.com/channel/UC-tO4dhpa6ab8evhqVcdvKA"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  YouTube
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Past Discussions
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://discord.gg/J5RzXgQRWK"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Dialexicon</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/">
                  <a className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Home
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <a className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    About us
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/journal">
                  <a className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Journal
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="https://discord.gg/J5RzXgQRWK"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:dialexiconjournal@gmail.com"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-800">Subscribe</h6>
            <p className="mb-4 text-sm text-gray-600">
              Get the latest philosophical research pertinent to you in your
              inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="w-full px-3 py-2 pr-12 text-sm text-gray-800 form-input"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px my-2 -ml-px bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mx-3 text-indigo-400 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="py-4 border-t border-gray-200 md:flex md:items-center md:justify-between md:py-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a
                aria-label="github"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full w-[1.875rem] h-[1.875rem] drop-shadow-md hover:text-gray-900 hover:bg-white-100"
                href="https://github.com/minor/dialexicon.org/"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                aria-label="mail"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full w-[1.875rem] h-[1.875rem] drop-shadow-md hover:text-gray-900 hover:bg-white-100"
                href="maito:dialexiconjournal@gmail.com"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                aria-label="facebook"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full w-[1.875rem] h-[1.875rem] drop-shadow-md hover:text-gray-900 hover:bg-white-100"
                href="https://www.facebook.com/dialexiconjournal/"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                aria-label="youtube"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full w-[1.875rem] h-[1.875rem] drop-shadow-md hover:text-gray-900 hover:bg-white-100"
                href="https://www.youtube.com/channel/UC-tO4dhpa6ab8evhqVcdvKA"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                aria-label="instagram"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full w-[1.875rem] h-[1.875rem] drop-shadow-md hover:text-gray-900 hover:bg-white-100"
                href="https://www.instagram.com/dialexiconorg/"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 text-sm text-gray-600">
            <Link href="/">
              <a className="text-blue-600 hover:underline">Dialexicon</a>
            </Link>{" "}
            – {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
