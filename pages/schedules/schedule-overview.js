import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
// import SchedulingAll from "https://framer.com/m/SchedulingAll-Dcuy.js@zfxJqulnWLCj6Qia4N97"
// import AddShiftsFlyin from "https://framer.com/m/AddShiftsFlyin-geLH.js@8en6jtfD1VBzk84iOZlS"
import styles from "./styles/ScheduleOverview.module.scss"
import {useState} from "react";

export default function ScheduleOverview() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Schedules"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    {/*<SchedulingAll onClick={() => {*/}
                    {/*    setOpen(true)*/}
                    {/*}}*/}
                    {/*               onClickDay={(event) => {*/}
                    {/*                   console.log(event)*/}
                    {/*               }}*/}
                    {/*               onClickWeek={() => {*/}
                    {/*                   alert("week")*/}
                    {/*               }}*/}
                    {/*               onClickMonth={() => {*/}
                    {/*                   alert("month")*/}
                    {/*               }}*/}
                    {/*/>*/}
                    <div className={`${styles.flyin} ${open === true ? styles.open : null}`}>
                        {/*<AddShiftsFlyin saveShifts={() => {setOpen(false)}}*/}
                        {/*    closeOverlay={() => {setOpen(false)}}/>*/}
                    </div>
                </div>

            </ContentContainer>
        </>
    )
}
