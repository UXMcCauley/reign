import React from 'react';

function ActionBadge({label, number}) {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", padding: 12, background: "#000000", margin: "12px 0"}}>
            <div style={{fontSize: 12, alignSelf: "center"}}>
                {label}
            </div>
            <div style={{background: "#e12162", padding: 4, borderRadius: 20, width: 26, textAlign: "center"}}>
                {number}
            </div>
        </div>
    );
}

export default ActionBadge;
