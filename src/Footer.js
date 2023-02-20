import { Link } from "react-router-dom"
export default function Footer() {
    return(
        <div className="footer">
            
          <img src="./images/google.png"/>
          <img src="./images/facebook.png"/>
          <img src="./images/insta.png"/>
          <img src="./images/linkedin.png"/>
         
            <p> Copyright © 2023 <Link to='/' style={{color:"cyan"}}>Coffee Shop.</Link></p>
        </div>
    )
}