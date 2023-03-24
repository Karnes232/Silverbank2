import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import TravelInformation from "../components/TravelInformation"
import TravelInfoVideo from "../components/TravelInfoVideo"
import "../scss/main.scss"

const travelInformation = () => {
  return (
    <>
      <SEO title="Whale Watching | Snorkeling Humpback Whales | Silver Bank Dominican Republic" />
      <Navbar />
      <main>
        <TravelInfoVideo />
        <TravelInformation />
      </main>
      <Footer />
    </>
  )
}

export default travelInformation
