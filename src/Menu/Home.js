import React, { useState } from "react";

// bootstrap
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// custom CSS
import '../App.css';

//icon 
import img1 from '../img/check.png'
import img2 from '../img/trash.png'


// ---------------------- main ------------- //


// ------------------------------------ untuk task list standar (sebelah kanan) ----------------------- 
// Button component progress
export class ButtonProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Lifecycle for update count
  updateCount() {
    this.setState((prevState, props) => {
        return { count: prevState.count + 1 }
      });
    }
  
  // styling button apabila telah 5 kali klik (completed)
  completeButton = () => {
    const completeCount = this.state.count;
    if (completeCount === 5){
      return {backgroundColor: "green", color: "white"}
    } 
  }

  render() {
    return (
      <div className="button-cust2">
        <p href="/" style={this.completeButton()}>{this.state.count} / 5</p>
        <button
          onClick={() => this.updateCount()}>
            add 1
        </button>
      </div>
      );
    }
}

// class component for progress to do
class TodoListProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [ ],
    };
   
    this.addItem = this.addItem.bind(this);
  }

  // function add new list melalui class
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
       
    e.preventDefault();
  }
  
  render() {
    return (
      <div className="todoListMain input-form">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="Enter progress">
            </input>
            <button type="submit">Add Progress</button>
          </form>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

  // component item list melalui class
class TodoItems extends React.Component {
  createTasks(item) {
    return (
      <Card >
        <Card.Body className="card-cust">
            <li key={item.key} >
              {item.text}
              <ButtonProgress/>
            </li>

          </Card.Body>
      </Card>
    )
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (  
          <ul className="theList">
              {listItems}
          </ul>
    );
  }
};



// ------------------------------------ untuk task list standar (sebelah kiri) ----------------------- 



// function component untuk todo dan Lifting state up
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ color: todo.isCompleted ? "green" : "" }}
    >
      {todo.text}

      <div className="button-cust">
        <button onClick={() => completeTodo(index)}><img src={img1} height="20px" alt="fotoku"/></button>
        <button onClick={() => removeTodo(index)}><img src={img2} height="20px" alt="fotoku"/></button>
      </div>
    </div>
  );
}

// function component untuk form dan lifting state up
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}



// function component untuk utama
function App() {

  // hooks useState
  const [todos, setTodos] = useState([
    {
      text: "Make your own list",
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <div className="todo-list">
        
        {/* --------------- disusun dengan Composing dan Extracting TodoForm dan Todo-------------*/}

        <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Card style={{ backgroundColor: todo.isCompleted ? "#C4FFD2" : "",width: '18rem' }} key={""}>
              <Card.Body className="card-cust" style={{color: todo.isCompleted ? "white" : "", }}>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                  />
              </Card.Body> 
            </Card>
          ))}
      </div>
      <div className="TodoListProgress">
        <TodoListProgress/>
        
      </div>
    </div>
  );
}

export default App;