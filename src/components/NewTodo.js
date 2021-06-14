import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../actions';
import '../css/style.css';
export default function NewTodo() {
	const [ todo, setTodo ] = useState(null);
	const data = useSelector((state) => state.data);
	const dispatch = useDispatch();

	const insert = async () => {
		if (todo == null) return;
		let id = data.length + 1;
		dispatch(add({ id, name: todo, completed: false }));
		setTodo('');
	};
	return (
		<div className="inputContainer">
			<input
				type="text"
				name="todo"
				className="inputTxt"
				autoComplete="off"
				value={todo || ''}
				placeholder="What needs to be done ?"
				onChange={(e) => setTodo(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && insert()}
			/>
			<button onClick={() => insert()} className="addBtn">
				add
			</button>
		</div>
	);
}
