import {useRouter} from "next/router"

const tabs = [
    { name: 'Executive Summary', href: '/dashboards/executive-summary', current: true },
    { name: 'Employee Performance', href: '/dashboards/employee-performance', current: false },
    { name: 'Workforce Diversity', href: '/dashboards/workforce-diversity', current: false },
    { name: 'Salary Overview', href: '/dashboards/salary-overview', current: false },
    { name: 'Project Dynamics', href: '/dashboards/project-dynamics', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabbedNavigation() {
    const router = useRouter()
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200 dark:border-gray-800">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    router.pathname === tab.href
                                        ? 'border-violet-500 text-violet-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
