import {connectToDatabase} from "../../lib/dbConnect";

export default async (req, res) => {
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("keycards")
        .find()
        .sort()
        .toArray()
    res.json(employees)
}