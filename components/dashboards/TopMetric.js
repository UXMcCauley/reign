import Select from "../ui/Select";

function TopMetric({title, value, subtitle, options}) {
    return (
        <div className={"w-40 clear-both"}>
            <div className={"text-black text-center uppercase font-light dark:text-white"}>{title}</div>
            <div className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{value}</div>
            <div className={"text-black text-center dark:text-white"}>{subtitle}</div>
            <Select options={options}/>
        </div>
    );
}

export default TopMetric;
