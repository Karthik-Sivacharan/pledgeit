import React from "react";

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"
import MobileOverlay from "./MobileOverlay.jsx"
import PageContent from "./PageContent.jsx"

class Main extends React.Component {
  render() {
    return (
        <div >
            <Navbar />
            <div id="wrapper" className="mm-page mm-slideout">
            <Header />
            <MobileOverlay />
            <PageContent />
            <Footer />
            </div>
        </div>
    );
  }
}

export default Main;
