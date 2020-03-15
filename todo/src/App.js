import React from 'react';
import './App.css';



class App extends React.Component {
  state = {
    input: '',
    todos: [],
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

  render() {
    return (
      <div className="App">
        <h2>Todos:</h2>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.updateInput}></input>
          <button>Submit</button>
        </form>
        {this.state.todos.map((item, index) => {
          return (
            <div className="todo" key={index}>
              {this.state.todos[index]}
              <button onClick={() => this.deleteElement(index)}>done</button>
            </div>
            )
        })}
      </div>
    );
  }
}

export default App;
