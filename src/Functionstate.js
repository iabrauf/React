import { useState } from "react";
function Functionstate(){
    const [data,setData] = useState('Abdul');
    function updateData(){
        setData('Rauf');
    }
    console.warn("------");
    return(
        <div>
     <h1>{data}</h1>
     <button onClick={updateData}>Click me</button>
     </div>
    );
}
export default Functionstate;