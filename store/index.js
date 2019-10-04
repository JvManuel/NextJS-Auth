import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cookie from 'next-cookies'

const initialState = {
    user: []
}
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'user':
            console.log(action.type)
        default:
        return state
    }
}

export const initializeStore = (preloadedState = initialState) => {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}