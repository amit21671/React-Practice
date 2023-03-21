import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const ProductDetails = () => {
    const [item, setItem] = useState([]);
    const{pid}=useParams();
    //console.log(pid);
    const url = `https://fakestoreapi.com/products/${pid}`;
    //console.log(url);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                //console.log(response.data);
                const rcds=[...item];
                rcds.push(response.data);
                setItem(rcds);

            })
            .catch((error) => {
                console.log(error);
            });
        //console.log(items);
    }, []);
    return (
        <>
            ProductDetails
            {
                    item.map(item=>{return(
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <h3>
                                <img src={item.image} width={150} height={150} alt={item.description} />
                                <br />
                                <>$ </>{item.price}
                            </h3>
                            <p>
                            Category:    {item.category} <br />
                            Description:    {item.description} <br />
                            Rating:   {item.rating.rate} <br />
                            Rating Count:   {item.rating.count}
                            </p>
                        </div>
                    )})
            }
            
            
        </>
    );
}
export default ProductDetails;