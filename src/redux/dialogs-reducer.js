let initialState = {
    DialogsUser: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Manya' },
        { id: 3, name: 'Nikitos' },
        { id: 4, name: 'Nastya' },
        { id: 5, name: 'Inga' },
        { id: 6, name: 'React' },
    ],
    MessageUser: [
        { id: 1, message: 'Priv' },
        { id: 2, message: 'opyt' },
        { id: 3, message: 'skolko mozhno, Max' },
        { id: 4, message: 'test' },
    ]
}
const dialogsReduce = (state = initialState, action) => {
    if (action.type === "ADD-MESSAGE") {
        let newMessage = {
            id: 5,
            message: action.message.message
        }
        debugger
        return {
            ...state,
            MessageUser : [...state.MessageUser, newMessage],
            onMessageChange : ''
        };
        
    } 
    return state;
}


const AddMessage = 'ADD-MESSAGE';           // type отвечает за добавление сообщения  

export const newMessageCreator = (message) => ({ type: AddMessage, message })

export default dialogsReduce;