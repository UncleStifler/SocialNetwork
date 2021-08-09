import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";
import NewDialogMessage from "./Message/NewMessage/NewDialogMessage";

type DialogsPropsType = {
    dialog: Array<DialogsType>
    message: Array<MessagesType>
}

const Dialogs = (props: DialogsPropsType) => {

    let showDialogElements = props.dialog.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let showMessageElemets = props.message.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    return (
        <div>
            <div className={style.dialogs_global}>
                <div className={style.dialogs}>
                    {showDialogElements}
                </div>
                <div className={style.messages}>
                    {showMessageElemets}
                </div>
            </div>
            <NewDialogMessage/>
        </div>
    )
}

export default Dialogs;