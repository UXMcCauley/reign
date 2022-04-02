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
                              '#e12162',
                              '#bc1a5a',
                              '#9829ab',
                              '#5528ab',
                              '#282bab',
                              '#2769aa',
                              '#56a8d7',
                              '#56d5b8',
                              '#60c186',

                          ]}
                          leafItemSettings={{
                              labelPath: 'Keycard',
                              labelTemplate: '<div>{{:Hours}}hrs</div>',
                              templatePosition: 'Center'
                          }}>
        </TreeMapComponent>
    )
}
