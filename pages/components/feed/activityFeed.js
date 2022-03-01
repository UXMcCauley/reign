import FeedActivityItem from "./feedActivityItem";
import {generateFeed} from "../universal/ui/helpers";

export default function ActivityFeed(props) {
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