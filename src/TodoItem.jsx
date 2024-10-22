export const TodoItem = ({completed, id, title, toggleTodo, deleteTodo}) => {
    return (<>
        <li>
            <label htmlFor={id}>
                <input type="checkbox" id={id} checked={completed}
                       onChange={e => toggleTodo(id, e.target.checked)}/> {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </li>
    </>);
};