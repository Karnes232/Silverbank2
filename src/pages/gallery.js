import * as React from "react"
import "../scss/main.scss"
import SEO from "../components/seo"
import Helment from "react-helmet"
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"

// markup
const GalleryPage = () => {
  return (
    <main>
      <Helment>
        <link rel="canonical" href="https://www.silverbankwhales.com/gallery" />
      </Helment>
      <SEO title="Photo Gallery" />
      <Navbar />
      <Gallery />
    </main>
  )
}

export default GalleryPage
