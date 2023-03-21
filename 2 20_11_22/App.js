import {useState} from 'react';
const App=()=>{   
    const[data,setData]=useState({fn:"",sn:"",res:""});
    const handleChange=(evt)=>{               
       
       /*
       const name=evt.target.name;
       const value=evt.target.value;
       console.log("name : ",name);
       console.log("value : ",value);
       setData({...data,[name]:value}); 
       */

       setData({...data,[evt.target.name]:evt.target.value});
    }

        const handleClick=(evt,no=0)=>{
            console.log("from handle click");
            console.log("number is : ",no);
            console.log(evt.target);
            console.log("type : ",evt.target.type);
            console.log("value : ",evt.target.value);
            console.log("name : ",evt.target.name);
            console.log("id : ",evt.target.id);
           const v=evt.target.value;
           if(v==="add")
           {
            const r=Number(data.fn)+Number(data.sn);        
            setData({...data,res:r});
           }
           else if(v==="sub")
           {
            const r=Number(data.fn)-Number(data.sn);       
            setData({...data,res:r});
           }
           else if(v==="multiply")
           {
            const r=Number(data.fn)*Number(data.sn);        
            setData({...data,res:r});
           }
           else if(v==="divide")
           {
            const r=Number(data.fn)/Number(data.sn);       
            setData({...data,res:r});
           }
                
        
    }  
    console.log("before return : ",data); 
    return(
        <div>
            <h1>App Component Assignment 1</h1>
            First number : <input type="text" name="fn" value={data.fn} onChange={handleChange} /><br />
            Second number : <input type="text" name="sn" value={data.sn} onChange={handleChange} /><br />
            Result : <input type="text" value={data.res} readOnly /><br />
            <input type="button" name="btn1" id="b1" value="add" 
                onClick={(e)=>handleClick(e,8000)} />
            <input type="button" name="btn2" id="b2" value="sub" 
                onClick={handleClick} />
            <input type="button" name="btn3" id="b3" value="multiply" 
                onClick={handleClick} />
            <input type="button" name="btn4" id="b4" value="divide" 
                onClick={handleClick} />      
        </div>
    );
}
export default App;