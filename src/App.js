import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <body id="page-top">
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <Interests />
        <Awards />
      </div>
    </body>
  );
}

export default App;
