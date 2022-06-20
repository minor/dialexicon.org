module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/J5RzXgQRWK',
        permanent: true,
      },
      {
        source: '/youtube',
        destination:
          'https://www.youtube.com/channel/UC-tO4dhpa6ab8evhqVcdvKA',
        permanent: true,
      },
      {
        source: '/yt',
        destination:
          'https://www.youtube.com/channel/UC-tO4dhpa6ab8evhqVcdvKA',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'mailto:dialexiconjournal@gmail.com',
        permanent: true,
      },
      {
        source: '/podcast',
        destination:
          'https://open.spotify.com/show/6ab9iObuaUb0VDo4R9lLH4?si=fbf776330bc544bd',
        permanent: true,
      },
      {
        source: '/apple',
        destination:
          'https://podcasts.apple.com/us/podcast/dialexicon/id1618727236',
        permanent: true,
      },
    ];
  },
};
