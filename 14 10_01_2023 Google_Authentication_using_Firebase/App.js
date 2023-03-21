import firebase from './Firebase';
import {useState} from 'react';
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from 'firebase/auth';
const App=()=>{ 
    const[data,setData]=useState({name:"",email:"",url:"",isLogged:false});  
    const handleLogin=()=>{      
            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            provider.setCustomParameters({
              'login_hint': 'username@gmail.com'
            });
            const auth = getAuth();           
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                //console.log(user);
                setData({name:user.displayName,email:user.email,url:user.photoURL,isLogged:true});
                // ...
              }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
              });
    }

    const handleLogout=()=>{
            const auth = getAuth();
            signOut(auth).then(() => {
              // Sign-out successful.
              setData({name:"",email:"",url:"",isLogged:false});
            }).catch((error) => {
              // An error happened.
            });
    }
    return(
        <>
            <h1>React App</h1>
            {
              data.isLogged? 
              <>
                  {data.name} <br />
                  {data.email} <br />
                  <img src={data.url} referrerPolicy="no-referrer" alt={data.name} /> <br />
                  <input type="button" value="logout" onClick={handleLogout} />
              </>
              :
              <>
                    Wecome GUEST <br />
                    Please login to explore more <br />
                    <input type="button" value="login" onClick={handleLogin} />
              </>
            }
            
        </>
    );
}
export default App;