
const data = [
    {src: "images/coffeebean.webp",
     name: "Americano",
     price: "12$"
    },
    {src: "images/sweetest-coffee-beans.webp",
     name: "Black Coffee",
     price: "9$"
    },
    {src: "images/capuccino.jpg",
     name: "Capuccino",
     price: "11$"
    },
    {src: "images/l_coffee beans large.jpg",
     name: "Arabica",
     price: "7$"
    },
    {src: "images/images.jpg",
     name: "Macchiato",
     price: "11$"
    },
    {src: "images/lungo.jpeg",
     name: "Lungo",
     price: "8$"
    }
]

export default function Container() {
    const newData=data.map((val,i)=><div className="imgDiv"><img key={i} src={val.src} className="shopImg"/> <h4>{val.name}</h4> <p>{val.price}</p> <button>Add to cart</button></div>);
        return(
        <div className="contDiv">
            {newData}
        </div>
    )
}