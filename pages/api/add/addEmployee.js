import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const {db} = await connectToDatabase()
    const newEmployee = await db
        .collection("employees")
        .insertOne({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            cell: req.body.cell,
            home: req.body.home,
            birthdate: new Date(req.body.birthdate),
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            gender: req.body.gender,
            pronouns: req.body.pronouns,
            organization: ObjectId(req.body.organization),
            createdAt: new Date(),
            startDate: new Date(req.body.startDate),
            username: req.body.username,
            password: req.body.password,
            highSchool: req.body.highSchool,
            college: req.body.college,
            bio: req.body.bio,
            kpi: req.body.kpi,
            performance: req.body.performance,
            wage: req.body.wage,
            avatar: req.body.avatar,
            attendance: req.body.attendance,
            ethnicity: req.body.ethnicity
        })

    res.json(newEmployee)
}
