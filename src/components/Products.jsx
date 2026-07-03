import { useState } from "react";
import "../styles/Products.css";

function Products() {

    const categories = [
        "5G & Telecommunications",
        "Agritech & FoodTech",
        "Artificial Intelligence",
        "Big Data & Analytics",
        "Blockchain",
        "Cloud Services",
        "Coding & Development",
        "Consumer Tech",
        "Smart Home",
        "Creative Economy",
        "Cyber Security"
    ];

    const [selected, setSelected] = useState([]);

    function handleClick(item){

        if(selected.includes(item)){
            setSelected(selected.filter((value)=> value !== item));
        }else{
            setSelected([...selected,item]);
        }

    }

    return (

        <div className="products">

            <h3>Products & Services</h3>

            <p>Select at least one category</p>

            <div className="category-container">

                {
                    categories.map((item,index)=>{

                        return(

                            <button
                                key={index}
                                className={selected.includes(item) ? "active" : ""}
                                onClick={()=>handleClick(item)}
                                type="button"
                            >
                                {item}
                            </button>

                        )

                    })
                }

            </div>

        </div>

    );

}

export default Products;