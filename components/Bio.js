function Bio({data}) {
    return (
        <div className="w-1/2 flex flex-col text-black">
            <div className={"mb-5"}>
                <div className={"text-black "}>Bio</div>
                <div className={"text-xs font-light "}>{data.bio}</div>
            </div>
            <div className={"mb-5"}>
                <div className={"text-black "}>Education</div>
                <div className={"text-sm font-light"}>
                    <ul className={"p-0 m-0 text-xs"}>
                        <li>{data.highSchool}</li>
                        <li>{data.college}</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className={"text-black "}>Certifications</div>
                <div className={"text-sm font-light text-xs"}>
                    <ul>
                        <li>None</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Bio;
