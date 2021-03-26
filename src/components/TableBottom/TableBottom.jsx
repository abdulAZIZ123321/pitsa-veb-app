import './TableBottom.scss'


const TableBottom = ({tableImg, tableName, tableInfo, tablePrice, tableStatus}) => {
    return (
        <div className="table-bottom-wrapper">
                <img src={tableImg} alt="" className="table-bottom-img"/>
                <h4 className="table-bottom-info">
                    {tableName}
                </h4>
                <h4 className="table-bottom-info info--widthly">
                    {tableInfo}
                </h4>
                <p className="table-bottom-info">
                    {tablePrice}
                </p>
                <span className={`table-tag ${tableStatus}`}>
                    {tableStatus}
                </span>

        </div>
    )
}


export default TableBottom;