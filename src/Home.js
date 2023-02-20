import { Link } from "react-router-dom";

export default function Home(props) {
    const newData=props.myData.map((val)=><div key={val.id} className="imgDiv"> <Link to={`/products/${val.id}`}><img  src={val.src} className="shopImg"/></Link> <h4>{val.name}</h4> <p>€{val.price}</p> <button>Add to cart</button></div>);
        return(
        <div className="contDiv">
            {newData}
        </div>
    )
}