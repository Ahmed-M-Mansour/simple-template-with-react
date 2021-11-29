import './App.css';
import Navigation from './components/Navigation/Navigation.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'



function App() {

  return (
    <div className="App">
        <Navigation /> 
        <Home /> 
        <About /> 
        <Projects /> 
        <Contact /> 
        
        </div>
        
  );
}

export default App;
