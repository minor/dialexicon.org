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
    ];
  },
};
