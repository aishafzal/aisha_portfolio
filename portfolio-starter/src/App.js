import Navbar from './components/navbar/navbar'
import './App.css'
import Intro from  './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';
import { useContext } from 'react';
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
    background : darkMode? 'black': '',
    color : darkMode? 'white': ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
          </div>
  );
}

export default App;
