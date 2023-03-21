import Home from './Home';
import Products from './Products';
import Feedback from './Feedback';
import {Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';
import ErrorMsg from './ErrorMsg';
import ProductDetails from './ProductDetails'
const App=()=>{ 
    return(
        <>
           <h1>App Component 2.0</h1>            
           <hr />
           <Menubar /> 
           <hr />
           
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/" element={<Products />} />
                <Route path="/productdetails/:pid" element={<ProductDetails />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="*" element={<ErrorMsg />} />
           </Routes>  
        </>
    );
}
export default App;