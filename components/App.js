/* ---------- Requires ------------------------------------------------------ */
import React,{Component}    from 'react'

import {lift}               from '../utils'
/* -------------------------------------------------------------------------- */

const AddTodo = () =>
    <div>
        <input type="text" />
        <button>Add</button>
    </div>

const Todo = ({text}) =>
    <div>{text}</div>

const TodoList = ({todos}) =>
    todos.map( (x) => <Todo text={x.text} /> )

/* -------------------------------------------------------------------------- */

const App_style = {
    marginTop: "40px"
}
class App extends Component {

    state: {
        todos: []
    }

    render () {
        return (
            <div style={App_style}>
                <AddTodo />
            </div>
        )
    }

}
/* -------------------------------------------------------------------------- */
export default App
