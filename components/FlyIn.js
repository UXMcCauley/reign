import {Fragment, useState, useEffect} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {HeartIcon, XIcon} from '@heroicons/react/outline'
import {PencilIcon, PlusSmIcon} from '@heroicons/react/solid'

export default function FlyIn({flyIn, setFly}) {
    const [open, setOpen] = useState(false)
    const [dark, setDark] = useState(false)
    useEffect(() => {
        const isDark = localStorage.getItem("mode")
        setDark(eval(isDark))
    }, [])
    return (
        <Transition.Root show={flyIn} as={Fragment}>
            <Dialog as="div" className={`fixed inset-0 overflow-hidden z-30 ${dark ? "dark" : null}`} onClose={setFly}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity "/>
                    </Transition.Child>
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto relative w-96">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setFly(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full overflow-y-auto bg-white p-8 dark:bg-gray-800">
                                    <div className="space-y-6 pb-16">
                                        <div>
                                            <div
                                                className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                                                <img
                                                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                                                    alt=""
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="mt-4 flex items-start justify-between">
                                                <div>
                                                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        <span className="sr-only">Details for </span>IMG_4985.HEIC
                                                    </h2>
                                                    <p className="text-sm font-medium text-gray-500">3.9 MB</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                >
                                                    <HeartIcon className="h-6 w-6" aria-hidden="true"/>
                                                    <span className="sr-only">Favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Information</h3>
                                            <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Employee</dt>
                                                    <dd className="text-gray-900 dark:text-white">Marie Culver</dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Start</dt>
                                                    <dd className="text-gray-900 dark:text-white">June 8, 2020 at
                                                        7:00am
                                                    </dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">End</dt>
                                                    <dd className="text-gray-900 dark:text-white">June 8, 2020 at
                                                        5:30pm
                                                    </dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Keycards</dt>
                                                    <dd className="text-gray-900 dark:text-white">Carpentry</dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Tasks</dt>
                                                    <dd className="text-gray-900 dark:text-white">Set-up, Clean-up,
                                                        Framing
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Notes</h3>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-sm italic text-gray-500">Add useful notes to this
                                                    shift.</p>
                                                <button
                                                    type="button"
                                                    className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                >
                                                    <PencilIcon className="h-5 w-5" aria-hidden="true"/>
                                                    <span className="sr-only">Notes</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFly(false)
                                                }}
                                                className="flex-1 rounded-md border border-transparent bg-violet-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFly(false)
                                                }}
                                                className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Deny
                                            </button>
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
