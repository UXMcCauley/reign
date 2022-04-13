
function Badges() {
    const badges = [
        {
            label: "100 Days",
            startColor: "from-cyan-500",
            endColor: "to-blue-500"
        },
        {
            label: "Helper",
            startColor: "from-pink-500",
            endColor: "to-violet-500"
        },
        {
            label: "Learner",
            startColor: "from-gray-500",
            endColor: "to-gray-900"
        },
        {
            label: "Teacher",
            startColor: "from-yellow-500",
            endColor: "to-yellow-900"
        },
        {
            label: "+8",
            startColor: "from-pink-500",
            endColor: "to-pink-900"
        }
    ]

    const badge = (data, idx) => {
        return (
            <div key={idx} className={`bg-gradient-to-r ${data.startColor} ${data.endColor} p-8 rounded-full relative ml-3`}>
                <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs"}>
                    {data.label}
                </div>
            </div>
        )
    }

    return (

            <div className={"flex h-8"}>
                {badges.map((item, i) => {
                    return badge(item, i)
                })}
            </div>

    );
}

export default Badges;
