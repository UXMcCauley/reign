import {connectToDatabase} from "../../../lib/dbConnect";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("keycards")
        .find()
        .sort()
        .toArray()
    res.json(employees)
}
