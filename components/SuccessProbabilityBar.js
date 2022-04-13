function SuccessProbabilityBar() {
    return (
        <div className={"relative"}>
            <h1 className={"w-full text-center text-black dark:text-white"}>Success Probability</h1>
            <div className={"flex m-auto rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xs"}>
                <div style={{display: "flex", width: "100%", height: 50}}>
                    <div className={"w-1/4 flex align-middle justify-center border-r-2 dark:border-gray-800"}>
                        <div style={{alignSelf: "center"}}>Low</div>
                    </div>
                    <div className={"w-1/4 flex align-middle justify-center border-r-2  dark:border-gray-800"}>
                        <div style={{alignSelf: "center"}}>Average</div>
                    </div>
                    <div className={"w-1/4 flex align-middle justify-center border-r-2 dark:border-gray-800"}>
                        <div style={{alignSelf: "center"}}>Above Average</div>
                    </div>
                    <div className={"w-1/4 flex align-middle justify-center"}>
                        <div style={{alignSelf: "center"}}>High</div>
                    </div>
                </div>
            </div>
            <div className={"absolute w-1 h-14 -bottom-1 right-20 bg-gray-900 dark:bg-amber-50 rounded-full"}/>
        </div>
    );
}

export default SuccessProbabilityBar;
