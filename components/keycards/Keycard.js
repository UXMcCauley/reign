import React, {useState} from 'react';
import styles from "../../pages/keycards/styles/AllKeycards.module.scss";
import {Plus, Minus} from "phosphor-react";

function KeycardListItem({card}) {
    const [active, setActive] = useState(false)
    return (
        <li onClick={() => {
            setActive(!active)
        }} className={styles.keycard}>
            <div style={{display:"flex"}}>
                <div style={{marginRight: 12}}>{active ? <Minus/> : <Plus/>}</div>
                <div>{card.name}</div>
            </div>
            <table className={`${styles.taskList} ${active ? styles.open : null}`}>
                {card.tasks.map((task, i) => {
                    return (
                        <tr key={i}>
                            <td className={styles.cell}>
                                {task.name}
                            </td>
                            <td className={styles.cellHours}>
                                {task.minValue}
                            </td>
                            <td>
                                {task.type}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </li>
    );
}

export default KeycardListItem;
