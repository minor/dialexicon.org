import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';

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
          <div className="pb-8 text-center">
            <h1 className="mb-8 text-4xl font-extrabold tracking-tighter leading-tighter md:text-5xl">
              Our Journal
            </h1>
          </div>
        </div>
        <div className="max-w-3xl">
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-4 text-2xl font-bold leading-tighter md:text-3xl">
              Current Volume
            </h1>
            <div className="mx-auto">
              <div className="text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '125.0000%',
                    paddingBottom: '48px',
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginTop: '1.6em',
                    marginBottom: '1.6em',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    willChange: 'transform',
                  }}
                >
                  <iframe
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                      padding: 0,
                      margin: 0,
                    }}
                    src="https://www.canva.com/design/DAFFBX8eKn4/view?embed"
                    allowFullScreen="allowfullscreen"
                    allow="fullscreen"
                  ></iframe>
                </div>
                <a
                  href="/journal2021.pdf"
                  className="text-gray-700 underline hover:text-black"
                  target="_blank"
                  rel="noopener"
                >
                  Dialexicon Journal Spring 2022
                </a>{' '}
                <span className="text-gray-700">
                  by Elizabeth Zhu
                </span>
              </div>
            </div>
          </div>
          <div className="pb-12 text-left md:pb-16">
            {/* <h1 className="mb-4 text-2xl font-bold md:text-3xl leading-tighter">
              Past Volumes
            </h1> */}
            <div className="mx-auto">
              <p className="mb-4 text-xl text-gray-600">
                {/* The 2021 Fall{" "}
                <span className="text-transparent bg-gradient-to-r from-rose-400 to-indigo-500 bg-clip-text">
                  Dialexicon
                </span>{" "}
                Journal received 33 submissions from 12 countries: Canada,
                Greece, US, Mexico, Hungary, UK, Indonesia, Slovenia, Turkey,
                Thailand, Bosnia and Herzegovina, and Serbia.
                <br />
                <br /> */}
                <span className="font-semibold">
                  Announcing the Winner and Published Authors of the{' '}
                  <a
                    href="/journal2022.pdf"
                    className="text-gray-700 underline hover:text-black"
                    target="_blank"
                    rel="noopener"
                  >
                    Dialexicon Spring 2022 Journal
                  </a>
                  .
                </span>{' '}
                <br />
                <br />
                ​Congratulations to Nick Liu of Phillips Academy
                Andover (USA), who is our 2022 winner and recipient of
                the $100 prize, with his paper titled "Imagine
                Sisyphus Exploited: The Absurdity of Late Stage
                Capitalism." ​
                <br />
                <br />
                Published Authors - Featured in the Dialexicon Spring
                2022 Journal:
                <ul className="mt-4 mb-4 ml-6 list-disc">
                  <li>
                    Marianna Stamatiou (Arsakeio Lykeum of Patras,
                    Greece) — "Mandatory Vaccines? The Djokovic Case"
                  </li>
                  <li>
                    Lucy Fan (Guildford High School, United Kingdom) —
                    "Relativism and the Death of Truth"
                  </li>
                  <li>
                    Jerry Zhang (Collingwood School, Canada) — "The
                    The Ethics of Mandatory Vaccines: Why Governments
                    Should Take the Plunge"
                  </li>
                  <li>
                    Gabi Casals (Brentwood College School, Canada) —
                    "Does Identity Exist?"
                  </li>
                </ul>
                Honorable Mentions:
                <ul className="mt-4 mb-4 ml-6 list-disc">
                  <li>Toth Efraim</li>
                  <li>Soma Viragh</li>
                  <li>Tilemachos Paizis</li>
                  <li>Samuel Veto</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="pb-12 text-left md:pb-16">
            <h1 className="mb-8 text-2xl font-bold leading-tighter md:text-3xl">
              Past Volumes
            </h1>
            <div className="mx-auto">
              <p className="mb-4 text-xl text-gray-600">
                The 2021 Spring{' '}
                <span className="text-transparent bg-gradient-to-r from-rose-400 to-indigo-500 bg-clip-text">
                  Dialexicon
                </span>{' '}
                Journal received 85 submissions from 12 countries:
                Canada, Greece, US, Mexico, Hungary, UK, Indonesia,
                Slovenia, Turkey, Thailand, Bosnia and Herzegovina,
                and Serbia.
                <br />
                <br />
                <span className="font-semibold">
                  Announcing the Winner and Published Authors of the{' '}
                  <a
                    href="/journal2021.pdf"
                    className="text-gray-700 underline hover:text-black"
                    target="_blank"
                    rel="noopener"
                  >
                    Dialexicon Spring 2021 Journal
                  </a>
                  .
                </span>{' '}
                <br />
                <br />
                ​Congratulations to Julia Wright, who is our 2021
                winner and recipient of the $500 prize, with her paper
                titled "The Animal Rights Movement in the Context of
                the COVID-19 Pandemic." ​
                <br />
                <br />
                Published Authors - Featured in the Dialexicon Spring
                2021 Journal:
                <ul className="mt-4 mb-4 ml-6 list-disc">
                  <li>
                    Kiki Ajayi (England) - "Does Violence have a place
                    in Politics?"
                  </li>
                  <li>
                    Dimitrios Kouvaras (Greece) - "COVID-19: A Lesson
                    of Freedom and Citizenship"
                  </li>
                  <li>
                    Sophie Nadalini (Canada) - "A Call for Nonviolent
                    Protest"
                  </li>
                  <li>
                    Daniel Xu (USA) - "The Rebel in Black: A Black
                    Existentialist Approach to the George Floyd
                    Protests"
                  </li>
                  <li>
                    Emma Miléna Mészáros (Hungary) - "How Viktor
                    Orban's Hungary is heading towards dictatorship
                    during COVID-19"
                  </li>
                </ul>
                Honorable Mentions:
                <ul className="mt-4 mb-4 ml-6 list-disc">
                  <li>Charles Amsellem (England)</li>
                  <li>Benjamin Allen (Hungary)</li>
                  <li>Aarian Bhakoo (Canada)</li>
                  <li>Eva Kamimura (Canada)</li>
                </ul>
              </p>
            </div>
            <div className="mx-auto">
              <div className="text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '125.0000%',
                    paddingBottom: '48px',
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginTop: '1.6em',
                    marginBottom: '1.6em',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    willChange: 'transform',
                  }}
                >
                  <iframe
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                      padding: 0,
                      margin: 0,
                    }}
                    src="https://www.canva.com/design/DAEOGgg2VpY/view?embed"
                    allowFullScreen="allowfullscreen"
                    allow="fullscreen"
                  ></iframe>
                </div>
                <a
                  href="/journal2021.pdf"
                  className="text-gray-700 underline hover:text-black"
                  target="_blank"
                  rel="noopener"
                >
                  Dialexicon Journal Spring 2021
                </a>{' '}
                <span className="text-gray-700">
                  by Elizabeth Zhu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
