import Demo from "./Demo";
import Student from "./Student";
const App=()=>{
    return(
        <>
        <h1>Component 1 Attached
        <Demo/>
        </h1>
        <h2>
        Component 2 Attached
        <Student/>
        </h2>
        
        </>
    )
}

export default App;