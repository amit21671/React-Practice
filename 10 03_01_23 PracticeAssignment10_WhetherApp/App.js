import axios from 'axios';
import {useReducer,useState} from 'react';
import {is,reducer} from './Reducer';
import './App.css';
const App=()=>{   
    const[data,setData]=useState("");
    const[state,dispatch]=useReducer(reducer,is); 
    const handleChange=(evt)=>{
        //console.log(data);            
        setData({...data,[evt.target.name]:evt.target.value});
        
     }
     const handleClick=(evt,no=0)=>{
       let rcd={
        "City_Name":"",
        "Country_Name":"",
        "Weather":"",
        "Weather_Description":"",
        "Temperature_in_Celcius":'',
        "Min_Temperature":'',
        "Max_Temperature":''

       }
        const url="https://api.openweathermap.org/data/2.5/weather?q="+data.num+"&appid=ecdf0d3a10c430f1a90e79bdb3cace1a&units=metric";
        if(evt.target.value==="Add"){
            axios.get(url)
          .then((result) => {    
                    console.log(result.data.sys.country);        
                    rcd.City_Name=result.data.name;
                    rcd.Country_Name=result.data.sys.country;
                    rcd.Weather=result.data.weather[0].main;
                    rcd.Weather_Description=result.data.weather[0].description;
                    rcd.Temperature_in_Celcius=result.data.main.temp;
                    rcd.Min_Temperature=result.data.main.temp_min;
                    rcd.Max_Temperature=result.data.main.temp_max;
                    dispatch({type:"ADD",payload:rcd});            
            
          })
          .catch((error) => {          
            console.log(error);
          });
                  
        }
       }
    return(
        <>
            <h1>Assignment 10</h1>
            Enter City : <input type="text" name="num" onChange={handleChange}/><br />
            <input type="button" name="btn1" id="b1" value="Add" 
                onClick={(e)=>handleClick(e,8000)} />   <br /> 
            
            <hr />
            <h2>Show</h2>
      {
          state.records.map((row,i)=>{return(
              <div key={i} className="box">
                  <h2>City Name:{row.City_Name}</h2>
                  <h3>Country Name:{row.Country_Name}</h3>
                  <p>
                  Weather:  {row.weather} <br />
                  Weather Description:    {row.Weather_Description} <br />
                  Temperature in Celcius:    {row.Temperature_in_Celcius} <br />
                  Min Temperature:    {row.Min_Temperature} <br />
                  Max Temperature:    {row.Max_Temperature} <br />
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
export default App;