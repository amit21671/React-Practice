import React from 'react';
import { useReducer, useEffect, useRef } from 'react';
function App() {
  const reducer =(state,action)=>{
    console.log(action);
    if(action.type==="INCREMENT"){
      return Number(state)+1;
    }else if(action.type==="DECREMENT"){
      return Number(state)-1;
    }
    
  }
  const initialState=0;
  const[state,dispatch]=useReducer(reducer,initialState);
  // console.log(initialState);
  // console.log(state);
  // console.log(reducer);
  console.log(dispatch);
  return (
    <>
        <div>
              <p>{state}</p>
              <div className='btnStylePosition'>
                  <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
                  <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
              </div>
        </div>
    </>
  )
}

export default App;
