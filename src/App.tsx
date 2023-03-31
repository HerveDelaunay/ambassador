import React from "react";
import Ambassador from "./components/ambassador.component";
import Faq from "./components/faq.component";
import Footer from "./components/footer.component";
import Navbar from "./components/navbar.component";
import Vision from "./components/vision.component";

function App() {
  return (
    <div className=" overflow-y-auto bg-[#00000B] font-museo">
      <Navbar />
      <Ambassador />
      <Vision />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
