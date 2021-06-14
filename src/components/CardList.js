import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import '../css/style.css';

export default function CardList() {
	const data = useSelector((state) => state.data);
	return (
		<div className="cardListContainer">
			{data
				.sort((a, b) => a.id - b.id)
				.map((card, index) => <Card key={index} id={card.id} name={card.name} isCompleted={card.completed} />)}
		</div>
	);
}
