import React from 'react'
import LiveText from './components/LiveText'
import MoveableList from './components/MoveableList'
import Tooltip from './components/Tooltip'
import BeautifulCard from './components/BeautifulCard'
import CoolPopup from './components/CoolPopup'
import FlippingCard from './components/FlippingCard'
import CalendarHeatMap from './components/CalendarHeatMap'
import ImageLoader from './components/ImageLoader'
import SweetAlert from './components/SweetAlert'
import DatePicker from './components/DatePicker'
import DateDropDown from './components/DateDropDown'

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

export const FlippingCardComponent = ({frontLabel, backLabel, frontButtonLabel, backLabelButton, frontContent, backContent}) => {
  return <FlippingCard frontLabel={frontLabel} backLabel={backLabel} frontButtonLabel={frontButtonLabel} backLabelButton={backLabelButton} frontContent={frontContent} backContent={backContent} />
}

export const CalendarHeatMapComponent = ({startDate = '', endDate = '', values = []}) => {
  return <CalendarHeatMap startDate={startDate} endDate={endDate} values={values} />
}

export const ImageLoaderComponent = ({image = '', title = '', description = '', overlayPosition = '', enableOverlay = false}) => {
  return <ImageLoader image={image} title={title} description={description} overlayPosition={overlayPosition} enableOverlay={enableOverlay} />
}

export const SweetAlertComponent = ({type, label, title, description, onClose, onOk}) => {
  return <SweetAlert type={type} label={label} title={title} description={description} onClose={onClose} onOk={onOk} />
}

export const DatePickerComponent = ({onChange, formatFirstDate = '', formatEndDate = '', direction, months}) => {
  return <DatePicker onChange={onChange} formatFirstDate={formatFirstDate} formatEndDate={formatEndDate} direction={direction} months={months} />
}

export const DateDropDownComponent = ({onChange, formatDate = ''}) => {
  return <DateDropDown onChange={onChange} formatDate={formatDate} />
}