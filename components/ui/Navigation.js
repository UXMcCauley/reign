import React, {useEffect, useState} from 'react';
import {
    CalendarIcon,
    HomeIcon,
    MapIcon,
    SearchCircleIcon,
    SpeakerphoneIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import Toggle from "./Toggle";
import {useRouter} from "next/router";

const navigation = [
    {name: 'Home', href: '/', icon: HomeIcon, current: false},
    {name: 'Messages', href: '/messages', icon: CalendarIcon, current: false},
    {name: 'Employees', href: '/employees', icon: UserGroupIcon, current: false},
    {name: 'Teams', href: '/teams', icon: SearchCircleIcon, current: false},
    {name: 'Projects', href: '/projects', icon: SpeakerphoneIcon, current: false},
    {name: 'Timecards', href: '/timecards', icon: MapIcon, current: false},
    {name: 'Keycards', href: '/keycards', icon: MapIcon, current: false},
    {name: 'Schedules', href: '/schedules', icon: MapIcon, current: false},
    {name: 'Settings', href: '/settings', icon: MapIcon, current: false},
    {name: 'Help Center', href: '/help', icon: MapIcon, current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navigation(props) {
    const router = useRouter()
    const [dark, setDark] = useState()
    const [isDark, setIsDark] = useState("")
    const isSet = (val) => {
        props.isSet(val)
    }
    useEffect(() => {
        const currentMode = localStorage.getItem("mode")
        setIsDark(eval(currentMode))

    }, [])

    return (
        <nav className="mt-5 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            router.pathname === item.href
                                ? 'bg-gray-200 text-gray-900 dark:text-white dark:bg-violet-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md '
                        )}
                    >
                        <item.icon
                            className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                        {item.name}
                    </a>
                ))}
            </div>
            <div className={"p-3"}>
                <div
                    className={"text-sm text-black dark:text-white mb-2"}>{eval(isDark) ? "Dark Mode" : "Light Mode"}</div>
                <Toggle isSet={isSet}/>
            </div>

        </nav>
    );
}

export default Navigation;
