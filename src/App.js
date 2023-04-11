import './App.scss';
import Projects from './components/OurProjects/Projects';
import Banner from './components/banner/Banner';
import Bestsellers from './components/bestsellers/Bestsellers';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
// import Navbar from './components/navbar/Navbar';
import Our from './components/our/Our';
import Policy from './components/policy/Policy';
import Stay from './components/stay/Stay';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */ }
      <Banner />
      <Our />
      <Policy />
      <Projects />
      <Bestsellers />
      <Blog />
      <Stay />
      <Footer />
    </div>
  );
}

export default App;
