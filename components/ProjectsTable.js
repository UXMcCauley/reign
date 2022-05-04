import faker from "@faker-js/faker"

export default function ProjectsTable({projects, click}) {
    const headings = ["Project", "Members", "Total/Hr", "Emp/Hr (Avg)", " Begin Date", "End Date"]
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className=" flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    {headings.map(heading => (
                                        <th key={heading} scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 dark:text-white">
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-700 dark:divide-gray-600">
                                {projects.map((project) => {
                                    const fakeWage = faker.datatype.number({min: 19, max: 26, precision: 0.01})
                                    return (
                                        <tr key={project.name} onClick={() => {
                                            click({
                                                name: project.name,
                                                members: project.members.length,
                                                totalHour: fakeWage * (project.members ? project.members.length : 0),
                                                employeeHour: fakeWage,
                                            })

                                        }} className={"cursor-pointer"}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 dark:text-white">
                                                {project.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">{project.members ? project.members.length : null}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">
                                                ${fakeWage * (project.members ? project.members.length : 0)}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">
                                                ${fakeWage}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">TBD</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">TBD</td>

                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
