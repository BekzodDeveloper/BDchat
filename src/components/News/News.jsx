import React from "react";
import styles from "./News.module.css";
// import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className={styles.newArticle}>
            <div className={styles.divImg}>{props.img}</div>
            <div className={styles.title}>{props.title}</div>
            <div>{props.text}</div>
        </div>
    )
}

const News = (props) => {
    let img = <img src="../../image/bg7.jpg" alt="img"/>;

    let news = [
        {img: {img}, title: "Title 1", text: "I'm BekDev!"},
        {img: {img}, title: "Title 2", text: "I'm Developer!"},
        {img: {img}, title: "Title 3", text: "I'm Junior!"}
    ]

    let newsElements = news.map(n => <NewsItem title={n.title} text={n.text}/>);

    return (
        <div className={styles.news}>
            News
            {newsElements}
        </div>
    )
}

export default News;