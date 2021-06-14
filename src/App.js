import React from 'react';
import NewTodo from './components/NewTodo';
import CardList from './components/CardList';
import './css/style.css';
function App() {
	return (
		<div className="app">
			<h1 className="title">Track Your Task</h1>
			<NewTodo />
			<CardList />
		</div>
	);
}

export default App;
