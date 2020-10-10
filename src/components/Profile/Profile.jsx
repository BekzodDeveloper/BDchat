import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = () => {

    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    )
}

export default Profile;