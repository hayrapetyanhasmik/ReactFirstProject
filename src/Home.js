import { Link } from "react-router-dom";
import {data} from './data';

export default function Home() {
    const newData = data.map((val) => (
    <div key={val.id} className="imgDiv">
      <Link to={`/products/${val.id}`}>
        <img src={val.src} className="shopImg" />
        <h4>{val.name}</h4> 
        <p>€{val.price}</p> 
        <button>Buy now</button>
      </Link>
    </div>
  ));
  return (
  <div className="contDiv">{newData}</div>
  )
}
