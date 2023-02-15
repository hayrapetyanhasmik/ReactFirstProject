import './App.css';
import './Header.css';
import Header from './Header';
import Container from './Container';
import Description from './Description';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom'; 
import Home from './Home';
import Shop from './Shop';
import Reserve from './Reserve';
import About from './About';
import Contact from './Contact';
import Subscribe from './Subscribe';
import Faq from './Faq';



function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/reserve' element={<Reserve />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/faq' element={<Faq />}/>
    </Routes>
      <Container />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
