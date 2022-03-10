import React, {useState} from 'react';
import SignIn from "./sign-in";
import ActivityFeedPage from "./activity-feed";

export default function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    return (
        isAuthenticated === true ? <ActivityFeedPage/> : <SignIn/>
    )
}
