import {connectToDatabase} from "../../lib/dbConnect";

export default async (req, res) => {

    const {db} = await connectToDatabase()
    const newEmployee = await db
        .collection("employees")
        .insertOne({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone
        })


    res.json(newEmployee)
}