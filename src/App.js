import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <body id="page-top">
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
      </div>
    </body>
  );
}

export default App;
