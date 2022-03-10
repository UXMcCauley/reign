import faker from "@faker-js/faker";
import {Pencil, Trash} from "phosphor-react";

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
        // {
        //     name: '',
        //     grow: 0,
        //     cell: row => <Image height="50px" width="50px" alt={row.name}
        //                         src={row.avatar}/>
        // },
        {name: 'Last', selector: row => row.lastName, sortable: true, filterable: true},
        {name: 'First', selector: row => row.firstName, sortable: true, filterable: true},
        {name: 'Email', selector: row => row.email},
        {name: 'Cell', selector: row => row.cell, width: "140px"},
        {name: 'Home', selector: row => row.home, width: "140px"},
        {name: 'Birthdate', selector: row => row.birthdate, width: "140px"},
        {name: 'Street', selector: row => row.street, width: "140px"},
        {name: 'City', selector: row => row.city, width: "140px"},
        {name: 'State', selector: row => row.state, width: "140px"},
        {name: 'Zip', selector: row => row.zipCode, width: "140px"},
        {name: 'Gender', selector: row => row.gender, width: "140px"},
        {name: 'Pronouns', selector: row => row.pronouns, width: "140px"},
        {name: 'Created on', selector: row => row.timestamp, width: "120px"},
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
