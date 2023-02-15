import {Link} from 'react-router-dom'; 
import pic from './images/images.png';

export default function Header() {
    return(
        <nav>
            <div className="top">
                <div className="leftSide">
                    {/* <a href="index.html" class="logo"><i class="fa-solid fa-code"></i></a> */}
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/reserve'>Reserve a table</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div> 
                <div className="logoImgDiv">
                    <img className="logoImg" src={pic}/>
                </div>
                <div className="rightSide">
                    <Link to='/subscribe'>Subscribe</Link>
                    <Link to='/faq' className="faq">faq</Link>
                    <input className="search" type="search" placeholder="Search"></input>
                </div>
            </div>
        </nav>  
    )
}