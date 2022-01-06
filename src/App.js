import './App.css';
import Header from './components/Header/header';
import About from './components/About/about';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="max-w-screen-lg inset-x-0 mx-8 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-8">
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
