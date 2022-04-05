import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find({
            "organization": ObjectId("61bf60ecddd910d9c0a18df1"),
            "gender": req.body.gender,
            "birthdate": {$gte: new Date("01-01-1990"), $lt: new Date("01-01-2000")},
            "ethnicity": req.body.ethnicity
        })
        .toArray()

    res.json(employees)
}
