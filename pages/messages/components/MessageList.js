const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function MessageList({handleMessageChange}) {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-800 overflow-hidden">
            {people.map((person) => (
                <li key={person.email}
                    onClick={() => {
                        handleMessageChange({
                            name: person.name,
                            email: person.email,
                            image: person.image
                        })
                    }}
                    className=" flex hover:bg-gray-100 dark:hover:bg-gray-800 pt-5 pb-5 w-full cursor-pointer">
                    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-black dark:text-white">{person.name}</p>
                        <p className="text-xs text-gray-500">{person.email}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
