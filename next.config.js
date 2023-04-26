/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'localhost:92',
        defaultLocale: 'en-US',
          http: true,
      },
      {
        domain: 'localhost:91',
        defaultLocale: 'nl-NL',
          http: true,
      },
      {
        domain: 'localhost:3000',
        defaultLocale: 'fr',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
  serverRuntimeConfig: {
    themes: {
      "localhost:92": "RedPanda",
      "localhost:91": "Maxwell"
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: `picsum.photos`,
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig;
 