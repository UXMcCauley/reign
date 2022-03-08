import FeedActivityItem from "./feedActivityItem";
import {generateFeed} from "../../lib/helpers";
import styles from "./styles/ActivityFeed.module.scss"

export default function ActivityFeed(props) {
    return (
        <div className={styles.container}>
            <h1>Activity Feed</h1>
            {generateFeed(props.feedLength).data.map((item, i) => {
                return (
                    <FeedActivityItem
                        key={i}
                        name={`${item.first_name} ${item.last_name}`}
                        description={item.description}
                        avatar={item.avatar}
                        time={"3 minutes ago"}
                    />
                )
            })}
        </div>
    )
}
