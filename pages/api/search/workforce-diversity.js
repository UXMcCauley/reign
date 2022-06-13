import {connectToDatabase} from "../../../lib/dbConnect";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {


    const allWages = [
        {
            '$group': {
                '_id': null,
                'averageWage': {
                    '$avg': '$wage'
                },
            }
        }
    ]
    const groupedEthnicity = [
        {
            '$group': {
                '_id': "$ethnicity",
                'employees': {
                    '$avg': '$wage'
                },
            },
        }
    ]


    const {db} = await connectToDatabase()

    const a = await db
        .collection("employees")
        .aggregate(allWages)
        .toArray()

    const groupedEth = await db
        .collection("employees")
        .aggregate(groupedEthnicity)
        .toArray()

    const groupedGen = await db
        .collection("employees")
        .aggregate(groupedGender)
        .toArray()

    const groupedKey = await db
        .collection("employees")
        .aggregate(groupedKeycard)
        .toArray()

    const groupAge = await db
        .collection("employees")
        .aggregate(groupedAge)
        .toArray()

    res.json({
        data: {
            allWages: a,
            byEthnicity: groupedEth,
            byGender: groupedGen,
            byKeycard: groupedKey,
            byAge: groupAge
        },
    })
}
