import {connectToDatabase} from "../../../lib/dbConnect";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    let startDate = new Date()
    let endDate = new Date()

    if (req.query.age === "36-45") {
        startDate.setFullYear(startDate.getFullYear() - 45)
        endDate.setFullYear(endDate.getFullYear() - 36)
    } else if (req.query.age === "26-35") {
        startDate.setFullYear(startDate.getFullYear() - 35)
        endDate.setFullYear(endDate.getFullYear() - 26)
    } else if (req.query.age === "16-18") {
        startDate.setFullYear(startDate.getFullYear() - 18)
        endDate.setFullYear(endDate.getFullYear() - 16)
    } else if (req.query.age === "19-25") {
        startDate.setFullYear(startDate.getFullYear() - 25)
        endDate.setFullYear(endDate.getFullYear() - 19)
    } else if (req.query.age === "46-55") {
        startDate.setFullYear(startDate.getFullYear() - 55)
        endDate.setFullYear(endDate.getFullYear() - 46)
    } else {
        startDate.setFullYear(startDate.getFullYear() - 200)
        endDate.setFullYear(endDate.getFullYear() - 56)
    }

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
                'averageWage': {
                    '$avg': '$wage'
                },
            },
        }
    ]

    const groupedGender = [
        {
            '$group': {
                '_id': "$gender",
                'averageWage': {
                    '$avg': '$wage'
                },
            }
        }
    ]

    const groupedKeycard = [
        {
            '$group': {
                '_id': "$keycard",
                'averageWage': {
                    '$avg': '$wage'
                },
            }
        }
    ]

    const groupedAge = [
        {
            '$match': {
                'birthdate': {
                    '$exists': true
                }
            }
        }, {
            '$project': {
                '_id': 0,
                'age': {
                    '$divide': [
                        {
                            '$subtract': [
                                new Date(), {
                                    '$ifNull': [
                                        '$birthdate', new Date()
                                    ]
                                }
                            ]
                        }, 1000 * 86400 * 365
                    ]
                },
                'wage': 1
            }
        }, {
            '$project': {
                'range': {
                    '$concat': [
                        {
                            '$cond': [
                                {
                                    '$and': [
                                        {
                                            '$gt': [
                                                '$age', 16
                                            ]
                                        }, {
                                            '$lt': [
                                                '$age', 18
                                            ]
                                        }
                                    ]
                                }, '16-18', ''
                            ]
                        }, {
                            '$cond': [
                                {
                                    '$and': [
                                        {
                                            '$gte': [
                                                '$age', 19
                                            ]
                                        }, {
                                            '$lt': [
                                                '$age', 25
                                            ]
                                        }
                                    ]
                                }, '19-25', ''
                            ]
                        }, {
                            '$cond': [
                                {
                                    '$and': [
                                        {
                                            '$gte': [
                                                '$age', 26
                                            ]
                                        }, {
                                            '$lt': [
                                                '$age', 35
                                            ]
                                        }
                                    ]
                                }, '26-35', ''
                            ]
                        }, {
                            '$cond': [
                                {
                                    '$and': [
                                        {
                                            '$gte': [
                                                '$age', 36
                                            ]
                                        }, {
                                            '$lt': [
                                                '$age', 45
                                            ]
                                        }
                                    ]
                                }, '36-45', ''
                            ]
                        }, {
                            '$cond': [
                                {
                                    '$and': [
                                        {
                                            '$gte': [
                                                '$age', 46
                                            ]
                                        }, {
                                            '$lt': [
                                                '$age', 55
                                            ]
                                        }
                                    ]
                                }, '46-55', ''
                            ]
                        }, {
                            '$cond': [
                                {
                                    '$gte': [
                                        '$age', 56
                                    ]
                                }, '56+', ''
                            ]
                        }
                    ]
                },
                'wage': '$wage'
            }
        }, {
            '$group': {
                '_id': '$range',
                'count': {
                    '$sum': 1
                },
                'averageWage': {
                    '$avg': '$wage'
                }
            }
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
