import {useEffect, useState} from 'react';
import axios from 'axios';
import './Show.css';
const Show=()=>{  
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://63c30566e3abfa59bdb750df.mockapi.io/Users')
        .then((response) => {          
          //console.log(response.status);
          //console.log(response.data);
          setUsers(response.data);
        })
        .catch((error) => {        
          console.log(error);
        });
    },[users]);
    const handleDelete=((evt)=>{
        //console.log(evt.target.name);
        const url='https://63c30566e3abfa59bdb750df.mockapi.io/Users/'+evt.target.name;
        axios.delete(url)
          .then((response) => {
                console.log(response);
          })
          .catch((error) => {
            console.log(error);
          }); 
    });
    return(
        <>
            <h2>Show</h2>
            <hr />
            {
                users.map(user=>{return(
                    <div key={user.id} className="box">
                       <h2>{user.name}</h2>
                       <p>
                        {user.age}<br />
                        {user.email}
                       </p>
                       <input type="button" value="X" name={user.id} onClick={(e)=>handleDelete(e)} />
                    </div>
                    
                )})
            }
        </>
    );
}
export default Show;