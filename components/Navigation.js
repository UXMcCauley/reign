import { useTheme } from 'next-themes'
import {
    AdjustmentsIcon,
    CalendarIcon,
    ClockIcon,
    HomeIcon,
    KeyIcon,
    UserIcon,
    SpeakerphoneIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon
} from "@heroicons/react/outline";
import Toggle from "./Toggle";
import {useRouter} from "next/router";
import Link from "next/link"

const navigation = [
    {name: 'Home', href: '/', icon: HomeIcon, current: false},
    {name: 'Messages', href: '/messages', icon: CalendarIcon, current: false},
    {name: 'Employees', href: '/employees', icon: UserIcon, current: false},
    {name: 'Teams', href: '/teams', icon: UserGroupIcon, current: false},
    {name: 'Projects', href: '/projects', icon: SpeakerphoneIcon, current: false},
    {name: 'Timecards', href: '/timecards', icon: ClockIcon, current: false},
    {name: 'Keycards', href: '/keycards', icon: KeyIcon, current: false},
    {name: 'Schedules', href: '/schedules', icon: CalendarIcon, current: false},
    {name: 'Settings', href: '/settings', icon: AdjustmentsIcon, current: false},
    {name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon, current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navigation() {
    const router = useRouter()
    const { theme, setTheme } = useTheme()

    return (
        <nav className="mt-5 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
                {navigation.map((item) => (
                    <Link key={item.name}
                          href={item.href} passHref>
                        <a
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
                    </Link>
                ))}
            </div>
            <div className={"p-3"}>
                <div
                    className={"text-sm text-black dark:text-white mb-2"}>{theme === "dark" ? "Dark Mode" : "Light Mode"}</div>
                <Toggle/>
            </div>

        </nav>
    );
}

export default Navigation;
