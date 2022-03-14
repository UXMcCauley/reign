import DataTable from "react-data-table-component";

function TestingPage({organizations, employees, schedules, shifts, keycards, tasks, punches}) {
    console.log(punches)
    return (
        <div>
            <h1 style={{padding: "30px", marginBottom: 0}}>Organizations</h1>
            <DataTable
                columns={[
                    {name: 'Name', selector: row => row.name},
                    {name: 'id', selector: row => row._id},
                ]}
                data={organizations}
                theme="dark"
                dense={true}
            />
            <h1 style={{padding: "30px", marginBottom: 0}}>Employees</h1>
            <DataTable
                columns={[
                    {name: 'Last', selector: row => row.lastName},
                    {name: 'First', selector: row => row.firstName},
                    {name: 'Belongs to (org ID)', selector: row => row.organization},
                    {name: 'id', selector: row => row._id},
                ]}
                data={employees}
                theme="dark"
                dense={true}
            />
            <h1 style={{padding: "30px", marginBottom: 0}}>Schedules</h1>
            <DataTable
                columns={[
                    {name: 'Belongs to (org ID)', selector: row => row.organization},
                    {name: 'Belongs to (emp ID)', selector: row => row.employee},
                    {name: 'id', selector: row => row._id},
                ]}
                data={schedules}
                theme="dark"
                dense={true}
            />
            <h1 style={{padding: "30px", marginBottom: 0}}>Shifts</h1>
            <DataTable
                columns={[
                    {name: 'Belongs to (employee ID)', selector: row => row.employee},
                    {name: 'Belongs to (schedule ID)', selector: row => row.schedule},
                    {name: 'Owns (punch IDs)', selector: row => row.punches},
                    {name: 'id', selector: row => row._id},
                ]}
                data={shifts}
                theme="dark"
                dense={true}
            />
            <h1 style={{padding: "30px", marginBottom: 0}}>Keycards</h1>
            <DataTable
                columns={[
                    {name: 'Name', selector: row => row.name},
                    {name: 'Owns (task IDs)', selector: row => row.tasks},
                    {name: 'id', selector: row => row._id},
                ]}
                data={keycards}
                theme="dark"
                dense={true}
            />
            <h1 style={{padding: "30px", marginBottom: 0}}>Tasks</h1>
            <DataTable
                columns={[
                    {name: 'Name', selector: row => row.name},
                    {name: 'id', selector: row => row._id},
                ]}
                data={tasks}
                theme="dark"
                dense={true}
            />
            <h1 style={{padding: "30px", marginBottom: 0}}>Punches</h1>
            <DataTable
                columns={[
                    {name: 'Name', selector: row => row.name},
                    {name: 'id', selector: row => row._id},
                ]}
                data={punches}
                theme="dark"
                dense={true}
            />
        </div>
    );
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

    //organizations
    const org = await fetch(baseUrl + '/api/all/organizations')
    const organizations = await org.json()

    //employees
    const emp = await fetch(baseUrl + '/api/all/employees')
    const employees = await emp.json()

    //schedules
    const sch = await fetch(baseUrl + '/api/all/schedules')
    const schedules = await sch.json()

    //shifts
    const shift = await fetch(baseUrl + '/api/all/shifts')
    const shifts = await shift.json()

    //keycards
    const key = await fetch(baseUrl + '/api/all/keycards')
    const keycards = await key.json()

    //tasks
    const task = await fetch(baseUrl + '/api/all/tasks')
    const tasks = await task.json()

    //punches
    const pun = await fetch(baseUrl + '/api/all/punches')
    const punches = await pun.json()

    return {
        props: {
            organizations: organizations,
            employees: employees,
            schedules: schedules,
            shifts: shifts,
            keycards: keycards,
            tasks: tasks,
            punches: punches
        }
    }
}

export default TestingPage;
