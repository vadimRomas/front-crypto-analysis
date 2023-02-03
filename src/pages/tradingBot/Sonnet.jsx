import {useState} from "react";
import Select from "react-select";

export const Sonnet = (props) => {
    const [filterIncludes, setFilterIncludes] = useState('all')
    const intervals = [
        {value: 'all', label: 'all'},
        {value: '1m', label: '1m'},
        {value: '15m', label: '15m'},
        {value: '30m', label: '30m'},
        {value: '1h', label: '1h'}
    ]

    const upgradeDate = props.data.map(value => {
        const date = new Date(value.time);
        const month = date.toLocaleString('default', {month: 'short'})

        value.time = `${date.getDate()} ${month} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return value
    })

    return (
        <div>
            <div style={{width: '20%'}}>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={intervals[0]}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    name="filter interval"
                    options={intervals}
                    onChange={value => setFilterIncludes(value.value)}
                />
            </div>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">price</th>
                    <th scope="col">WHAT</th>
                    <th scope="col">Interval</th>
                    <th scope="col">time</th>
                </tr>
                </thead>
                <tbody>
                {upgradeDate.filter(value => {
                    if (filterIncludes !== 'all') {
                        if (value.interval === filterIncludes) {
                            return value
                        }
                        return null
                    }
                    return value

                }).map(value => {
                    return <tr key={value.time}>
                        <td>{value.symbol}</td>
                        <td>{value.price}</td>
                        <td>{value.what}</td>
                        <td>{value.interval}</td>
                        <td>{value.time}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}
