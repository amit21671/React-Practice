import {useState,useContext} from 'react';
import firebase from './Firebase';
import {getDatabase,ref,push,onValue,child,update,remove} from 'firebase/database';
import { MyContext } from "./App";
const Add=()=>{
    const[data,setData]=useState({name:"",age:"",email:""});
    const rcd=useContext(MyContext);
    const{state,dispatch}=rcd;
    const handleChange=(evt)=>{
        setData({...data,[evt.target.name]:evt.target.value});
    }
    const handleSave=()=>{
        //console.log(data);
        //dispatch({type:"ADD",payload:data});
        const db=getDatabase();
        const r=ref(db,"users");
        push(r,{name:data.name,age:data.age,email:data.email});         
        console.log("Data has been inserted");
    }
    //console.log(state.records);
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