import JsonData from './Test.json'

function StockData() {
    const Data = JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>
                        {info.year}
                    </td>
                    <td>
                        {info.price}
                    </td>
                    <td>
                        {info.totalEarnings}
                    </td>
                    <td>
                        {info.totalExpenditures}
                    </td>
                </tr>
            )
        }
    )

    return(
        <div className="StockData">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Total Earnings</th>
                        <th>Total Expenditures</th>
                    </tr>
                </thead>
                <tbody>
                    {Data}
                </tbody>
            </table>
        </div>
    )
}

export default StockData