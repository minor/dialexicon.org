import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

export default function Journal() {
  return (
    <Layout
      title="Journal | Dialexicon"
      description="Read the Dialexicon biannual journal!"
    >
      <div className="max-w-6xl px-4 mx-auto border-b sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-8 text-4xl font-extrabold tracking-tighter md:text-5xl leading-tighter">
              Our Journal
            </h1>
          </div>
        </div>
        <div className="max-w-3xl">
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl leading-tighter">
              Current Volume
            </h1>
            <div className="mx-auto">
              <p className="mb-4 text-xl text-gray-600">
                In today's digital age, it is easy to mindlessly consume
                information. But to truly contemplate issues beneath the surface
                and to lead a well-examined life requires embodying the thought
                processes of a philosopher: to pose big questions about the
                world and criticize the norm.
                <br />
                <br />
                Philosophical thinking can be found in the ordinary and the
                familiar, not just the new and profound. At the same time,
                philosophy delights in the unknown: in posing questions that
                might not have immediate or clear answers, but are worth asking
                for the sake of curiosity.
                <br />
                <br />
                From youth, we are natural philosophers, asking large questions
                about seemingly self-evident subjects: Why is the sky blue? Why
                do we have to listen to our parents? Why is there something
                rather than nothing?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500">
                  Dialexicon
                </span>{" "}
                is a project to revive these questions by giving youth a
                platform to express their philosophical ideas and share them
                with others.
              </p>
            </div>
          </div>
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl leading-tighter">
              Past Volumes
            </h1>
            <div className="mx-auto">
              <p className="mb-4 text-xl text-gray-600">
                The biggest problems facing our modern society do not derive
                from a lack of resources but from the abuse and mismanagement of
                tools by humankind.
                <br />
                <br />
                Poverty stems from a lack of redistribution, not scarcity.
                <br />
                <br />
                Climate change stems from human-caused pollution and the tragedy
                of the commons.
                <br />
                <br />
                War stems from fragmentation and political mismanagement.
                <br />
                <br />
                Technological abuse threatens a new frontier where our privacy,
                liberty, and equality are at risk.
                <br />
                <br />
                To combat these problems, we need philosophy more than ever.
                While science has fostered the creation of tools, philosophy
                teaches us how and when to use them in just and beneficial wyas.
                We need political philosophy to justly govern citizens and allot
                resources, ethics to guide how we ought to treat each other, and
                epistemology to satisfy our curiosity.
                <br />
                <br />
                Thinking like a philosopher trains you to be a problem-solver, a
                persuasive orator, and a critical thinker.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500">
                  Dialexicon
                </span>{" "}
                is the first step on that journey, beginning with youth.
              </p>
            </div>
          </div>
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl leading-tighter">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500">
                Dialexicon
              </span>
              ?
            </h1>
            <div className="mx-auto">
              <p className="mb-4 text-xl text-gray-600">
                Here are some reasons why Dialexicon came into existence:
                <ul className="mt-4 mb-4 ml-6 list-disc">
                  <li>
                    Noticed a lack of accessible philosophy resources for high
                    school students
                  </li>
                  <li>
                    To share the voices and philosophical opinions of youth with
                    a global audience
                  </li>
                  <li>
                    To provide a forum for youth to discuss philosophy with
                    other engaged youth
                  </li>
                  <li>
                    To distill complex philosophical ideas to be approachable
                    for youth
                  </li>
                </ul>
                Dialexicon seeks to close a gap in high-quality philosophy
                resources for young people, offering a platform tailored to
                middle and high school students who are interested in
                philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
