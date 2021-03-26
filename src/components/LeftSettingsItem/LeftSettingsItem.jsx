import './LeftSettingsItems.scss'


const LeftSettingsItem = ({stImg, stTitle, stText }) => {
    return (
        <div className="leftSettingsItem-wrapper">
          <div className="st-left-inner">
              <div className="lst-img">
                   <img src={stImg} alt="" className="st-img"/>
              </div>
                <div className="st-texts">
               
                <h5 className="st-title">{stTitle}</h5>
                <p className="st-text">
                {stText}
                </p>
                </div>

            
          </div>
        </div>
    )
}

export default LeftSettingsItem;