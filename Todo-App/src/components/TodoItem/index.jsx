import "./style.css";

const TodoItem = ({ todo, handleDelete, completeTodo, slNo }) => {
	const { id, name, isCompleted } = todo;
	return (
		<div className={`todo-item-container ${isCompleted && "completed"}`}>
			<div className="text-container">
				<h3 className="todo-item">
					<span className="sl-no">{slNo}.</span>
					{name}
				</h3>
			</div>
			<div className="button-container">
				<button
					onClick={() => completeTodo(id)}
					className={`complete-button btn ${isCompleted && "pending"}`}
				>
					{isCompleted ? "Undo" : "Complete"}
				</button>
				<button
					onClick={() => handleDelete(id)}
					className="delete-button btn"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
