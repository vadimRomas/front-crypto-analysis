export const Sonnet = (props) => {
    // {"symbol": "BTCUSDT", "price": "17266.04", "event": "STRONG_BUY", "time": "15m"}
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    {/*<th scope="col">#</th>*/}
                    <th scope="col">Coin</th>
                    <th scope="col">price</th>
                    <th scope="col">WHAT</th>
                    <th scope="col">TimeFrame</th>
                    <th scope="col">time</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map(value => {
                    return <tr key={value.time}>
                        <td>{value.symbol}</td>
                        <td>{value.price}</td>
                        <td>{value.event}</td>
                        <td>{value.time_frame}</td>
                        <td>{value.time}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}
