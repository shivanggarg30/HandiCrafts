import React from 'react';
import { Navbar, Main, Products, Footer } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Products /> {/* Make sure this matches the exported component name */}
      <Footer />
    </>
  )
}

export default Home;