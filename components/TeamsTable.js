function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TeamsTable({
                                          title,
                                          desc,
                                          teams,
                                          heads,
                                          linkLabel,
                                          buttonLabel,
                                          searchTerm,
                                          selectedEmployees,
                                          setSelectedEmployees,
                                          setFly,
                                          buttonLink
                                      }) {
    const parsedTeams = JSON.parse(teams)
console.log(parsedTeams)
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-light text-gray-900 dark:text-white">{title}</h1>
                    <p className="mt-2 text-sm text-gray-400">{desc}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button onClick={() => {
                        if (selectedEmployees.length === 2) {
                            setFly(true)
                        } else {
                            alert("You need 2 employees to compare.")
                        }

                    }}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >{"Compare"}
                    </button>
                    <button onClick={() => {
                        setSelectedEmployees([])
                    }}
                            type="button"
                            className="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >{"Clear compare"}
                    </button>
                    <a href={buttonLink}>
                        <button
                            type="button"
                            className="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-violet-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >{buttonLabel}
                        </button>
                    </a>
                </div>
            </div>
            <div className="mt-8 flex flex-col pb-40">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="w-full  divide-y divide-gray-300 dark:divide-gray-900">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8 text-xs">
                                        Compare
                                    </th>
                                    {heads.map((heading, i) => {
                                            return (<th key={i} scope="col"
                                                        className="min-w-[12rem] py-3.5  text-left text-sm font-semibold text-gray-900 dark:text-white">{heading}</th>)
                                        }
                                    )}
                                </tr>
                                </thead>
                                <tbody
                                    className="divide-y divide-gray-200 bg-white dark:bg-gray-700 dark:divide-gray-600">
                                {parsedTeams.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase())).map((team) => (
                                    <tr key={team.email}>
                                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <button className={"text-sm text-black dark:text-white"} onClick={() => {
                                                if (selectedEmployees.length >= 2) {
                                                    alert("You can only compare two employees ar once. Clearing list.")
                                                    setSelectedEmployees([])
                                                } else {
                                                    setSelectedEmployees(prev => [...prev, {
                                                        id: team._id,
                                                        name: team.name,
                                                        wages: team.wages,
                                                        kpi: team.kpi,
                                                        attendance: team.attendance,
                                                        performance: team.performance,
                                                        members: team.members
                                                    }])
                                                }

                                            }}>+
                                            </button>
                                        </td>
                                        <td
                                            className={classNames(
                                                'text-black whitespace-nowrap py-4 pr-3 text-sm font-medium dark:text-white',
                                            )}
                                        >
                                            {team.name}
                                        </td>
                                        <td className="whitespace-nowrap text-sm text-gray-500 dark:text-white">{(team.kpi / team.members.length).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        <td className="whitespace-nowrap text-sm text-gray-500 dark:text-white">{(team.performance / team.members.length).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                                        <td className="whitespace-nowrap text-sm text-gray-500 dark:text-white">{(team.attendance / team.members.length).toLocaleString(undefined, {maximumFractionDigits: 2})}%</td>
                                        <td className="whitespace-nowrap text-sm text-gray-500 dark:text-white">{team.wages}</td>
                                        <td className="whitespace-nowrap text-sm text-gray-500 dark:text-white">{team.members.length}</td>
                                        <td className="whitespace-nowrap text-sm font-medium sm:pr-6">
                                            <a href={`/employees/${team._id}`}
                                               className="text-indigo-600 dark:text-violet-300 hover:text-indigo-900">
                                                {linkLabel}<span className="sr-only">, {team.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
