import React, { Suspense } from "react"
import "../scss/main.scss"

import SEO from "../components/seo"
import Helment from "react-helmet"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Contact from "../components/Contact"
import Popup from "../components/Popup"
import Footer from "../components/Footer"
const About = React.lazy(() => import("../components/About"))

const Boat = React.lazy(() => import("../components/Boat"))
const BoatInfo = React.lazy(() => import("../components/BoatInfo"))
const Packages = React.lazy(() => import("../components/Packages"))
const Tours = React.lazy(() => import("../components/Tours"))

// markup
const IndexPage = () => {
  return (
    <>
      <main>
        <Helment>
          <link rel="canonical" href="https://www.silverbankwhales.com/" />
          <meta
            name="google-site-verification"
            content="6C1VjAaC2hAZxjbi7ydNSMBeNrN1JlKtIcJDxum0jrs"
          />
        </Helment>
        <SEO title="Whale Watching | Snorkeling Humpback Whales | Silver Bank Dominican Republic" />
        <Navbar />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Boat />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <BoatInfo />
        </Suspense>
        <div id="tours">
          <Suspense fallback={<div>Loading...</div>}>
            <Packages />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Tours />
        </Suspense>
        <Contact />

        <Popup />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
