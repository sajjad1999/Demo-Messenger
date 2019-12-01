import {defaultUsers, defaultGroupChat,defaultProfile} from '../utils/fakeData'


export const users = (state = defaultUsers, action) => {
    switch(action.type){
        case 'ADD_PV_MESSAGE':
            return state.map(user => {
                if(user.id === action.id){
                    return {...user, pvChats: [...user.pvChats,action.message]}
                }else{
                    return user
                }
            })
        default:
            return state
    }
}

export const filterWord = (state = '', action) => {
    switch(action.type){
        case 'ADD_FILTER_WORD':
            return action.word
        default:
            return state
    }
}



export const groupChats = (state = defaultGroupChat,action) => {
    switch(action.type){
        case 'ADD_GROUP_CHAT':
            return [...state,action.message]
        default:
            return state
    }
}

export const currentChatId = (state = defaultUsers[0].id,action) => {
    switch(action.type){
        case 'ADD_CURRENT_CHAT_ID':
            return action.id
        default:
            return state
    }
}

export const profile = (state = defaultProfile, action) => {
    switch(action.type){
        case 'SIGN_UP':
            return {
                name: action.userName,
                pass: action.pass,
                id: action.id
            }
        default:
            return state
    }
}