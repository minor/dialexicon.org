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
                Who can submit to Dialexicon?
              </h4>
              <p className="text-center text-gray-600">
                High school students from around the world are eligible to
                submit to Dialexicon for an opportunity to have their
                philosophical essay published in a professionally adjudicated
                journal.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                When will I be notified about the results?
              </h4>
              <p className="text-center text-gray-600">
                We will notify those whose papers are selected for publication
                in the journal by March.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Can I use the first person?
              </h4>
              <p className="text-center text-gray-600">
                Of course. Philosophers often use the first person when mapping
                out their argument. This is not to say that the essay should be
                informal; it should be formal – this means no contractions!
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Do I have to answer all of the questions in the prompt?
              </h4>
              <p className="text-center text-gray-600">
                No. The questions serve as pointers to help you consider the
                philosophical implications of each topic, but you do not need to
                answer all of them. Feel free to create your own question so
                long as it is relevant to the prompt.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                How does the submission process work?
              </h4>
              <p className="text-center text-gray-600">
                Your paper will undergo multiple rounds of blind review, where
                it will be evaluated by at least two different adjudicators.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl ring ring-indigo-400">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">
                Who will be adjudicating my paper?
              </h4>
              <p className="text-center text-gray-600">
                A panel of university philosophy faculty, graduate students, and
                international debate coaches will be adjudicating your
                submission to determine if it fulfills the criteria for
                acceptance into the journal. For the criteria, refer to the
                rubric.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
