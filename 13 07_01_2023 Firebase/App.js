import firebase from './Firebase';
import {getDatabase,ref,push,onValue,child,update,remove} from 'firebase/database';
const App=()=>{
    const handleClick=()=>{
           /*
        const db=getDatabase();
           const r=ref(db,"students");
           push(r,{roll:1001,name:'rohit'});
           push(r,{roll:1002,name:'mohit'});
           push(r,{roll:1003,name:'sohit'});
           push(r,{roll:1004,name:'ajay'});
           push(r,{roll:1005,name:'deepak'});           
           console.log("Data has been inserted");
           */

           /*
           const db=getDatabase();
           const r=ref(db,"students");
           onValue(r,snapdata=>{
                const data=snapdata.val();
                //console.log(data);
                let row;
                for(let k in data)
                {
                    //console.log(k," : ",data[k]);
                    row=data[k];
                    //console.log(row);
                    console.log(row.roll);
                    console.log(row.name);
                    console.log("-----------------------");
                }
           });
           */

           /*
           const db=getDatabase();
           const r=ref(db,"students");
           update(child(r,"-NL6f6dRZZdejiquS2Jk"),{name:'mohit kumar',job:"tester",address:"Noida sector 15"});
           console.log("Data has been updated");
           */

        //    const db=getDatabase();
        //    const r=ref(db,"students");
        //    remove(child(r,"-NL6f6dSSYtwU4O4PEoX"));
        //    console.log("Data has been deleted");

    }
    return(
       <>
            <h1>App Component</h1>
            <p>
                <input type="button" value="Click HERE" onClick={handleClick} />
            </p>
       </>
    );      
}
export default App;