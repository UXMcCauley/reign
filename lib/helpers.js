import faker from "@faker-js/faker";
import Image from "next/image"
import {Pencil, Trash} from "phosphor-react";

export function employeeTableColumns() {
    return [
        // {
        //     name: '',
        //     grow: 0,
        //     cell: row => <Image height="50px" width="50px" alt={row.name}
        //                         src={row.avatar}/>
        // },
        {name: 'Last', selector: row => row.last_name, sortable: true, width: "120px"},
        {name: 'First', selector: row => row.first_name, sortable: true, width: "120px"},
        {name: 'Email', selector: row => row.email},
        {name: 'Phone', selector: row => row.phone, width: "140px"},
        {name: 'Created on', selector: row => row.createdAt, width: "120px"},
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