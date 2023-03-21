import {useState} from 'react';
const App=()=>{   
    const[data,setData]=useState({num:"",isEven:"",isOdd:"",isPrime:"",SumofDigits:"",Reverse:"",isPalindrome:""});
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
           if(evt.target.value==="Go")
           {
            const r=Number(data.num);
            function isEven(number) {
                if(number%2===0){
                    return "Yes";
                }else{
                    return "No";
                } 
            }
            function isOdd(number) {
                if(number%2===0){
                    return "No";
                }else{
                    return "Yes";
                } 
            }
            function isPrime(number){
                for(let d=2;d*d<=r;d++){
                    if(number%d===0){
                        return "No";
                    }else{
                        return "Yes";
                    }
                }  
            }
            function getSum(n){
                let sum = 0;
                while (n !== 0) {
                    sum = sum + n % 10;
                    n = parseInt(n / 10);
                }
                return sum;
            }
            function Reverse(n) {
                return parseInt(n.toString().split("").reverse().join(""))
            }
            function isPalindrome(n) {
                let convertedNumber = n.toString();
                let reverseString = convertedNumber.split("").reverse().join("");
                return reverseString === convertedNumber ? "Yes" : "No";
            }
            setData({...data,isEven:isEven(r),isOdd:isOdd(r),isPrime:isPrime(r),SumofDigits:getSum(r),Reverse:Reverse(r),isPalindrome:isPalindrome(r)});
                
            
           }  
    }  
    console.log("before return : ",data); 
    console.log("Set Data", setData)
    return(
        <div>
            <h1>App Component Assignment 2</h1>
            Enter a Number : <input type="text" name="num" value={data.num} onChange={handleChange} /><br />
            <input type="button" name="btn1" id="b1" value="Go" 
                onClick={(e)=>handleClick(e,8000)} />   <br />  
            
            isEven : <input type="text" value={data.isEven} readOnly /><br />
            isOdd : <input type="text" value={data.isOdd} readOnly /><br />
            isPrime : <input type="text" value={data.isPrime} readOnly /><br />
            SumofDigits : <input type="text" value={data.SumofDigits} readOnly /><br />
            Reverse : <input type="text" value={data.Reverse} readOnly /><br />
            isPalindrome : <input type="text" value={data.isPalindrome} readOnly /><br />
        </div>
    );
}
export default App;