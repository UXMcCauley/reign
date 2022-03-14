import styles from "../../styles/Timecards.module.scss";
import {Chat, Phone} from "phosphor-react";
import Image from "next/image";
import DataTable from "react-data-table-component";
import {customTableStyles, timecardColumns} from "../../lib/helpers";
import {PrimaryButton} from "../universal/ui/Buttons";
import {useState} from "react";

function TimecardDetails(props) {
    console.log(props.timecard.punches)
    const [rating, setRating] = useState(1)
    const handleRating = (value) => {
        setRating(value)
        // other logic
    }
    return (
        <div className={styles.summary}>
            <div className={styles.summaryTop}>
                <Phone className={styles.phone} size={40} color={"white"}/>
                <Chat className={styles.chat} size={40} color={"white"}/>
                <h1>{props.timecard.employeeName}</h1>

                <div className={styles.avatar}>
                    <Image alt={"Avatar"} src={"/batman_hero_avatar_comics-512.webp"} layout={"fill"}/>
                </div>

            </div>
            <div className={styles.timesheet}>
                <div style={{backgroundColor: "black", height: 70}}/>
                <DataTable
                    columns={timecardColumns()}
                    data={props.timecard.punches}
                    dense={false}
                    theme={"dark"}
                    customStyles={customTableStyles}/>


            </div>
            <div className={styles.details}>
                <h1><span style={{color: "#747474"}}>Daily performance rating:</span> <strong>{rating/10}</strong></h1>
                <div className={styles.inputContainer}>
                    <input type="range"
                           min="1"

                           max="100"
                           value={rating}
                           className={styles.slider}
                           onChange={(e) => {
                               handleRating(e.target.value)
                           }}/>
                </div>
                <PrimaryButton label={"Approve"} color={"blue"} icon={"Approve"}/>
            </div>
        </div>
    );
}

export default TimecardDetails;
