import React from 'react';
import './App.css';
import Snav from './snav';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value){
    //update react state 
    this.setState({
      [key]:value
    });
  }


  addItem(){

    //create item with unique id
    const newItem= {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset new Item input
    this.setState({
      list,
      newItem:""
    })
  }


  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item=> item.id !== id);

    this.setState({list: updatedList});
  }

  keyPress(e){

    if(e.key === 'Enter'){
      const trimString = e.target.value.trim();
      if(trimString === ""){
        alert("Enter Something");
      }else{
        console.log('do validate');
        this.addItem();
      }
    }
  }


  render(){
    return ( 
      <React.Fragment>
        <Snav/>
        <div id="myDIV" class="header">
        <h2>My To Do List</h2>
        </div>
        <div>
          <div className="App">
          <div className="App-2">
            Add an Item...
            <br/>
            <input
            type="text"
            placeholder="Type Item Here..."
            value={this.state.newItem}
            onChange={e=>this.updateInput("newItem", e.target.value)}
            onKeyDown={e=>this.keyPress(e)}/>
            <div className="form-actions"> 
            </div>
            <br/>
            <div className="list-box">
              <ul>
              {this.state.list.map(item=> {
                return(
                  <li key={item.id}>
                    {item.value}
                    <button className="delete"
                      onClick={() => this.deleteItem(item.id)}
                    >
                    X
                    </button>
                </li>
                );
              })}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
