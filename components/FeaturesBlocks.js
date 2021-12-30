import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-900 pointer-events-none top-1/2 md:mt-24 lg:mt-0"
        aria-hidden="true"
      ></div>
      <div className="absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">FAQ</h2>
            <p className="text-xl text-gray-600">
              Here are some quick answers to frequently asked questions.
            </p>
          </div>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Lorem ipsum
              </h4>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Lorem ipsum
              </h4>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Lorem ipsum
              </h4>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Lorem ipsum
              </h4>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Lorem ipsum
              </h4>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Lorem ipsum
              </h4>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
