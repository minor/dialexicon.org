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
                        <stop offset=".145833" stop-color="#7977D3" />
                        <stop offset=".536458" stop-color="#B179CB" />
                        <stop offset="1" stop-color="#E684AE" />
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

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Web Studio
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  DynamicBox Flex
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Programming Forms
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Integrations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Command-line
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Tutorials & Guides
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Support Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Company values
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-800">Subscribe</h6>
            <p className="mb-4 text-sm text-gray-600">
              Get the latest news and articles to your inbox every month.
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
                        className="flex-shrink-0 w-3 h-3 mx-3 text-blue-600 fill-current"
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
                href="https://www.facebook.com/dialexiconjournal/"
                target="_blank"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.instagram.com/_dialexicon/"
                target="_blank"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.youtube.com/channel/UC-tO4dhpa6ab8evhqVcdvKA"
                target="_blank"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="YouTube"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://github.com/minor/dialexicon.org"
                target="_blank"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
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
