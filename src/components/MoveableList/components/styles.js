const card = {
    border: '2px dashed gray',
    padding: '10px 15px',
    margin: '5px'
}

export default {
    place: {
        width: '100%',
    },
    container: {
        ...card
    },
    containerWhite: {
        ...card,
        backgroundColor: 'white',
        cursor: 'move',
    }
}