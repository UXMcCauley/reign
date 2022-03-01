import FeedActivityItem from "./feedActivityItem";
import generateFeed from "../../../public/helpers";

export default function ActivityFeed() {
    return (
        <div>
            <h1>Activity Feed</h1>
            <hr/>
            {generateFeed(50).data.map((item, i) => {
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