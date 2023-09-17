import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Counter from './components/Counter';
import Work from './components/Work';
import Footer from './components/Footer';
import SliderShowcase from './components/SliderShowcase';
import SideBtn from './components/SideBtn';
import MessageBtn from './components/MessageBtn';
function App() {
  useEffect(() => {
    Aos.init({
            duration: 1800,
            offset : 20,
    });
},[])
  return (
    <div className="App">
      <Navbar />
      <MessageBtn />
      <SideBtn />
      <Header />
      <Showcase />
      <Projects />
      <Counter />
      <SliderShowcase />
      <Work />
      <Footer />
    </div>
  );
}
export default App;
