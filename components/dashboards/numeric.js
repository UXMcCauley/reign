import NumericDisplay from "./numericDisplay";

export default function Numeric(props){
    return (
        props.data.map((chart, i) => {
            return <NumericDisplay title={chart.fields.Name}
                           number={chart.fields.Value}
                           isMoney={eval(chart.fields.Money)}
                           toggle={eval(chart.fields.Toggle)}
                           key={i}/>

        })
    )
}