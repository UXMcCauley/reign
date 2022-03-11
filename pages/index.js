import React, {useState} from 'react';
import SignIn from "./sign-in";
import Timecards from "./timecards";

export default function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    return (
        isAuthenticated === true ? <Timecards/> : <SignIn/>
    )
}
