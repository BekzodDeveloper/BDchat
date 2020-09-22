import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Logo from "./../../image/logo_bekdev .jpg";


const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>
                <img className={styles.wallpaper}
                      src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Top-companies-in-JLT-Cover-18-05.jpg"
                      alt=""></img>
            </div>

            <div className={styles.ava_and_description}>
                <div className={styles.ava}>
                    <img
                        src={Logo}
                        alt=""></img>
                </div>

                <div className={styles.description}>
                    <p>Name: Bekzod</p>
                    <p>Surename: Kholdarov</p>
                    <p>Age: 19</p>
                    <p>Nickname: BekDev</p>
                    <p>Hobby: Web-programming</p>
                    <p>Skills: Uzbek, Russian and English languages</p>

                </div>

            </div>

            <div className={styles.myPosts}>
                <MyPosts/>
            </div>

        </div>
    )
}

export default Profile;