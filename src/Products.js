import { useParams } from "react-router-dom";
import {data} from './data';

export default function Products(props) {
    const {id} = useParams();
    const product = data.find((val)=>val.id === +id);
    return(
        <div className="prodDiv">
      
            <div className="prodImgDiv">
                <img src={"/" + product.src} className="prodImg"/>
            </div>
            <div className="descDiv">
                <h4>{product.name}</h4>
                <p>€{product.price}</p>
                <p>{product.description}</p>
                <div className="btn_color">
                <button className="color1"></button>
                <button className="color2"></button>
                <button className="color3"></button>
                </div>
                <button onClick={props.add}>Add to cart</button>
            </div>
                         
        </div>
       
    )
}