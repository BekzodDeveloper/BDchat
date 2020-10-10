import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    // let posts = [
    //     {id:1, message:"Hello, I'm Bekzod Developer!", likesCount:18, disLikesCount:8},
    //     {id:2, message:"Hello, I'm Front-end Developer!", likesCount:11, disLikesCount:22},
    //     {id:3, message:"Hello, I'm Junior Front-end Developer!", likesCount:101, disLikesCount:32},
    //     {id:4, message:"Hello,!", likesCount:8, disLikesCount:9}
    // ]
    // I did props this^ "let posts" to App.js

    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.posts}/>
        </div>
    )
}

export default Profile;