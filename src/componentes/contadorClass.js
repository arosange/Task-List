import React, {Component} from "react";

class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state= {count:0};
    }

    render(){
        return (
            <div>
                <p>Usted ha clickeado {this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Haga Click</button>
                <button onClick={()=>this.setState({count:this.state.count-1})}>Disminuir</button>
                
            </div>
        );
    }
}

export default CounterClass;