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

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>

                <DialogItem className={styles.D} name="Bekzod" id="1"/>
                <DialogItem name="Abdulaziz" id="2"/>
                <DialogItem name="Sardor" id="3"/>
                <DialogItem name="Ibrohim" id="4"/>

            </div>

            <div className={styles.messages}>
                <div className={styles.message}>Hello!</div>
                <div className={styles.message}>It's me.</div>
                <div className={styles.message}>BekDev</div>

            </div>
        </div>
    )
}

export default Dialogs;