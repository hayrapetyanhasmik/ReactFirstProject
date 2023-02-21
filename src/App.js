import './App.css';
import './Header.css';
import './Home.css';
import './Products.css';
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

const data = [
  {
   id: 1,
   src: "images/coffeebean.webp",
   name: "Americano",
   price: "12",
   description: "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water."
  },
  {
   id: 2,  
   src: "images/sweetest-coffee-beans.webp",
   name: "Black Coffee",
   price: "9",
   description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir."
  },
  {
   id: 3, 
   src: "images/capuccino.jpg",
   name: "Capuccino",
   price: "11",
   description: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well."
  },
  {
   id: 4, 
   src: "images/l_coffee beans large.jpg",
   name: "Arabica",
   price: "7",
   description: "Store your Arabica coffee beans more like fresh bread than dried beans — which is to say that while they look like non-perishable items, their flavor will drop off more noticeably over time. They like to be kept in a cool, dry place and will perform better if you use them while they’re fresh."
  },
  {
   id: 5,
   src: "images/images.jpg",
   name: "Macchiato",
   price: "11",
   description: "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio."
  },
  {
   id: 6,
   src: "images/lungo.jpeg",
   name: "Lungo",
   price: "8",
   description: "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy."
  }
]

function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
        <Route path='/' element={<Home myData={data}/>}/>
        <Route path='/products/:id' element={<Products myNewData={data}/>}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/reserve' element={<Reserve />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/faq' element={<Faq />}/>
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
