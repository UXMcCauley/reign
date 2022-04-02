function ActionBadge({label, number}) {
    return (
        <div className={"actionBadge"}>
            <div className={"label"}>
                {label}
            </div>
            <div className={"number"}>
                {number}
            </div>
        </div>
    );
}

export default ActionBadge;
