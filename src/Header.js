import {Link} from 'react-router-dom'; 

export default function Header({count}) {
    return(
        <nav>
            <div className="top">
                <div className="leftSide">
                <div className="logoImgDiv">
                    <Link to='/'><img className="logoImg" src="./images/logo.png"/></Link>
                </div>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/reserve'>Reserve a table</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div> 
                <div className="rightSide">
                    <Link to='/subscribe'>Subscribe</Link>
                    <Link to='/faq' className="faq">faq</Link>
                    <input className="search" type="search" placeholder="Search" />
                    <div>
                        <Link to='/cart'><img className="cartImg" src="./images/cart.png"/>
                        </Link>
                    </div>
                    <div className='count'>
                        {count>0 && count}
                    </div>
                </div>
            </div>
        </nav>  
    )
}