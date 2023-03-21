import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate,useParams,useLocation,Link} from 'react-router-dom';

const Products=()=>{
    const[items,setItems]=useState([]);
     const nav=useNavigate();
    
     //console.log(url);
     useEffect(()=>{
        const url="https://fakestoreapi.com/products";
        axios.get(url)
        .then((response) => {    
              //console.log(response.data);
              setItems(response.data);
                   
        })
        .catch((error) => {          
          console.log(error);
        });
        //console.log(items);
     },[]);
    return(
        <>
            <h2>Products</h2>
            <p>
                All 20 Products List
            </p>
            <hr />
            {
                items.map(item=>{return(
                    <div key={item.id} className="box">
                       <h2>{item.id} {item.title}</h2>
                       <p>
                       <Link to={/productdetails/+item.id}>
                            <img src= {item.image} value={item.id} width={150} height={150} 
                            alt={item.description} />
                        </Link>&nbsp;&nbsp;
                       <br />
                        <>$ </>{item.price}
                       </p>
                       {/* <input type="button" value="X" name={user.id} onClick={(e)=>handleDelete(e)} /> */}
                    </div>
                    
                )})
            }
            <p>
                <input type="button" value="Go to Home" onClick={()=>nav("/")} />
            </p>
        </>
    );
}
export default Products;