import React from 'react'
import LiveText from './components/LiveText'
import MoveableList from './components/MoveableList'

export const LiveTextComponent = ({ image = '', bubble = [] }) => {
  return <LiveText image={image} bubble={bubble} />
}

export const MoveableListComponent = ({ data }) => {
	return <MoveableList data={data} />
  }
