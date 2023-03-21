import Home from './Home';
import Add from './Add';
import Show from './Show';
import {Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';
import {is,reducer} from './Reducer';
import React,{useContext,useReducer} from 'react';
export const MyContext=React.createContext();
const App=()=>{     
    const[state,dispatch]=useReducer(reducer,is);
    const rcd={
        state:state,
        dispatch:dispatch
    };
    return(
        <MyContext.Provider value={rcd}>
           <h1>App Component</h1>            
           <hr />
           <Menubar /> 
           <hr />
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />             
                <Route path="/show" element={<Show />} />                
           </Routes>  
        </MyContext.Provider>
    );
}
export default App;