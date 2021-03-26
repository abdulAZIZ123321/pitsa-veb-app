import '../RestoMiddleItems/RestoMiddleItems.scss'

const RestoMiddleItems = ({ title }) => {
    return (
        <div className="mid-items-wrapper">
            <a href="" className="mid-links">
                <h5  className="links">{title}</h5>
                <div className="line"></div>
            </a>
           
        </div>
    )
}

export default RestoMiddleItems;