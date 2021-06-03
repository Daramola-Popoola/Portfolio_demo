import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './pages/About';
import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
import { Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/about"  component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
     
      {/* <About />
      <Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
