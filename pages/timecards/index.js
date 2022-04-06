import Head from 'next/head'
import {useState, useEffect} from "react";
import absoluteUrl from 'next-absolute-url'
import LayoutWithSearch from "../../components/layouts/LayoutWithSearch";
import FlyIn from "../../components/FlyIn";
import TimecardsTable from "../../components/TimecardsTable";

export default function Index() {
    const [flyIn, setFlyIn] = useState(false)
    const [allShifts, setAllShifts] = useState([])
    const [currentShift, setCurrentShift] = useState({
        _id: "",
        employeeName: "Loading...",
        punches: []
    })

    const getActiveEmployee = async (id) => {
        // fetch employee timecard data after click
        const {origin} = absoluteUrl()
        const apiURL = `${origin}/api/one/employee?employeeId=${id}`
        const data = await fetch(apiURL)
        data.json()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const getAllShifts = async (organizationId) => {
        // fetch employee timecard data after click
        const {origin} = absoluteUrl()
        const apiURL = `${origin}/api/all/shifts?organizationId=${organizationId}`
        const data = await fetch(apiURL)
        data.json()
            .then(res => {
                setAllShifts(res)
                setCurrentShift(res[0])
            })
            .catch(err => console.log(err))
    }
    const people = [
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'James Keyes',
            title: 'Back-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'John Locke',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Orren Marsh',
            title: 'Back-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
    ]
    const approveTimecard = () => {
        // set timecard to approved in db
    }
    const handleFly = () => {
        setFlyIn(true)
    }
    useEffect(() => {
        getAllShifts("61bf60ecddd910d9c0a18df1")

    }, [])

    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <LayoutWithSearch>
                <FlyIn flyIn={flyIn} setFly={setFlyIn}/>
                <TimecardsTable people={people} title={"Timecards"} desc={"List of all pending timecards."}
                               heads={["Name", "Title", "Email", "Role", ""]} linkLabel={"Review"} buttonLabel={"Add timecard"} setFly={setFlyIn}/>
            </LayoutWithSearch>
        </>
    )
}

