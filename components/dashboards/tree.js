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
    return (
        <TreeMapComponent id='treemap'
                          background={"transparent"}
                          dataSource={dataset} weightValuePath='Hours'
                          palette={[
                              'rgba(86, 213, 184, 0.5)',
                              'rgba(96, 193, 134, 0.5)',
                              'rgba(225, 33, 98, 0.5)',
                              'rgba(188, 26, 90, 0.5)',
                              'rgba(152, 41, 171, 0.5)',
                              'rgba(85, 40, 171, 0.5)',
                              'rgba(40, 43, 171, 0.5)',
                              'rgba(39, 105, 170, 0.5)',
                              'rgba(86, 168, 215, 0.5)',

                          ]}
                          leafItemSettings={{
                              labelPath: 'Keycard',
                              labelTemplate: '<div>{{:Hours}}hrs</div>',
                              templatePosition: 'Center'
                          }}>
        </TreeMapComponent>
    )
}
