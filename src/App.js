import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import "./App.css";
import Awards from "./components/Awards";

function App() {
  return (
    <body id="page-top">
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </div>
    </body>
  );
}

export default App;
