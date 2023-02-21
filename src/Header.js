import {Link} from 'react-router-dom'; 
import Cart from './Cart';
import {Routes,Route} from 'react-router-dom'; 
import {useState} from "react";

export default function Header() {

        return(
        <nav>
            <div className="top">
                <div className="leftSide">
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/reserve'>Reserve a table</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div> 
                <div className="logoImgDiv">
                    <Link to='/'><img className="logoImg" src="./images/logo.png"/></Link>
                </div>
                <div className="rightSide">
                    <Link to='/subscribe'>Subscribe</Link>
                    <Link to='/faq' className="faq">faq</Link>
                    <input className="search" type="search" placeholder="Search"></input>
                    <div className='cartDiv'>
                        <img src="./images/cart.png"/>
                    </div>
                </div>
            </div>
            
            
        </nav>  

        
    )
}