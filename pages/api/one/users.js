import {connectToDatabase} from "../../../lib/dbConnect";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .findOne({_id: req.body.username, password: req.body.password})
    res.json(employees)
}
