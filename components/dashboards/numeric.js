import NumericDisplay from "./numericDisplay";

export default function Numeric(props){
    console.log(props)
    return (
        props.data.map((chart, i) => {
            return <NumericDisplay title={chart.fields.Name}
                       number={chart.fields.Value}
                       isMoney={eval(chart.fields.Money)}
                       interaction={chart.fields.Interaction}
                       selectCategory={chart.fields.SelectCategory}
                       key={i}/>

        })
    )
}