import React from 'react';
import './App.css';
import TodoItem from './TodoItem';



class App extends React.Component {
  state = {
    input: '',
    todos: [],
    // count: 0
  }

  updateInput = event => {
    this.setState({ input: event.target.value })
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      todos: [ ...this.state.todos, this.state.input],
      input: ''
    })
  }

  deleteElement = index => {
    this.setState({ todos: this.state.todos.filter((x, y) => y !== index) })
  }

  // increment = () => {
  //   this.setState({ 
  //     count: this.state.count + 1 
  //   })
  // }
  
  // decrement = () => {
  //   this.setState({ 
  //     count: this.state.count - 1 
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <div>
            <div>count: {this.state.count}</div>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
          </div> */}
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.updateInput}></input>
            <button>Submit</button>
          </form>
          {this.state.todos.map((item, index) => {
          return (
            <div key={index}>
              {this.state.todos[index]}
              <button onClick={() => this.deleteElement(index)}>delete</button>
            </div>
          )
        })}
        </header>
      </div>
    );
  }
}

export default App;
