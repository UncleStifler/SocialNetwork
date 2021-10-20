import {v1} from "uuid";
import profileReducer, {addPostAC, onPostChangeAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";


export type PostsType = {
    id: string
    name: string
    message: string
    likes: number
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

export type ProfilePageType = {
    userPosts: Array<PostsType>
    newPostText: string
}

export type DialogsPageTypes = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageTypes
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (userMessage: string) => void,
    addPost: () => void,
    _onChange: () => void,
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = AddPostActionType |
    ChangeNewTextActionType |
    addNewMessageToDialogType |
    pushNewDialogMessageType


const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = "SEND_MESSAGE"

type AddPostActionType = ReturnType<typeof addPostAC>
// export type AddPostActionType = {
//     type: "ADD_POST"
//     newPostText: string
// }

type ChangeNewTextActionType = ReturnType<typeof onPostChangeAC>
// type ChangeNewTextActionType = {
//     type: "UPDATE_NEW_POST_TEXT"
//     newPostText: string
// }

type addNewMessageToDialogType = ReturnType<typeof sendMessageAC>

type pushNewDialogMessageType = ReturnType<typeof updateNewMessageBodyAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            userPosts: [
                {id: v1(), name: "Juan", message: "Privet Alinka", likes: 48},
                {id: v1(), name: "Jenifer", message: "Hi bratishka", likes: 35},
                {id: v1(), name: "Katia", message: "Hola Joan", likes: 65},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogsData: [
                {id: v1(), name: "Platon"},
                {id: v1(), name: "Alina"},
                {id: v1(), name: "Anna"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Sasha"},
                {id: v1(), name: "Velery"},
            ],
            messagesData: [
                {id: v1(), message: "Hello, how is your IT-KAMASUTRA"},
                {id: v1(), message: "Hello, que tal es tu IT-KAMASUTRA"},
                {id: v1(), message: "Привет, как твоя IT-KAMASUTRA"}
            ],
            newMessageBody: ""
        }
    },
    _onChange() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(callback) {
        this._onChange = callback
    },
    updateNewPostText(userMessage: string) {
        this._state.profilePage.newPostText = userMessage
        this._onChange()
    },
    addPost() {
        const newPost: PostsType = {
            id: v1(),
            name: "Sonia",
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.userPosts.unshift(newPost);
        this._state.profilePage.newPostText = ""
        this._onChange()
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}

export default store;


