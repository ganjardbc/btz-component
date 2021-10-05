import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
import style from './styles'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const DNDContainer = (props) => {
	{
    	const [cards, setCards] = useState(props.data ? props.data : [])

    	const moveCard = useCallback(
      		(dragIndex, hoverIndex) => {
				const dragCard = cards[dragIndex]
				setCards(
					update(cards, {
						$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
					}),
				)
			},
			[cards],
    	)

    	const renderCard = (card, index) => {
      		return (
				<Card
					key={card.id}
					index={index}
					id={card.id}
					content={card.content}
					moveCard={moveCard}
				/>
      		)
    	}

		return (
			<DndProvider backend={HTML5Backend}>
				<div style={style.place}>
					{cards.map((card, i) => {
						var item = (card && card.id) && renderCard(card, i)
						return item
					})}
				</div>
			</DndProvider>
		)
	}
}

export default DNDContainer
