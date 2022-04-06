import {connectToDatabase} from "../../../lib/dbConnect";
import {ObjectId} from "mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    let startDate = new Date()
    let endDate = new Date()

    if(req.query.age === "36-45"){
        startDate.setFullYear(startDate.getFullYear() - 45)
        endDate.setFullYear(endDate.getFullYear() - 36)
    }else if(req.query.age === "26-35"){
        startDate.setFullYear(startDate.getFullYear() - 35)
        endDate.setFullYear(endDate.getFullYear() - 26)
    }else if(req.query.age === "16-18"){
        startDate.setFullYear(startDate.getFullYear() - 18)
        endDate.setFullYear(endDate.getFullYear() - 16)
    }else if(req.query.age === "19-25"){
        startDate.setFullYear(startDate.getFullYear() - 25)
        endDate.setFullYear(endDate.getFullYear() - 19)
    }else if(req.query.age === "46-55"){
        startDate.setFullYear(startDate.getFullYear() - 55)
        endDate.setFullYear(endDate.getFullYear() - 46)
    }else{
        startDate.setFullYear(startDate.getFullYear() - 200)
        endDate.setFullYear(endDate.getFullYear() - 56)
    }

    const testQuery2 = {
        "organization": ObjectId("61bf60ecddd910d9c0a18df1"),
        "gender": req.query.gender === "All" ? {$exists: true} : req.query.gender,
        "birthdate": req.query.age === "All" ? {$exists: true} : {$gte: startDate, $lt: endDate},
        "ethnicity": req.query.ethnicity === "All" ? {$exists: true} : req.query.ethnicity
    }
    const pipeline = [
        {
            '$match': {
                'ethnicity': req.query.ethnicity === "All" ? {$exists: true} : req.query.ethnicity,
                'gender': req.query.gender === "All" ? {$exists: true} : req.query.gender,
                'birthdate': req.query.age === "All" ? {$exists: true} : {$gte: startDate, $lt: endDate}
            }
        }, {
            '$group': {
                '_id': null,
                'averageKpi': {
                    '$avg': '$kpi'
                },
                'averageWage': {
                    '$avg': '$wage'
                },
                'averagePerformance': {
                    '$avg': '$performance'
                },
                'averageAttendance': {
                    '$avg': '$attendance'
                }
            }
        }
    ]


    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find(testQuery2)
        .toArray()

    const pipedData = await db
        .collection("employees")
        .aggregate(pipeline)
        .toArray()


    res.json({
        employees: employees,
        data: pipedData,
    })
}
