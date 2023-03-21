import {useState,useEffect} from 'react';
import './App.css';
const App=()=>{   
    const[users,setUsers]=useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('https://randomuser.me/api/?results=1')
            .then((response) => response.json())
                .then((data) => {                       
                        setUsers(data.results);                      
                });
               
                
          },5000);
 
            
      });
    return(
        <>
            <h1>Assignment 8</h1>
            
            
            {
                users.map((user,i)=>{return(
                    <div key={i} className="box">
                        <p>
                            <img src={user.picture.large} alt={user.name.first} />
                        </p>
                        <h2>{user.name.first} {user.name.last}</h2>
                        <p>
                            {user.gender} <br />
                            {user.dob.age} <br />
                            {user.phone}
                        </p>
                    </div>
                )})
            }
            <hr />

          
            
        </>
    );
}
export default App;