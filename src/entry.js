import React, {Component} from "react";
import render from 'react-dom';

// Greeting element (Element)
var elementOne = React.createElement(
    "h1", {id:"id_01", className: "header_1"}, "Welcome!"
);

//Age component (Functional Component)
function Age(props){
    return <div>Your age is: {props.age}</div>
 }

//Hobbies component (Pure Component)
class Hobbies extends PureComponent{
    render(){
        return(
            <div>
            <ul>
                Hobbies:
                    <li>Travelling</li>     
                    <li>Walking in the Central Park</li>    
                    <li>Cooking nachos</li>    
            </ul></div>
        );
    }
}

//Main component (Component)
class App extends Component{
    render() {
        return (
            <div>
                <Age age="27"/>
                {elementOne}
                <Hobbies/>
        </div>
        );
     }
  }
render( <App/>, document.getElementById('container'));