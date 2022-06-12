import React from "react";

function Podcast() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center">
            <h2 className="mb-4 h2">Listen to our Podcast</h2>
            <p className="text-xl text-gray-600">
              Dialexicon has a free podcast dedicated to promoting philosophical
              education and deep reflection. We invite philosophers from around
              the globe to discuss philosophy in the context of contemporary
              injustices – all at an easy-to-understand and digestible level.
              Weekly episodes on Monday.
            </p>
          </div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/show/6ab9iObuaUb0VDo4R9lLH4?utm_source=generator&theme=0"
            width="100%"
            height="232"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Podcast;
