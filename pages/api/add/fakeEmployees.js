import {connectToDatabase} from "../../../lib/dbConnect";
import faker from "@faker-js/faker";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    let date = faker.date.recent(10)
    const {db} = await connectToDatabase()
    const newTimecard = await db
        .collection("timecards")
        .insertOne({
            id: faker.datatype.uuid(),
            employeeName: faker.name.firstName() + " " + faker.name.lastName(),
            punches: [
                {
                    keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                    task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                    time: faker.helpers.randomize([1, 2, 3, 4]),
                    timeStart: date,
                    timeEnd: date
                },
                {
                    keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                    task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                    time: faker.helpers.randomize([1, 2, 3, 4]),
                    timeStart: date,
                    timeEnd: date
                },
                {
                    keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                    task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                    time: faker.helpers.randomize([1, 2, 3, 4]),
                    timeStart: date,
                    timeEnd: date
                },
                {
                    keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                    task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                    time: faker.helpers.randomize([1, 2, 3, 4]),
                    timeStart: date,
                    timeEnd: date
                }
            ],
            approvalStatus: faker.helpers.randomize(["False", "True", "Flagged", "Rejected"]),
            project: faker.lorem.words(3),
            totalHours: faker.helpers.randomize([7, 8, 9, 10]),
            performanceRating: 0,
            employeeNotes: faker.lorem.paragraph(),
            managerNotes: "",
        })

    res.json(newTimecard)
}
