export default function Treemap({data}) {
    let dataTotal = 0
    let dataObject = []
    let marker = 0
    dataObject.map(item => {
        dataTotal += item.value
    })

    for (let i = 1; i <= data.length; i++) {
        if (i > 0 && i < 4) {
            data[i]["group"] = marker
            dataObject.push(data[i])
        }
        marker++
        console.log(parseInt(data.length / i), data.length % marker)
    }

    // get total of all values to later calculate percentages
    dataObject.sort((a, b) => {
        return b.value - a.value
    })

    console.log(dataObject)

    // set up container element
    const Container = ({children}) => {
        return (
            <div className={""}>
                {children}
            </div>
        )
    }

    // set up column divider
    const Column = ({children}) => {
        return (
            <div className={""}>
                {children}
            </div>
        )
    }

    return (
        <Container>
            {data.map((item, i) => {
                return (
                    <Column key={i}>{item.label}</Column>
                )
            })}
        </Container>
    )
}
