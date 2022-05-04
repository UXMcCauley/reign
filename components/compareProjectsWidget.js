export default function CompareProjectsWidget({comparedProjects}){
    return (
        <div className={"flex justify-end align-middle"}>
            <div className={"flex-2 text-center "}>
                {comparedProjects.length > 0 ? (
                    <>
                        <div>{comparedProjects[0].name}</div>
                        <div>{comparedProjects[0].members}</div>
                        <div>{comparedProjects[0].totalHour}</div>
                        <div>{comparedProjects[0].employeeHour}</div>
                    </>
                ) : ""}
            </div>
            {comparedProjects.length > 1 ? (
                    <div className={"flex flex-col flex-1 bg-gray-700 mx-2 text-center justify-end"}>
                        <div> spacer</div>
                        <div>
                            {comparedProjects[0].members !== comparedProjects[1].members ?
                                comparedProjects[0].members > comparedProjects[1].members ? ">" : "<"
                                : "="}
                        </div>
                        <div>
                            {comparedProjects[0].totalHour !== comparedProjects[1].totalHour ?
                                comparedProjects[0].totalHour > comparedProjects[1].totalHour ? ">" : "<"
                                : "="}
                        </div>
                        <div>
                            {comparedProjects[0].employeeHour !== comparedProjects[1].employeeHour ?
                                comparedProjects[0].employeeHour > comparedProjects[1].employeeHour ? ">" : "<"
                                : "="}
                        </div>
                    </div>
                ) :
                null}
            <div className={"flex-2 text-center"}>
                {comparedProjects.length > 1 ? (
                    <>
                        <div>{comparedProjects[1].name}</div>
                        <div>{comparedProjects[1].members}</div>
                        <div>{comparedProjects[1].totalHour}</div>
                        <div>{comparedProjects[1].employeeHour}</div>
                    </>
                ) : ""}
            </div>
        </div>
    )
}