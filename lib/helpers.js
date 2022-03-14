import faker from "@faker-js/faker";
import {Pencil, Trash} from "phosphor-react";
import Link from "next/link";

export const customTableStyles = {
    table: {
        style: {
            boxSizing: "border-box",
            width: "100%",
            backgroundColor: "transparent",
        }
    },
    rows: {
        style: {
            minHeight: '72px', // override the row height
            backgroundColor: "transparent",
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: "black",
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            backgroundColor: "transparent",
        },
    },
};

export function employeeTableColumns() {
    return [

        {name: 'Last', selector: row => row.lastName, sortable: true, filterable: true},
        {name: 'First', selector: row => row.firstName, sortable: true, filterable: true},
        {name: 'Email', selector: row => row.email},
        {name: 'Phone', selector: row => row.cell, width: "140px"},
        {name: 'ID', selector: row => row._id, width: "140px"},
        {
            name: '',
            grow: 0,
            cell: row => <Link passHref href={`/employees/${row._id}`}>Real-Time Resume</Link>
        },
    ];
}

export function keycardsTableColumns() {
    return [
        {name: 'Name', selector: row => row.name, sortable: true},
        {name: 'Linked Tasks', selector: row => row.tasks},
        {name: 'Description', selector: row => row.description},
        {name: 'Id', selector: row => row.id},
        {
            name: 'Modify', cell: (row) => <div><Pencil onClick={() => {
                alert("Edit Keycard?")
            }} size={26} id={row.id}>Action</Pencil><Trash onClick={() => {
                alert("Delete Keycard?")
            }} size={26} id={row.id}>Action</Trash></div>
        },
    ];
}

export function timecardColumns() {
    return [
        {name: 'Keycard', selector: row => row.keycard},
        {name: 'Tasks', selector: row => row.taskName},
        {name: 'Hours', selector: row => row.hours},
    ];
}

export function scheduleUploadTableColumns() {
    return [
        {name: 'Name', selector: row => row.name, sortable: true},
        {name: 'Date', selector: row => row.date},
        {name: 'Start', selector: row => row.start},
        {name: 'End', selector: row => row.end},
        {
            name: '', cell: (row) => <div><Trash onClick={() => {
                alert("Delete this shift entry?")
            }} size={26} id={row.id}>Action</Trash></div>
        },
    ];
}

export function generateEmployees() {
    faker.locale = "en_US"
    let users = []
    for (let i = 1; i <= 50; i++) {
        let uuid = faker.datatype.uuid()
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email()
        let phone = faker.phone.phoneNumberFormat()
        let avatar = faker.image.avatar()
        let jobArea = faker.name.jobArea()
        let jobTitle = faker.name.jobTitle()
        let jobType = faker.name.jobType()

        users.push({
            "id": uuid,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone": phone,
            "avatar": avatar,
            "jobArea": jobArea,
            "jobType": jobType,
            "jobTitle": jobTitle
        });
    }

    return {"data": users}
}


export function generateFeed(length) {
    let users = []
    for (let id = 1; id <= length; id++) {

        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email()
        let description = faker.lorem.paragraph()
        let avatar = faker.image.avatar()

        users.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "description": description,
            "avatar": avatar
        });
    }

    return {"data": users}
}

export function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}
