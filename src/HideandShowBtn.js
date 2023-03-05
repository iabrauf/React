import { useState } from "react";
function HideandShowBtn(){
    const [status,setStatus] = useState(true);
    return(
        <div>
            {
            status? <h1>Hello World</h1>:null
                    
            }
            {/* <button onClick={()=>setStatus(false)}>Hide</button> */}
            {/* <button onClick={()=>setStatus(true)}>Show</button> */}
            {/* <button onClick={()=>status?setStatus(false):setStatus(true)}>Toggle</button> */}
            {/* or */}
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}
export default HideandShowBtn