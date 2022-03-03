import {connectToDatabase} from "../../lib/dbConnect";

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
            birthdate: req.body.birthdate,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            gender: req.body.gender,
            pronouns: req.body.pronouns,
            timestamp: new Date()
        })


    res.json(newEmployee)
}