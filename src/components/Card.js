import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle, remove } from '../actions';
import '../css/style.css';
export default function Card({ id, name, isCompleted }) {
	const dispatch = useDispatch();

	const toggleStatus = (id) => {
		dispatch(toggle({ id }));
	};
	const removeItem = (id) => {
		dispatch(remove({ id }));
	};
	return (
		<div className="card">
			<div className="status">
				<div
					onClick={() => toggleStatus(id)}
					className="checkbox"
					style={{ borderColor: isCompleted ? 'green' : '#ccc' }}
				>
					<div className="checked" style={{ backgroundColor: isCompleted ? 'green' : '#ccc' }} />
				</div>
			</div>
			<div
				className="todo"
				style={{
					textDecorationLine: isCompleted ? 'line-through' : null,
					textDecorationStyle: isCompleted ? 'solid' : null
				}}
			>
				{name}
			</div>
			<i onClick={() => removeItem(id)} className="fa fa-times close" />
		</div>
	);
}
