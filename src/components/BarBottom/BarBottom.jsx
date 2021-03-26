import './BarBottom.scss'



const BarBottom = ({barImg, barTitle, barSubtitle}) => {
    return (
        <div className="bar-bottom-wrapper">
           

            <div className="bar-img-right">
                <div className="bar-info">
                    <img src={barImg} alt=""/>

                    <div className="bar-info-left">
                        <h4 className="bar-info-title">{barTitle}</h4>
                        <p className="bar-info-subtitle">{barSubtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarBottom;