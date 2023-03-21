import Home from './Home';
import Add from './Add';
import Show from './Show';
import {Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';


const App=()=>{     
   
    return(
      <>
           <h1>Assignment 11</h1>            
           <hr />
           <Menubar /> 
           <hr />
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />             
                <Route path="/show" element={<Show />} />                
           </Routes>  
       </>
    );
}
export default App;