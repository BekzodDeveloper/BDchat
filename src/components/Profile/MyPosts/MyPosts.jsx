import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={styles.myposts}>
            <h2>My posts</h2>

            <div className={styles.newPost}>
                <p>New post</p>
                <div>
                    <textarea>Write new post here...</textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
            <Post
                message="Hello, I'm Bekzod Developer! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada odio sit amet dolor efficitur tincidunt. Praesent sit amet dictum risus, condimentum elementum nibh. Vivamus suscipit quis sem quis dictum. Aliquam metus enim, vulputate ac pulvinar quis, aliquet et orci. Suspendisse fringilla, lorem sed sagittis dictum, velit sem faucibus felis, vitae mollis nisi enim in mi. Nam tristique, quam consectetur aliquam auctor, dui augue scelerisque ipsum, vel maximus arcu leo sit amet tellus. " likes="10" dislikes="9"/>
            <Post message="Thanks to IT-KAMASUTRA.COM" likes="21" dislikes="9"/>
            <Post message="React. Way of Samurai. Fux-Fux-Fux!" likes="1" dislikes="9"/>
            <Post message="React. Way of Samurai. Fux-Fux-Fux!" likes="18" dislikes="9"/>


        </div>
    )
}

export default MyPosts;