import React, {useState} from 'react';

function Checkbox({employeeId, setSelectedEmployees}) {
    const [checked, setChecked] = useState(false)
    return (
        <input
            data-employeeId={employeeId}
            type={"checkbox"}
            checked={checked}
            onChange={() => {
                setChecked(!checked)
                setSelectedEmployees( (arr) => [...arr, employeeId])
            }}/>
    );
}

export default Checkbox;
