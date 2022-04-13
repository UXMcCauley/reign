function CareerOverviewBar() {
    return (
        <div className={"w-full mt-20"}>
            <h1 className={"w-full text-center  text-black dark:text-white"}>Career Overview</h1>
            <div className={"flex rounded-full overflow-hidden text-xs"}>
                <div className={"flex justify-center align-middle p-3 w-1/6 bg-violet-700"}>
                    <div>Education 18%</div>
                </div>
                <div className={"flex justify-center align-middle p-3 w-2/6 bg-indigo-700"}>
                    <div>Carpentry 29%</div>
                </div>
                <div className={"flex justify-center align-middle p-3 w-3/6 bg-pink-700"}>
                    <div>Concrete 53%</div>
                </div>
            </div>
        </div>
    );
}

export default CareerOverviewBar;
