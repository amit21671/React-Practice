import {Link} from 'react-router-dom';
const Menubar=()=>{   
    return(
        <>
           <Link to="/">Home</Link>&nbsp;&nbsp;
           <Link to="/add">Add</Link>&nbsp;&nbsp;
           <Link to="/show">show</Link>&nbsp;&nbsp;
        </>
    );
}
export default Menubar;