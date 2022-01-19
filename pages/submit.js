import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

export default function Journal() {
  return (
    <Layout
      title="Submit | Dialexicon"
      description="Learn how to submit to Dialexicon's journal!"
    >
      <div className="max-w-6xl px-4 mx-auto border-b sm:px-6">
        <div className="pt-32 pb-12 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-8 text-4xl font-extrabold tracking-tighter md:text-5xl leading-tighter">
              Submit to Dialexicon
            </h1>
          </div>
        </div>
        <div className="max-w-3xl">
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-8 text-3xl font-bold leading-tighter">
              What is the Dialexicon Journal?
            </h1>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500">
                  Dialexicon
                </span>{" "}
                is a journal aimed at fostering philosophical thinking and
                writing among high school students. Submitted papers undergo a
                multi-round review process, during which an adjudication panel
                consisting of philosophy faculty, graduate students, and
                international debate coaches will evaluate papers and determine
                the select few worthy of publication.
                <br />
                <br />
                <span className="font-semibold">
                  Students whose papers are published receive:
                </span>
                <ul className="mt-4 mb-6 ml-6 list-disc md:mb-8">
                  <li>
                    An official publication for university applications and
                    academic resumés
                  </li>
                  <li>
                    A feature on the University of Toronto Philosophy
                    Department's homepage
                  </li>
                  <li>
                    An interview with Dialexicon to expand on their paper and
                    discuss current affairs
                  </li>
                  <li>A $100 check funded by the Ontario Ethics Bowl</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-8 text-3xl font-bold leading-tighter">
              Introducing the 2021/22 Dialexicon Journal
            </h1>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 leading-tighter">
              Prompt 1: Mandatory Vaccines
            </h2>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                The COVID-19 pandemic has raised questions surrounding the
                obligations and limits of public health regulations. With some
                regions experiencing a resurgence of cases, there has been an
                increased push for vaccine mandates. Specifically, some citizens
                are calling for imposing mandatory vaccines or, at the very
                least, ‘vaccine passports’ that prevent unvaccinated citizens
                from entering certain public and private spaces, such as
                restaurants and theatres. Do you believe mandatory vaccines are
                ethical? What about vaccine passports? Where do you draw the
                line, if at all, in terms of vaccine regulations during the
                COVID-19 pandemic, and why?
              </p>
            </div>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 leading-tighter">
              Prompt 2: Transgender Athletes
            </h2>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                At the Tokyo 2021 Olympic Games, Laurel Hubbard became the first
                transgender athlete to compete at the Olympics in weightlifting.
                The move generated controversy, with some arguing that Hubbard
                gained an unfair advantage by having biologically male traits,
                such as increased bone and muscle density – traits that are key
                to success in sports, particularly weightlifting. Others say
                this is a breakthrough moment to include transgender athletes,
                contesting the idea that strict biological sex categories exist
                or, if they exist, whether they play a decisive role in the
                competition. Since 2015, the rules of the International Olympic
                Committee (IOC) allow transgender athletes to compete as women
                if their testosterone levels fall under a threshold. Should
                transgender athletes be allowed to compete in sporting events of
                their desired gender? What requirements should be applied, if
                any? And should a distinction be made between sporting events
                and other types of competitions – for example, should a
                transgender actor be placed in their desired gender category at
                the Oscars?
              </p>
            </div>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 leading-tighter">
              Prompt 3: Gene Editing
            </h2>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                Recent technologies such as CRISPR have enabled scientists to
                edit the genes of individuals. Current applications generally
                revolve around addressing medical illnesses and genetic defects,
                but the future holds many more possibilities. The ability to
                edit one’s genes could provide a way to change a person’s race,
                overall appearance, IQ, and genetic composition. Parents, at
                least those who can afford the technology, could opt to make
                their kids smarter, stronger, and ‘better’ in various regards.
                Is gene editing morally justified, or should it be banned or
                restricted? Where should we draw the line between treating
                diseases and enhancing humans? Do the benefits justify the
                possible risks, both in terms of medical risks and social
                justice issues?
              </p>
            </div>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 leading-tighter">
              Prompt 4: Truth
            </h2>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                With the ascent of populist politicians and Big Tech, the
                ‘truth’ has been put in question. Facts as basic as whether a
                celebrity is alive or dead and the safety of a vaccine have been
                disputed by prominent figures and ordinary citizens alike. The
                rise of deepfakes and the spread of fake news over social media
                has only worsened the problem, resulting in rising skepticism of
                authority figures. In an increasingly divided and misleading
                social climate, how do we discern the truth, if at all? How do
                we separate fact from opinion? Is there an objective reality at
                all?
              </p>
            </div>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 leading-tighter">
              Prompt 5: Choose your own prompt!
            </h2>
          </div>
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-8 text-3xl font-bold leading-tighter">
              How do I write a strong paper for Dialexicon?
            </h1>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                To assist you in writing a strong submission, you may want to
                consult the following resources:
                <br />
                <br />
                <a
                  href="/rubric.pdf"
                  className="text-gray-700 underline hover:text-black"
                >
                  Dialexicon Rubric
                </a>
                <br />
                <a
                  href="/essayguide.pdf"
                  className="text-gray-700 underline hover:text-black"
                >
                  Guide to Writing a Strong Philosophy Essay
                </a>
              </p>
            </div>
          </div>
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-8 text-3xl font-bold leading-tighter">
              How do I submit?
            </h1>
            <div className="mx-auto">
              <p className="mb-6 text-xl text-gray-600 md:mb-8">
                Email your submission to{" "}
                <a
                  href="mailto:dialexiconjournal@gmail.com"
                  className="text-gray-700 underline hover:text-black"
                >
                  dialexiconjournal@gmail.com
                </a>{" "}
                with the subject title "Dialexicon Submission". Please attach
                your essay as a PDF. For the purposes of a blind review process,
                do not include your personal information in the essay document.
                Along with your essay, please download our{" "}
                <a
                  href="/submissionform.pdf"
                  className="text-gray-700 underline hover:text-black"
                >
                  submission form
                </a>{" "}
                and fill it out electronically using{" "}
                <a
                  href="https://pdfescape.com"
                  target="_blank"
                  className="text-gray-700 underline hover:text-black"
                >
                  PDF Escape
                </a>
                . Alternatively, you can print it out, complete it by hand, and
                scan the paper. Attach it to your email along with your
                submission.
                <br />
                <br />
                <span className="font-semibold">
                  Your submission should adhere to the following guidelines:
                </span>
                <ul className="mt-4 mb-6 ml-6 list-disc md:mb-8">
                  <li>Be between 900 and 1200 words</li>
                  <li>12 pt Times New Roman font</li>
                  <li>Your essay should have an original title</li>
                  <li>
                    Include in-text citations and reference in any reputable
                    style (i.e. APA, Chicago)
                  </li>
                  <li>
                    Any form of plagiarism or ghostwriting is not tolerated.
                    However, Dialexicon gladly accepts essays that have been
                    submitted for a school assignment or an essay competition.
                  </li>
                </ul>
                <span className="text-2xl text-red-500">
                  Note: The deadline for entries into the Spring Volume has{" "}
                  <span className="italic">passed</span>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
