import {connectToDatabase} from "../../lib/dbConnect";

export default async (req, res) => {
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .findOne({username: req.body.username, password: req.body.password})
    res.json(employees)
}
