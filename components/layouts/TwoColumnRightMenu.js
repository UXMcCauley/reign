/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import Navigation from "../ui/Navigation";
import {MenuIcon} from '@heroicons/react/outline'
import Heading from "../headings/Heading";
import Feed from "../tailwind/Feed";
import TransitionRoot from "./TransitionRoot";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TwoColumnRightMenu({children}) {
    const [dark, setDark] = useState(false)
    const isSet = (val) => {
        setDark(val)
    }
    useEffect(() => {
        const setMode = localStorage.getItem("mode")
        console.log(setMode)
        setDark(localStorage.getItem("mode"))
    },[])
    return (
        <>
            <div className={`h-screen flex ${eval(dark) ? "dark" : ""}`}>
                <TransitionRoot/>
                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div
                            className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100  dark:bg-black dark:border-gray-800">
                            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div className="flex items-center flex-shrink-0 px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="/img/Reignlogo.png"
                                        alt="Workflow"
                                    />
                                    <div className={"text-black-100"}>REIGN</div>
                                </div>
                                <Navigation isSet={isSet}/>

                            </div>
                            <div className="flex-shrink-0 flex border-t border-gray-900 p-4 dark:border-gray-800">
                                <a href="#" className="flex-shrink-0 w-full group block">
                                    <div className="flex items-center">
                                        <div>
                                            <img
                                                className="inline-block h-9 w-9 rounded-full"
                                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
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
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                                <Heading label={"Actions"}/>
                                <Feed/>
                                <Heading label={"Functions"}/>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}