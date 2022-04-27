import useState from "react";

async function GetStockByTicker() {
  fetch('http://localhost:8080/stock/MOWI').then(async (response) => {
    const data = await response.json();
    console.log("test" + data)
    return data;
  })
}


function StockData() {
    const [getResult, setGetResult] = useState(null);
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    }


    async function getDataById() {
        
        try {
            const res = await fetch('http://localhost:8080/stock/MOWI');
            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const data = await res.json();
            const result = {
                data: data,
                status: res.status,
                statusText: res.statusText,
                headers: {
                "Content-Type": res.headers.get("Content-Type"),
                "Content-Length": res.headers.get("Content-Length"),
                },
            };
            setGetResult(fortmatResponse(result));
        } catch (err) {
            setGetResult(err.message);
        }
    }
      

    const Data = getDataById().map(
        (info)=>{

            console.log(info.reportyear);
            console.log(setGetResult)

            return(
                <tr>
                    <td>
                        {info.reportyear}
                    </td>
                    <td>
                        To be integrated
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