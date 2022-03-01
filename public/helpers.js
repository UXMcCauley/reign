import faker from "@faker-js/faker";
import Image from "next/image"

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

export function employeeTableColumns() {
    return [
        {
            name: '',
            grow: 0,
            cell: row => <Image height="50px" width="50px" alt={row.name}
                              src={row.avatar}/>
        },
        {name: 'Last', selector: row => row.last_name, sortable: true, width: "120px"},
        {name: 'First', selector: row => row.first_name, sortable: true, width: "120px"},
        {name: 'Email', selector: row => row.email},
        {name: 'Phone', selector: row => row.phone, width: "140px"},
        {name: 'Job Area', selector: row => row.jobArea, width: "120px"},
        {name: 'Job Title', selector: row => row.jobTitle},
        {name: 'Job Type', selector: row => row.jobType},

    ];
}

export default function generateFeed(length) {
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