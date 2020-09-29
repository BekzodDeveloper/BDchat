import React from 'react';
import styles from "./ProfileInfo.module.css";
import Logo from "./../../../image/logo_bekdev .jpg";
import Wallpaper from "../../../image/bg7.jpg";


const ProfileInfo = () => {
    return (
            <div className={styles.descriptionBlock}>
                <div>
                    <img className={styles.wallpaper}
                         src={Wallpaper}
                         alt=""></img>
                </div>

                <div className={styles.ava_description}>
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
            </div>
    )
}

export default ProfileInfo;