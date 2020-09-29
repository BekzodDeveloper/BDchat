import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    let postData = [
        {id:1, message:"Hello, I'm Bekzod Developer!", likesCount:18, disLikesCount:8},
        {id:2, message:"Hello, I'm Front-end Developer!", likesCount:11, disLikesCount:22},
        {id:3, message:"Hello, I'm Junior Front-end Developer!", likesCount:101, disLikesCount:32}
    ]

    return (
        <div className={styles.myposts}>
            <h2>My posts</h2>

            <div className={styles.newPost}>
                <p>New post</p>
                <div>
                    <textarea>Write new post here...</textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            
            <Post message={postData[0].message} likes={postData[0].likesCount} dislikes={postData[0].disLikesCount}/>
            <Post message={postData[1].message} likes={postData[1].likesCount} dislikes={postData[1].disLikesCount}/>
            <Post message={postData[2].message} likes={postData[2].likesCount} dislikes={postData[2].disLikesCount}/>

        </div>
    )
}

export default MyPosts;