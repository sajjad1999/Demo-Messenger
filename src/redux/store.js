import {createStore, combineReducers} from 'redux'
import {users, filterWord, groupChats, currentChatId, profile} from './reducers'

const store = createStore(combineReducers({
    users,
    filterWord,
    groupChats,
    currentChatId,
    profile
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store