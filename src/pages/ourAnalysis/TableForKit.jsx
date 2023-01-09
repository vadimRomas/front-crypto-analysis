// import {useState} from "react";

export const TableForKit = (props) => {
    // const [] = useState(false)
    // function showMore() {
    //     return undefined;
    // }slice(0, 3).

    return (
        <div>
            <h2>{props.name} Order Book</h2>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    {/*<th scope="col">#</th>*/}
                    <th scope="col">Coin</th>
                    <th scope="col">Sell or BUY at this price</th>
                    <th scope="col">NOW</th>
                    <th scope="col">How much</th>
                </tr>
                </thead>
                <tbody>
                {props.data.slice(0, 6).map((value) => {
                        if (value.max_ask.how_much_USDT > 100000 && value.max_bid.how_much_USDT > 100000) {
                            return (
                                <>
                                    <tr className="table-danger">
                                        <td>{value.symbol}</td>
                                        <td>{value.max_ask.price.toFixed(4)}</td>
                                        <td>{value.price.price}</td>
                                        <td>{value.max_ask.how_much_USDT.toFixed(4)}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>{value.symbol}</td>
                                        <td>{value.max_bid.price.toFixed(4)}</td>
                                        <td>{value.price.price}</td>
                                        <td>{value.max_bid.how_much_USDT.toFixed(4)}</td>
                                    </tr>
                                </>
                            )
                        }
                        if (value.max_ask.how_much_USDT > 100000) {
                            return (
                                <tr className="table-danger">
                                    <td>{value.symbol}</td>
                                    <td>{value.max_ask.price.toFixed(4)}</td>
                                    <td>{value.price.price}</td>
                                    <td>{value.max_ask.how_much_USDT.toFixed(4)}</td>
                                </tr>
                            )
                        }
                        return (
                            <tr className="table-success">
                                <td>{value.symbol}</td>
                                <td>{value.max_bid.price.toFixed(4)}</td>
                                <td>{value.price.price}</td>
                                <td>{value.max_bid.how_much_USDT.toFixed(4)}</td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    )
}
