module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/J5RzXgQRWK",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "mailto:dialexiconjournal@gmail.com",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "https://www.youtube.com/channel/UC-tO4dhpa6ab8evhqVcdvKA",
        permanent: true,
      },
    ];
  },
};
