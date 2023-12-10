module.exports = {
  siteMetadata: {
    title: `Silverbank whales`,
    description: `Experience the chance of a lifetime to swim with beautiful humpback whales in the warm tropical waters of the Silver Bank. Book your adventure now.`,
    keywords: `whale watching, humpback whales, snorkeling with whales, whale watching dominican republic`,
    url: `https://www.silverbankwhales.com/`,
    siteUrl: `https://www.silverbankwhales.com/`,
    author: `@karnes`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-HXM7FTQ84H",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HXM7FTQ84H"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline", 
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.webp",
        name: `Silverbank Whales`,
        short_name: `Silver Bank`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1f2937`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
