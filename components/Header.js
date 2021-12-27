import React, { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";

const headers = [
  {
    name: "About",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "about",
  },
  {
    name: "Journal",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "journal",
  },
  {
    name: "Community",
    description: "Your customers' data will be safe and secure.",
    href: "discord",
  },
  {
    name: "Contact",
    description: "Connect with third-party tools that you're already using.",
    href: "contact",
  },
];

export default function Example() {
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
      className={`fixed w-full z-30 md:opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white dark:bg-gray-900 shadow-lg"
      }`}
    >
      <Popover className="relative bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Dialexicon Logo</span>
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
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  ariaHidden="true"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link href="/about">
                <a className="text-lg font-medium text-gray-500 hover:text-gray-900">
                  About
                </a>
              </Link>
              <Link href="/journal">
                <a className="text-lg font-medium text-gray-500 hover:text-gray-900">
                  Journal
                </a>
              </Link>
              <Link href="/discord">
                <a className="text-lg font-medium text-gray-500 hover:text-gray-900">
                  Community
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-lg font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </Link>
            </Popover.Group>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <Link href="/discord">
                <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-[#7A68E1] whitespace-nowrap hover:bg-indigo-700">
                  Discord
                </a>
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <a>
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
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokelLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid justify-center gap-y-8">
                    {headers.map((header) => (
                      <a
                        key={header.name}
                        href={header.href}
                        className="flex justify-center p-3 -m-3 rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-600">
                          {header.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div>
                  <Link href="/discord">
                    <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-rose-400 to-indigo-500 hover:bg-indigo-700">
                      Discord
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
