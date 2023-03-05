import { useState } from "react"

function Condition(){
const [data,setData] = useState(2);
    return(
    <div>
      {data==1?
      <h1>User 1</h1>:
      data==2?
      <h1>User 2</h1>:
      <h1>User 3</h1>}
    </div>
)
}
export default Condition