import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import '../src/App.css';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Testimonial/>
    </div>
  );
}

export default App;
