import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

const board = [
  {
    name: "Elizabeth Zhu",
    position: "Founder, Editor-in-Chief",
    image: "/images/board/elizabeth.webp",
    bio: (
      <p>
        Elizabeth is an undergraduate student at Stanford University. As a high
        school student, her team placed 1st at the Canadian Ethics Olympiad and
        4th at the 2021 International Ethics Olympiad Final. She likes entering
        essay contests, especially those related to philosophy - most notably,
        she won the 2019 Aristotle Philosophy Contest and placed 2nd in the 2020
        John Locke Institute Politics Prize. She was a competitive debater in
        high school and most enjoyed attempting to debate in French. She also
        has a nascent philosophy blog at{" "}
        <a
          className="text-blue-500 underline"
          href="https://elizabethzhu.home.blog"
        >
          elizabethzhu.home.blog
        </a>
        .
      </p>
    ),
  },
  {
    name: "Saurish Srivastava",
    position: "Vice-President",
    image: "/images/board/saurish.jpeg",
    bio: (
      <p>
        Saurish is a junior at Evergreen Valley HS, located in San Jose,
        California. As an avid debater who has qualified to the Tournament of
        Champions, Saurish is an active reader of philosophy. He is most
        knowledgeable on critical literature surrounding African American
        Studies. He has joined Dialexicon to help spread its mission of
        empowering deep philosophical reflection and thought. More information
        about him can be found on his website at{" "}
        <a className="text-blue-500 underline" href="https://saurish.com">
          saurish.com
        </a>
      </p>
    ),
  },
  {
    name: "Jeffrey Senese",
    position: "Advisory Editor, Outreach",
    image: "/images/board/jeffrey.webp",
    bio: "Jeffrey is the Outreach and Communications Officer for the University of Toronto Mississauga (UTM) Philosophy Department. Jeffrey's role primarily concerns communicating the importance of philosophy in general and of studying philosophy at UTM in particular. To this end, he visits local high schools in the GTA to deliver presentations on how philosophy relates to the real world.  Jeffrey also serves as the president of the Ontario Ethics Bowl committee, which is a national competition designed to help students discuss ethical issues in a collaborative and respectful way. Jeffrey also serves as the editor-in-chief of The Rubicon, the UTM Philosophy Department magazine that will report news about faculty, staff, and students.",
  },
  {
    name: "Petra Dreiser",
    position: "Editorial Consultant, Outreach",
    image: "/images/board/petra.webp",
    bio: "Petra is a writer, editor, and communications and publications specialist with graduate degrees in English, political science, and French. She spends most of her time thinking about language and clarity of expression in one way or another, and nothing brings her quite as much as joy as helping bring complex ideas to a wider audience through well-crafted prose. She also takes care of all matters communication at the University of Toronto's Department of Philosophy. When not word-working or reading for pleasure, you might find her on the Pilates mat or in the pool, trying to grow scrumptious tomatoes, cuddling her two cats, or, lately, studying Arabic.",
  },
  {
    name: "Miha Andrič",
    position: "Contributor, International Outreach",
    image: "/images/board/miha.webp",
    bio: "Miha is an international communication teacher, debate coach and philosopher & sociologist. He is currently Director of the National Debate Organisation (ZiP), Board of Directors of the International Debate Education Association (IDEA), President of the Society for Humanities, and Head of the Speech & Debate Program Bežigrad. He convened the 27th International Philosophy Olympiad in 2020 and recently has served as a program director of several international debate academies in Africa, Russia, Turkey and Italy. As a guest lecturer he trains teachers, students and professionals all around the world, including in the USA, Canada, Dubai, the United Kingdom, Bahrain, China, Singapore and throughout countries in Europe.",
  },
];
export default function About() {
  return (
    <Layout
      title="About | Dialexicon"
      description="Learn more about Dialexicon's goal and our team!"
    >
      <div className="max-w-6xl px-4 mx-auto border-b sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-8 text-4xl font-extrabold tracking-tighter md:text-5xl leading-tighter">
              Why Dialexicon?
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                The unexamined life is not worth living.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center">
                <Image
                  width={768}
                  height={432}
                  alt="Image of the Team"
                  className="mx-auto rounded"
                  src="/images/placeholder.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl">
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl leading-tighter">
              As Plutarch once proclaimed, "Philosophy is the art of living."
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
              Thinking like a philosopher is essential in the 21st century.
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
      <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl leading-tighter">
              Meet our Board
            </h1>
          </div>
          <ul
            role="list"
            class="mx-auto px-2 md:px-0 space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {board.map((member) => (
              <li>
                <div class="space-y-6">
                  <img
                    class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={member.image}
                    alt=""
                  />
                  <div class="space-y-2">
                    <div class="leading-tight">
                      <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>
                      <p className="mb-4 text-[#7A68E1] text-xl">
                        {member.position}
                      </p>
                      <p className="text-lg leading-snug text-left text-gray-600">
                        {member.bio}
                      </p>
                    </div>
                    {/* <ul role="list" class="flex justify-center space-x-5">
                      <li>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Twitter</span>
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">LinkedIn</span>
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
