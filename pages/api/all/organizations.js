import {connectToDatabase} from "../../../lib/dbConnect";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {db} = await connectToDatabase()
    const organizations = await db
        .collection("organizations")
        .find()
        .toArray()
    res.json(organizations)
}
