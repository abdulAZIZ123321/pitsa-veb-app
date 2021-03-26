import './DashTopItems.scss';

const DashTopItems = ({img, img2, result, persentage, dollar }) => {
    return (
        <div className="dash-items-wrapper">
            <div className="dash-items-inner">
                <div className="dash-top">
                    <img src={img} alt="" className="dash-image"/>
                    <span className="persen-info">{persentage}</span>
                    <img src={img2} alt="" className="dash-image2" />
                </div>
                <div className="dash-mid">
                        <h4 className="dash-title">
                            {dollar}
                        </h4>
                </div>
                <div className="dash-bottom">
                        <h5 className="dash-subtitle">
                            {result}
                        </h5>
                </div>
            </div>
        </div>
    )
}

export default DashTopItems;