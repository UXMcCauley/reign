/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {MenuIcon} from '@heroicons/react/outline'
import Navigation from "../ui/Navigation";
import TransitionRoot from "./TransitionRoot";
import Breadcrumbs from "../ui/Breadcrumbs";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SingleColumnLayout({children}) {
    const [dark, setDark] = useState("false")
    const isSet = (val) => {
        setDark(val)
    }
    useEffect(() => {
        const setMode = localStorage.getItem("mode")
        setDark(localStorage.getItem("mode"))
    },[])
    return (
        <>
            <div className={`h-screen flex ${eval(dark) ? "dark" : ""}`}>
               <TransitionRoot/>
                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white dark:bg-black dark:border-gray-800">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="/img/Reignlogo.png"
                                    alt="Workflow"
                                />
                            </div>
                            <Navigation isSet={isSet}/>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-900 p-4 ">
                            <a href="#" className="flex-shrink-0 w-full group block">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="inline-block h-9 w-9 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom
                                            Cook</p>
                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View
                                            profile</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <main className="flex-1 dark:bg-gray-900">
                        <div className="py-6">
                            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">

                                {/* Replace with your content */}
                                <div className="py-4">

                                    {children}
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}