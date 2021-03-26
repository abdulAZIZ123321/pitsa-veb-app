import './TableTop.scss';



const TableTop = () => {
    return (
        <div className="table-top-wrapper">
            <div className="table-intop">
                <h4 className="table-top-title">
                    Order Report
                </h4>
               <label htmlFor="selecter2" className="selecter2">
                    <select name="" id="selecter2" className="table-top-selecter">
                    <option value="">Filter Order</option>
                    

                    </select>
               </label>
            </div>

            <div className="table-bot">
                <h5 className="table-top-subtitles">Customer</h5>
                <h5 className="table-top-subtitles">Menu</h5>
                <h5 className="table-top-subtitles">Total Payment</h5>
                <h5 className="table-top-subtitles">Status</h5>
            </div>
        </div>
    )
}

export default TableTop;