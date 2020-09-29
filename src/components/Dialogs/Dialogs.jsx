import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {


    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Bekzod"},
        {id: 2, name: "Abdulaziz"},
        {id: 3, name: "Sardor"},
        {id: 4, name: "Ibrohim"}
    ]
    let messagesData = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hey!"}
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>

            <div className={styles.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
            </div>
        </div>
    )
}

export default Dialogs;