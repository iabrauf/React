import { useState } from "react"

function GetinputBox(){
const [data,setData]=useState(null);
const [print ,setPrint] = useState(false);
function getValue(val){
    setData(val.target.value);
    setPrint(false)
}
return (
<div>
    {
        print?
        <h1>{data}</h1>
        :null
    }
    <input type="text" onChange={getValue}/>
    <button onClick={()=>setPrint(true)}>Clickme</button>
</div>
)
}
export default GetinputBox