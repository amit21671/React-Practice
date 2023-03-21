import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Products=()=>{
    // const{fullname}=useParams();
    // const{pathname}=useLocation();
    const[items,setItems]=useState([]);

     const nav=useNavigate();
     const url="https://fakestoreapi.com/products";
     //console.log(url);
     const item={
		"id": '',
		"title": "",
		"price": '',
		"description": "",
		"category": "",
		"image": "",
		"rate": '',
		"count": ''
		
}
     axios.get(url)
     .then((response) => {    
           //console.log(response.data);
           for(let i=0;i<=response.data.length;i++){
             //console.log(response.data[i].title);
             item.id =response.data[i].id;
             item.title=response.data[i].title;
             item.price=response.data[i].price;
             item.description=response.data[i].description;
             item.category=response.data[i].category;
             item.image=response.data[i].image;
             item.rate=response.data[i].rating.rate;
             item.count=response.data[i].rating.count;

            console.log(item)
           } 
           setItems(...items,items.push(item));
           console.log(items)       
     })
     .catch((error) => {          
       console.log(error);
     });
     //console.log(items);
             
   
    return(
        <>
            <h2>Products</h2>
            <p>
                All 20 Products List
            </p>
 
            <p>
                <input type="button" value="Go to Home" onClick={()=>nav("/")} />
            </p>
        </>
    );
}
export default Products;