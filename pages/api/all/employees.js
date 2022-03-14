import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find({"organization": ObjectId(req.body.orgURL)})
        .toArray()

    res.json(employees)
}
