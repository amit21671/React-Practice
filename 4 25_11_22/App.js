import {useState} from 'react';
const App=()=>{   
    const[data,setData]=useState({expression:"",res:"",answer:""});
    const handleChange=(evt)=>{               
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
           if(v==="1")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="2")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="3")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="4")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="5")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="6")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="7")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="8")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="9")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="0")
           {
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="+"){
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="-"){
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="*"){
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="/"){
            const r=data.res+""+evt.target.value;        
            setData({...data,res:r});
           }else if(v==="CLR"){
            const r="";        
            setData({...data,res:r});
           }else if(v==="="){
            const r=eval(data.res); 
            
            
            setData({...data,answer:r});
           }
           
                
        
    }  
    console.log("before return : ",data); 
    return(
        <div>
            <h1>App Component Assignment 3</h1>
            Expression : <input type="text" name="expression" value={data.res} onChange={handleChange} /><br />
            Answer : <input type="text" value={data.answer} readOnly /><br />
            <input type="button" name="btn1" id="b1" value="1" 
                onClick={(e)=>handleClick(e,8000)} />
            <input type="button" name="btn2" id="b2" value="2" 
                onClick={handleClick} />
            <input type="button" name="btn3" id="b3" value="3" 
                onClick={handleClick} />
            <input type="button" name="btn4" id="b4" value="4" 
                onClick={handleClick} />  <br />
            <input type="button" name="btn5" id="b5" value="5" 
                onClick={handleClick} />
            <input type="button" name="btn6" id="b6" value="6" 
                onClick={handleClick} />
            <input type="button" name="btn7" id="b7" value="7" 
                onClick={handleClick} />  
            <input type="button" name="btn8" id="b8" value="8" 
                onClick={handleClick} /> <br />
            <input type="button" name="btn9" id="b9" value="9" 
                onClick={handleClick} />
            <input type="button" name="btn10" id="b10" value="0" 
                onClick={handleClick} />
            <input type="button" name="btn11" id="b11" value="+" 
                onClick={handleClick} />  
            <input type="button" name="btn12" id="b12" value="-" 
                onClick={handleClick} /> <br />
            <input type="button" name="btn13" id="b13" value="*" 
                onClick={handleClick} />
            <input type="button" name="btn14" id="b14" value="/" 
                onClick={handleClick} />
            <input type="button" name="btn15" id="b15" value="=" 
                onClick={handleClick} />  
            <input type="button" name="btn16" id="b16" value="CLR" 
                onClick={handleClick} /> <br />

        </div>
    );
}
export default App;