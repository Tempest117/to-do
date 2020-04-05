import React from 'react';
import './snav.css';


class Snav extends React.Component{
    constructor(props){
    super(props);
    }
    
    
    keyPress(){
        alert("Future rollout");
    }


    render(){
        return(
        <div class="sidenav">
            <a href="#">To-Do List</a>
            <div id="buttondiv">
                <button id="add" onClick={()=>this.keyPress()}>+</button>
            </div>
        </div>
        );
    }
}

export default Snav;