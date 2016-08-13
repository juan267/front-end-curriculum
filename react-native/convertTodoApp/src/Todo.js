import React, { Component } from 'react'

export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/todos')
      .then((data) => data.json())
      .then((todos) => this.setState({todos}))
  }

  handleAddTodoClick() {
    const todo = {
      text: this.state.newTodo,
      done: false,
    }

    fetch('http://localhost:3001/todos', {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
      .then((todo) => {
        this.setState({
          todos: [...this.state.todos, todo],
          newTodo: ''
        })
      })
  }

  handleInputChange(e) {
    const newTodo = e.target.value
    this.setState({
      newTodo: newTodo
    })
  }

  handleTodoClick(id) {
    const todos = this.state.todos
    const todo = todos.find((todo) => todo.id === id)
    todo.done = !todo.done
    fetch(`http://localhost:3001/todos/${id}`,{
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
      .then((newTodo) => {
        todos.forEach(function(todo) {
            if (todo.id === newTodo.id) {
              todo.done = newTodo.done
            }
        })
        this.setState({todos: todos})
      })
  }

  handleDeleteClick(id) {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((todo) => {
        const todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({
          todos: todos
        })
      })
  }

  renderTodo(todo, i) {
    return (
      <div key={todo.id} style={styles.todo}>
        <p style={styles.todoText}>
          - {todo.text}
        </p>
          <button onClick={this.handleTodoClick.bind(this, todo.id)}>
            {todo.done === true ? 'Undone' : 'Done'}
          </button>
          <button onClick={this.handleDeleteClick.bind(this, todo.id)}>
            Delete
          </button>
      </div>
    )
  }

  render () {
    return (
      <div style={styles.container}>
        <p style={styles.header}>Awesome Todo App</p>
        <input value={this.state.newTodo} onChange={this.handleInputChange.bind(this)} style={styles.input} placeholder="Todo"/>
        <button onClick={this.handleAddTodoClick.bind(this)} style={styles.button}>
          <p style={styles.text}>Add Todo</p>
        </button>
        <div style={styles.todosContainer}>
          <div style={styles.undone}>
            <p style={styles.todoHeader}>Undone</p>
            {this.state.todos.filter(todo => todo.done === false).map(this.renderTodo.bind(this))}
          </div>
          <div style={styles.done}>
            <p style={styles.todoHeader}>Done</p>
            {this.state.todos.filter(todo => todo.done === true).map(this.renderTodo.bind(this))}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'tomato'
  },
  header: {
    fontWeight: '300',
    color: 'Chartreuse',
    fontSize: 30,
    height: 30
  },
  input: {
    width: 200,
    height: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'DeepSkyBlue',
    width: 150,
    borderRadius: 20,
  },
  todosContainer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30
  },
  undone: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: 0.5,
    backgroundColor: 'LemonChiffon'
  },
  done: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: 0.5,
    backgroundColor: 'MediumAquamarine'
  },
  todo: {
    flexDirection: 'row'
  },
  todoHeader: {
    alignSelf: 'center',
    fontSize: 20,
    color: "FireBrick"
  },
  todoText: {
    fontFamily: 'Helvetica',
    color: 'OliveDrab'
  },
  text: {
    fontFamily: 'Helvetica',
    fontWeight: '900',
    fontSize: 15,
    color: 'black'
  }
}

