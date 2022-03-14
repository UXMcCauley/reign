import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {organizationId} = req.query
    const {db} = await connectToDatabase()
    const employees = await db
        .collection("shifts")
        .find({organization: ObjectId(organizationId)})
        .sort({timestamp: -1})
        .toArray()
    res.json(employees)
}
