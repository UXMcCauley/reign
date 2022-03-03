import {connectToDatabase} from "../../lib/dbConnect";

export default async (req, res) => {
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find()
        .sort({timestamp: -1})
        .toArray()
    res.json(employees)
}