import {Doughnut} from "react-chartjs-2";

export default function Donuts(props){
    return (
        props.data.map((chart, i) => {
                return <div style={{width: 100 / props.data.length -2 + "%"}} key={i}>
                    <div style={{textAlign: "center", padding: "12px 0", textTransform: "uppercase", fontSize: "16px"}}>
                        {chart.fields.Name}
                    </div>
                    <Doughnut type={"Doughnut"} data={{
                        labels: chart.fields.Labels,
                        datasets: [
                            {
                                data: chart.fields.Data.split(',').map(Number),
                                backgroundColor: chart.fields.Colors,
                                borderColor: chart.fields.Colors
                            }
                        ]
                    }}
                              options={{
                                  responsive: true,
                                  plugins: {
                                      legend: {
                                          position: 'bottom',
                                          display: true
                                      },
                                      title: {
                                          display: false,
                                          text: chart.fields.Name,
                                      },
                                  },

                              }}/>
                </div>
            })
    )
}