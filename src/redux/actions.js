export const addFilterWord = (word) => ({
    type: 'ADD_FILTER_WORD',
    word
})
export const addCurrentChatId = (id) => ({
    type: 'ADD_CURRENT_CHAT_ID',
    id
})
export const addPVMessage = (id, message) => ({
    type: 'ADD_PV_MESSAGE',
    id,
    message
})
export const addGroupChat = (message) => ({
    type: 'ADD_GROUP_CHAT',
    message
})
export const signUp = ({userName,pass,id}) => ({
    type: 'SIGN_UP',
    userName,
    pass,
    id
})