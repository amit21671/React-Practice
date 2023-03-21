import {useState} from 'react';
import axios from 'axios';
const Add=()=>{
    const[data,setData]=useState({name:"",age:"",email:""});

    const handleChange=(evt)=>{
        setData({...data,[evt.target.name]:evt.target.value});
    }
    const handleSave=()=>{
        //console.log(data);
        axios.post('https://63c30566e3abfa59bdb750df.mockapi.io/Users', {
            name: data.name,
            age: data.age,
            email:data.email
          })
          .then((response) => {
                console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
    return(
        <>
            <h2>Add</h2>
            Name : <input name="name" type="text" value={data.name} onChange={handleChange}  /><br />
            Age : <input name="age" type="number" value={data.age} onChange={handleChange} /> <br />
            Email : <input name="email" type="email" value={data.email} onChange={handleChange} /> <br />
            <input type="button" value="Save" onClick={handleSave} />                
        </> 
    );
}
export default Add;