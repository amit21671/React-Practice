import {Link} from 'react-router-dom';
const Menubar=()=>{
    
    return(
        <>
           <Link to="/">Home</Link>&nbsp;&nbsp;
           <Link to="/products/">Products</Link>&nbsp;&nbsp;
           <Link to="/feedback">Feedback</Link>&nbsp;&nbsp;
        </>
    );
}
export default Menubar;