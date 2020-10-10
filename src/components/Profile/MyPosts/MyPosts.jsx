import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = () => {
    let posts = [
        {id:1, message:"Hello, I'm Bekzod Developer!", likesCount:18, disLikesCount:8},
        {id:2, message:"Hello, I'm Front-end Developer!", likesCount:11, disLikesCount:22},
        {id:3, message:"Hello, I'm Junior Front-end Developer!", likesCount:101, disLikesCount:32}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount} dislikes={p.disLikesCount}/>)

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
            { postsElements }
            {/*<Post message={posts[0].message} likes={posts[0].likesCount} dislikes={posts[0].disLikesCount}/>*/}
            {/*<Post message={posts[1].message} likes={posts[1].likesCount} dislikes={posts[1].disLikesCount}/>*/}
            {/*<Post message={posts[2].message} likes={posts[2].likesCount} dislikes={posts[2].disLikesCount}/>*/}

        </div>
    )
}

export default MyPosts;