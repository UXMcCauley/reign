import {connectToDatabase} from "../../lib/dbConnect";

export default async (req, res) => {
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find()
        .limit(30)
        .sort()
        .toArray()
    res.json(employees)
}