import {useState} from "react";

const App = () => {
    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState([]);
    const handleSubmit = e => {
        e.preventDefault();
        setTodos(currentTodos => {
            return [...currentTodos, {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false
            }];
        });
        setNewItem('');
    };

    const toggleTodo = (id, completed) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed};
                }
                return todo;
            });
        });
    };

    const deleteTodo = id => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    };

    return (<>
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">
                    New Item
                </label>
                <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
            </div>
            <button className="btn">
                Add
            </button>
        </form>
        <h1 className="header">
            To Do List
        </h1>
        {todos.length === 0 && 'No Todos'}
        <ul className="list">
            {todos.map(todo => {
                return <li key={todo.id}>
                    <label htmlFor={todo.id}>
                        <input type="checkbox" id={todo.id} checked={todo.completed}
                               onChange={e => toggleTodo(todo.id, e.target.checked)}/> {todo.title}
                    </label>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                </li>;
            })}
        </ul>
    </>);
};

export default App;
