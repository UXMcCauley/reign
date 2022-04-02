import Select from "../ui/Select";

function TopMetric({title, value, subtitle, options}) {
    return (
        <div className={`flex-col align-middle text-center justify-center border-l border-gray-700 w-auto`}>
            <div className={"text-xs text-black text-center uppercase font-light self-center dark:text-white"}>{title}</div>
            <div className={"flex text-center flex-col align-middle justify-center"}>
                <div className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{value}</div>
                <div className={"text-black text-center dark:text-white"}>{subtitle}</div>
                <div className={`self-center`}>
                    <Select options={options}/>
                </div>
            </div>
        </div>
    );
}

export default TopMetric;
