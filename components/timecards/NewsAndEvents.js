import React from 'react';
import styles from "./styles/NewsAndEvents.module.scss"
function NewsAndEvents() {
    return (
        <div className={styles.container}>
            <h1>News & Events</h1>
            <div className={styles.newsItem}>
                <h3>Title</h3>
                <div>Content</div>
            </div>
        </div>
    );
}

export default NewsAndEvents;
