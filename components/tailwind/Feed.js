/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid'

const timeline = [
    {
        id: 1,
        content: 'Approved timecards',
        target: 'Roofing team',
        href: '#',
        date: 'April 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: 'Liked a photo from',
        target: 'Bethany Blake ',
        href: '#',
        date: 'April 22',
        datetime: '2020-09-22',
        icon: ThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'April 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: 'Liked a photo from',
        target: 'James Norris',
        href: '#',
        date: 'April 30',
        datetime: '2020-09-30',
        icon: ThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'May 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Feed() {
    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8 py-6">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-violet-700" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:bg-violet-700 dark:ring-gray-800'
                      )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                                </div>
                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-white">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-gray-900 dark:text-gray-400">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
