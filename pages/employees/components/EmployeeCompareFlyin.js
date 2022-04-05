/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import BarChart from "../../../components/dashboards/bar";
import EmployeeCompareLine from "./EmployeeCompareLine";
import { Chart } from 'react-google-charts';


export default function EmployeeCompareFlyin({flyIn, setFly, selectedEmployees}) {
    const [open, setOpen] = useState(true)
    const [dark, setDark] = useState(false)
    useEffect(() => {
        const isDark = localStorage.getItem("mode")
        console.log(isDark)
        setDark(eval(isDark))
    }, [])
    return (
        <Transition.Root show={flyIn} as={Fragment}>
            <Dialog as="div" className={`fixed inset-0 overflow-hidden ${dark ? "dark" : null}`} onClose={setFly}>
                <div className="absolute inset-0 overflow-hidden">
                    <Dialog.Overlay className="absolute inset-0"/>

                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto w-screen max-w-2xl">
                                <div
                                    className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-800">
                                    <div className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900"> Panel
                                                title </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    onClick={() => setFly(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <div className="absolute inset-0 px-4 sm:px-6">
                                            <EmployeeCompareLine selectedEmployees={selectedEmployees} line={"name"}/>
                                            <EmployeeCompareLine selectedEmployees={selectedEmployees} line={"performance"}/>
                                            <EmployeeCompareLine selectedEmployees={selectedEmployees} line={"wage"}/>
                                            <EmployeeCompareLine selectedEmployees={selectedEmployees} line={"kpi"}/>
                                            <EmployeeCompareLine selectedEmployees={selectedEmployees} line={"attendance"}/>
                                            <div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
