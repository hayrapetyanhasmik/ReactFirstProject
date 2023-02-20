import { useParams } from "react-router-dom";


export default function Products(props) {
    const {id} = useParams();
    const product = props.myNewData.find((val)=>val.id === +id);
    return(
        <div className="prodDiv">
      
            <div className="prodImgDiv">
                <img src={"/" + product.src} className="prodImg"/>
            </div>
            <div className="descDiv">
                <h4>{product.name}</h4>
                <p>€{product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
       
    )
}