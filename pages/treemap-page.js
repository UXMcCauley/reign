import Treemap from "../components/universal/Treemap";

export default function TreemapPage() {
    const data = [
        {label: "Label 1", value: 1100, children: []},
        {label: "Label 2", value: 1212, children: []},
        {label: "Label 3", value: 1010, children: []},
        {label: "Label 4", value: 987, children: []},
        {label: "Label 5", value: 845, children: []},
        {label: "Label 6", value: 801, children: []},
        {label: "Label 7", value: 704, children: []},
        {label: "Label 8", value: 634, children: []},
        {label: "Label 9", value: 569, children: []},
        {label: "Label 10", value: 1436, children: []},
        {label: "Label 11", value: 317, children: []},
        {label: "Label 12", value: 295, children: []},
        {label: "Label 13", value: 130, children: []},
    ]
    return (
        <div>
            <Treemap data={data}/>
        </div>
    )
}
