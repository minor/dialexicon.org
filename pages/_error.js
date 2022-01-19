import Layout from "../components/Layout";

import Link from "next/link";

export default function Error({ statusCode }) {
  return (
    <Layout title="Error | Dialexicon" description="Page not found.">
      <div className="flex flex-col items-center justify-center px-10 bg-white h-[65vh] md:flex-row md:space-x-6">
        <div className="space-x-2">
          <h1 className="text-6xl font-bold text-gray-900 md:text-8xl md:border-r-2 md:px-6">
            {statusCode}
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            There was an error finding your page.
          </p>
          <p className="max-w-sm mb-8 text-md">
            We weren't able to find your page. Please click the button below to
            return home!
          </p>
          <Link href="/">
            <a className="px-4 py-2.5 text-black border rounded-lg shadow transition duration-300 hover:shadow-md">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
