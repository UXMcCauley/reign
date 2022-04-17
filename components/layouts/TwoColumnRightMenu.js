import {useEffect, useState} from 'react'
import Navigation from "../Navigation";
import {MenuIcon} from '@heroicons/react/outline'
import Heading from "../headings/Heading";
import Feed from "../tailwind/Feed";
import TransitionRoot from "./TransitionRoot";
import Image from "next/image";

const secondaryNavigation = [
    {name: 'Inequity Gap Finder', href: '#'},
    {name: 'Employee Comparison Tool', href: '/employees'},
    {name: 'Team Comparison Component', href: '#'},
    {name: 'Payroll Data Export', href: '#'},
    {name: 'Add an employee', href: '#'},
    {name: 'Generate a team', href: '#'},
]
export default function TwoColumnRightMenu({children}) {
    const [dark, setDark] = useState("")

    useEffect(() => {
        setDark(localStorage.getItem("theme"))
    }, [])
    return (
        <>
            <div className={`h-screen flex ${dark === "dark" ? "dark" : ""}`}>
                <TransitionRoot/>
                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div
                            className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100  dark:bg-black dark:border-gray-800">
                            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div className="flex items-center flex-shrink-0 px-4">
                                    <Image
                                        width={32}
                                        height={32}
                                        className="h-8 w-auto"
                                        src="/img/Reignlogo.png"
                                        alt="Workflow"
                                    />
                                    <div className={"text-black dark:text-white ml-2"}>REIGN <span
                                        className={`text-xs`}>Workforce
                                        Intelligence</span></div>
                                </div>
                                <Navigation/>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-gray-200 p-4 dark:border-gray-800">
                                <a href="#" className="flex-shrink-0 w-full group block">
                                    <div className="flex items-center">
                                        <div>
                                            <Image
                                                width={32}
                                                height={32}
                                                className="inline-block h-9 w-9 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-white">Whitney
                                                Francis</p>
                                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View
                                                profile</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                    <div className="lg:hidden">
                        <div
                            className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                            <div>
                                <Image
                                    width={32}
                                    height={32}
                                    className="h-8 w-auto"
                                    src="/img/Reignlogo.png"
                                    alt="Workflow"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative z-0 flex overflow-hidden dark:bg-gray-900">
                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                {children}
                            </div>

                        </main>
                        <aside
                            className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto dark:border-gray-800 ">
                            {/* Start secondary column (hidden on smaller screens) */}
                            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
                                <Heading label={"Activity"}/>
                                <Feed/>
                                <Heading label={"Functions"}/>
                                <div className="mt-1 space-y-1" aria-labelledby="projects-headline">
                                    {secondaryNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                                        >
                                            <span className="truncate">{item.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
