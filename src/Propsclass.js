import { Component } from "react"

class Propsclass extends Component{
    render(){
    return(  
        <div>
            <h1>Hello {this.props.name}</h1>
            <h2>Hello {this.props.email}</h2>
        </div>
    );
   }
}
export default Propsclass