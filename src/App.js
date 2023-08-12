import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Offer from './components/Offer';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Offer />
      <Popular />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
