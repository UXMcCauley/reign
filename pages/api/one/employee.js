import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {employeeId} = req.query
    const {db} = await connectToDatabase()
    const employee = await db
        .collection("employees")
        .findOne({_id: ObjectId(employeeId)})
    res.json({employee: employee})

}
