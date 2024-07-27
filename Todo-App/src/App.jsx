// ----------------------------------------
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
	/* This is retrieving the
value stored in the "todos" key from the browser's localStorage. */
	const localStorageItems = JSON.parse(localStorage.getItem("todos"));

	const [todo, setTodo] = useState("");
	const [todoItem, setTodoItem] = useState(localStorageItems || []);

	const handleInput = (event) => {
		setTodo(event.target.value);
	};

	const addTodo = () => {
		// This will return an alert if the todo is empty
		if (!todo) return alert("Please add a todo");
		// If the todo is not empty, add it to the todo list and clear the input field
		const item = {
			id: uuid(),
			name: todo.trim(),
			isCompleted: false,
		};

		const updatedTodoItems = [...todoItem, item];
		setTodoItem(updatedTodoItems);
		setTodo("");
		localStorage.setItem("todos", JSON.stringify(updatedTodoItems));
	};

	const deleteTodo = (id) => {
		const updatedTodoItems = todoItem.filter(
			(eachTodo) => eachTodo.id !== id
		);
		setTodoItem(updatedTodoItems);
		localStorage.setItem("todos", JSON.stringify(updatedTodoItems));
	};

	const completeTodo = (id) => {
		const updatedTodoItems = todoItem.map((eachTodo) => {
			return eachTodo.id === id
				? { ...eachTodo, isCompleted: !eachTodo.isCompleted }
				: eachTodo;
		});
		setTodoItem(updatedTodoItems);
		localStorage.setItem("todos", JSON.stringify(updatedTodoItems));
	};

	return (
		<div className="app-container">
			<h1 className="heading">Todo-App</h1>

			<div className="input-container">
				<input
					type="text"
					className="input"
					value={todo}
					onChange={handleInput}
				/>
				<button type="button" className="add-button" onClick={addTodo}>
					Add
				</button>
			</div>

			<div className="todo-container">
				<h3 className="todo-heading">
					Todos -{" "}
					<span className="todo-count">{todoItem.length}</span> Tasks
				</h3>

				{todoItem.length === 0 && (
					<div className="no-todo-container">
						<p className="no-todo">No tasks to show</p>
					</div>
				)}

				{todoItem.map((eachTodo) => (
					<TodoItem
						key={eachTodo.id}
						todo={eachTodo}
						handleDelete={deleteTodo}
						completeTodo={completeTodo}
						slNo={todoItem.indexOf(eachTodo) + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
