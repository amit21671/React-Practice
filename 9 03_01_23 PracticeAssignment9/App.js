import {useState} from 'react';
//import {useParams} from 'react-router-dom';
import './App.css';
const App=()=>{   

    const[users,setUsers]=useState([]);
    const[data,setData]=useState();
    const handleChange=(evt)=>{
        console.log(data);            
        setData({...data,[evt.target.name]:evt.target.value});
        
     }
     const handleClick=(evt,no=0)=>{
        const url="https://randomuser.me/api/?results="+data.num;
        if(evt.target.value==="Go"){
            fetch(url)
            .then((response) => response.json())
                .then((data) => {                       
                        setUsers(data.results);                      
                });
        }
       } 

    return(
        <>
            <h1>Assignment 9</h1>
            Number of User : <input type="text" name="num" onChange={handleChange}/><br />
            <input type="button" name="btn1" id="b1" value="Go" 
                onClick={(e)=>handleClick(e,8000)} />   <br /> 
            
            <hr />
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