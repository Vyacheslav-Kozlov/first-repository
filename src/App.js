import React from "react";
import './App.scss';
import Header from "./components/Header";
import UpperContent from "./components/UpperContent";
import UpperMiddleContent from "./components/UpperMiddleContent";
import LowerMiddleContent from "./components/LowerMiddleContent";
import LowerContent from "./components/LowerContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <section>
        <Header/>
        <UpperContent/>
      </section>

      <section>
        <UpperMiddleContent/>
      </section>

      <section className="bg-light">
        <LowerMiddleContent/>
      </section>

      <section>
        <LowerContent/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
