import React from 'react';
import './App.css';
import TodoItem from './TodoItem';



class App extends React.Component {
  state = {
    input: '',
    text: []
  }

  updateInput = event => {
    this.setState({ input: event.target.value })
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      text: [ ...this.state.text, this.state.input],
      input: ''
    })
    console.log(this.state.text)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.updateInput}></input>
            <button>Submit</button>
          </form>
          <TodoItem todo={this.state.text}/>
        </header>
      </div>
    );
  }
}

export default App;
