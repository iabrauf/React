import { useState } from "react";
function Basicform(){
    const [name,setName] = useState("");
    const [movie,setMovie] = useState("");
    const [tnc,setTnc] = useState(false);
    function getformData(e){
     console.warn(name,movie,tnc);
        e.preventDefault();
    }
    function clearData(){
        setMovie("");
        setName("");
        setTnc(false);
    }
    return (
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={getformData}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input><br /> <br />
                <select value={movie} onChange={(e)=>setMovie(e.target.value)}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select> <br /> <br />
                <input value={tnc} type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and condition</span><br /> <br />
                <button type="submit">Submit</button>
                <button onClick={clearData}>Clear</button>
            </form> 
        </div>
    )
}
export default Basicform