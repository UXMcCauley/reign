import {Doughnut} from "react-chartjs-2";

export default function Donuts(props){
    return (
        props.data.map((chart, i) => {
                return <div style={{width: 100 / props.data.length + "%"}} key={i}>
                    <div style={{textAlign: "center"}}>
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
                                          position: 'top',
                                          display: false
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