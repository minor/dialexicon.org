import React from "react";

function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute bottom-0 -mb-32 transform -translate-x-1/2 pointer-events-none left-1/2"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h2 className="h2">Our Sponsors</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              If you would like to sponsor Dialexicon, please{" "}
              <a
                href="/contact"
                className="text-gray-700 underline hover:text-black"
              >
                connect with us
              </a>
              .
            </p>
          </div>

          {/* Items */}
          <div className="grid max-w-sm grid-cols-4 gap-4 mx-auto md:max-w-4xl">
            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 md:col-auto">
              <img className="" src="/images/utoronto.png"></img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 md:col-auto">
              <img className="" src="/images/ontario_ethics_bowl.jpeg"></img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 md:col-auto">
              <img className="" src="/images/phil_foundation.png"></img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 md:col-auto">
              <img
                className=""
                src="/images/canadian_phil_association.png"
              ></img>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start bg-white border-2 border-gray-200 rounded">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-20 mx-4 text-center md:mx-0">
                <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2">
                  <svg
                    className="absolute top-0 right-0 w-16 h-16 -mt-3 -mr-8 text-indigo-400 fill-current"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img
                    className="relative rounded-full"
                    src="/images/landing/lavanya.jpeg"
                    width="96"
                    height="96"
                    alt="An image of Lavanya Girish"
                  />
                </div>
                <blockquote className="mb-4 text-xl">
                  "Participating in the discussions hosted by Dialexicon, as
                  well as engaging within their journal, has given me the
                  opportunity to reflect on social issues (starting with
                  education) in my life. Dialexicon's community has helped me
                  grow as an individual, but also as a member of society."
                </blockquote>
                <cite className="block mb-1 text-lg not-italic font-medium">
                  Lavanya Girish
                </cite>
                <div className="text-gray-600">
                  <span>Junior</span>{" "}
                  <a
                    href="https://www.presentationhs.org/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    @ Presentation High School
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
