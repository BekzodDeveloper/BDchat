import React from 'react';
import styles from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.ava_message}>
                <div className={styles.property}><img
                    src="https://dreambuilders.dk/wp-content/uploads/2015/03/myAvatar-1.png" alt=""/></div>
                <span className={styles.who}>BekDev</span>
                <div>{props.message}</div>
            </div>
            <div>
                <span>Likes: </span> {props.likes}
                <span>Dislikes: </span> {props.dislikes}

            </div>
            <div>
                <span className={styles.marks}>LIKE</span>
                <span className={styles.marks}>DISLIKE</span>
            </div>
        </div>
    )
}
export default Post;