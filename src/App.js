import './App.css';
import './Header.css';
import './Home.css';
import './Products.css';
import './Footer.css';
import './About.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom'; 
import Shop from './Shop';
import Reserve from './Reserve';
import About from './About';
import Contact from './Contact';
import Subscribe from './Subscribe';
import Faq from './Faq';
import Products from './Products';
import Cart from './Cart';
import {useState} from 'react';


function App() {
  const [count,setCount] = useState(0);
  function add() {
    setCount(count+1)
  }

  return (
    <div className="App">
      <Header count={count} />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/:id' element={<Products  add={add}/>}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/reserve' element={<Reserve />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/cart/:id' element={<Cart />}/>
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
