import React from "react"
import Navbar from "./components/Profile"
import Main from "./components/main"
import Footer from "./components/footer"

export default function App() {
  return (
      <div className="container">
          <Navbar />
          <Main />
          <Footer />
      </div>
  )
}
