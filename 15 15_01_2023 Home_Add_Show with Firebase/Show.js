import { MyContext } from "./App";
import firebase from './Firebase';
import {getDatabase,ref,push,onValue,child,update,remove} from 'firebase/database';
import {useContext, useState} from 'react';
import './Show.css';
const Show=()=>{  
    const rcd=useContext(MyContext);
    const{state,dispatch}=rcd;
    // const[meta,setMeta]=useState({
    //     id:"",
    //     name:"",
    //     roll:"",
    //     email:""
    //     });
    const[records,setRecords]=useState([]);
    //console.log(state.records);
    
    const db=getDatabase();
    const r=ref(db,"users");
    onValue(r,snapdata=>{
         const data=snapdata.val();
         //console.log(data);
         
         let row;
         for(let k in data)
         {
             //console.log(k," : ",data[k]);
             row=data[k];
             //console.log(k);
             //console.log(row);
            //  console.log(row.roll);
            //  console.log(row.name);
            //console.log(row.email);
            //  console.log("-----------------------");
            // meta.id=k;
            // meta.roll=row.roll;
            // meta.name=row.name;
            // meta.email=row.email;
            // setMeta({id:k,name:row.name,roll:row.roll,email:row.email});
            //console.log(meta);
        //  const rcds=[...records];
        //  rcds.push(meta);
        //  setRecords(rcds);
        //  console.log(records);
        setRecords(arr => [...arr , row.name]);
         console.log(records);


         }
         
    });  
    return(
        <>
            <h2>Show</h2>
            {
                state.records.map((row,i)=>{return(
                    <div key={i} className="box">
                        <h2>{row.name}</h2>
                        <p>
                            {row.age} <br />
                            {row.email}
                        </p>
                        <p>
                            <input type="button" value="X" onClick={()=>dispatch({type:"DEL",payload:i})} />
                        </p>
                    </div>
                )})
            }
        </>
    );
}
export default Show;