import dialogsReduce from "./dialogs-reducer";
import profileReduce from "./profile-reducer";

let store = {


    _state: {

        ProfilePage: {
            PostUser: [
                { id: 1, post: 'Priv', likecount: 2 },
                { id: 2, post: 'opyat', likecount: 0 },
                { id: 3, post: 'skolko mozhno, Max', likecount: 66 },
            ],
            onPostChange: 'Hey'
        },
        DialogsPage: {
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
            ],
            onMessageChange: 'hello!'
        },
        Sidebar: [
            { id: 1, avatarka: 'https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg', name: 'Max' },
            { id: 1, avatarka: 'https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg', name: 'Vika' },
            { id: 1, avatarka: 'https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg', name: 'Masha' }
        ]

    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscribe = observer;
    },
    _callSubscribe() {
        
    },
    dispatch(action) {
        this._state.ProfilePage = profileReduce(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReduce(this._state.DialogsPage, action);

        this._callSubscribe(this._state);
    }
}



export default store;