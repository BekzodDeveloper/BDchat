import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Bekzod"},
        {id: 2, name: "Abdulaziz"},
        {id: 3, name: "Sardor"},
        {id: 4, name: "Ibrohim"}
    ]
    let messages = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hey!"},
        {id: 2, message: "Hey!"},
        {id: 2, message: "Hey!"}

    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
                {/* <=> */}
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
                {/*<DialogItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
                {/*<DialogItem name={dialogs[3].name} id={dialogs[3].id}/>*/}
            </div>

            <div className={styles.messages}>
                {messagesElements}
                {/*<Message message={messages[0].message} id={messages[0].id} />*/}
                {/*<Message message={messages[1].message} id={messages[1].id} />*/}
            </div>
        </div>
    )
}

export default Dialogs;