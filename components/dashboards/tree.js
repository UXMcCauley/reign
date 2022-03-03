import {TreeMapComponent} from "@syncfusion/ej2-react-treemap";

export default function TreeMap(props){
    const dataset = []
    props.data.records.map((record) => {
        dataset.push({
            Keycard: record.fields.Keycard,
            Hours: record.fields.Hours,
            Percentage: record.fields.Percentage,
            Rank: record.fields.Rank
        })
    })
    console.log(dataset)
    return (
        <TreeMapComponent id='treemap'
                          dataSource={dataset} weightValuePath='Hours'
                          palette={['rgb(211,250,0)', 'rgb(23,108,228)', 'rgb(4,215,252)', 'rgb(255,0,183)', 'rgb(79,10,231)', 'rgb(255, 159, 64)', 'rgb(255, 159, 64)']}
                          leafItemSettings={{
                              labelPath: 'Keycard',
                              labelTemplate: '<div>{{:Hours}}hrs</div>',
                              templatePosition: 'Center'
                          }}>
        </TreeMapComponent>
    )
}