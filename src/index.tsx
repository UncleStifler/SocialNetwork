import './index.css';
import App from "./App";
import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, store} from "./redux/redux-store";
import {Provider} from "react-redux";


export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App
                    state={state}
                    // addPost={store.addPost.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                    // dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
