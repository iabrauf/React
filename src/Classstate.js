import { Component } from "react";
class Classstate extends Component{
    constructor(){
        super();
        this.state = {
            data :'Abdul'
        }
    }
    updateData(){
        this.setState({data:"Rauf"})
    } 
    render(){
        return(
            <div>
         <h1>{this.state.data}</h1>
        <button onClick={()=>this.updateData()}>Click me</button>
         </div>
        );
    }
    
    
}
export default Classstate;