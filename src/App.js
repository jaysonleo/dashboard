import './App.css';
import Header from './components/Header/header';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import Projects from './components/Projects/projects';

function App() {
  return (
    <div className="max-w-screen-lg inset-x-0 mx-8 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-8">
      <Header/>
      <About/>
      <section id="projects">
        <Projects/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
