import React from 'react'
import LiveText from './components/LiveText'
import MoveableList from './components/MoveableList'
import Tooltip from './components/Tooltip'
import BeautifulCard from './components/BeautifulCard'
import CoolPopup from './components/CoolPopup'

export const LiveTextComponent = ({ image = '', bubble = [] }) => {
  return <LiveText image={image} bubble={bubble} />
}

export const MoveableListComponent = ({ data }) => {
	return <MoveableList data={data} />
}

export const TooltipComponent = ({content = null, clickable, border, type, place, id}) => {
  return <Tooltip content={content} clickable={clickable} border={border} type={type} place={place} id={id} />
}

export const BeautifulCardComponent = () => {
  return <BeautifulCard />
}

export const CoolPopupComponent = ({ title, content, navigator, onClose, onChangeNavigator }) => {
  return <CoolPopup title={title} content={content} navigator={navigator} onClose={onClose} onChangeNavigator={onChangeNavigator} />
}