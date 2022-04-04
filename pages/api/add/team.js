import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const {db} = await connectToDatabase()
    const newEmployee = await db
        .collection("teams")
        .insertOne({
            kpi: req.body.kpi,
            performance: req.body.performance,
            wages: req.body.wages,
            name: req.body.name,
            attendance: req.body.attendance,
            members: req.body.members,
            orgId: ObjectId(req.body.orgId)
        })

    res.json(newEmployee)
}
