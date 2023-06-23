const EDITBOOK = 'EDITBOOK/EDIT_BOOK'
const EDITING_CANCEL = 'EDITBOOK/CANCEL_EDIT'

export const editBook = (id, details) => {
    return {
        type: EDITBOOK,
        payload: { id, details }
    }
}
export const cancelEditing = (id, isEditing) => {
    return {
        type: EDITING_CANCEL,
        payload: { id, isEditing }
    }
}
const intialState = {}

const editBookReducer = (state = intialState, action) => {
    switch (action.type) {
        case EDITBOOK:
            const { details } = action.payload
            return { details, isEditing: true }
        case EDITING_CANCEL:
            const { isEditing } = action.payload
            return { isEditing: !isEditing }
        default:
            return state
    }
}
export default editBookReducer