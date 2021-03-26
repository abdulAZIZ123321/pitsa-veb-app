import './RightSideBottom.scss'

const  RightSideBottom = ({rsbImg, rsbTitle, rsbText}) => {
    return (
       <div className="rs-bottom">
           <div className="rsb-main">
                <img src={rsbImg} alt="" className="rsb-img"/>
                <div className="brothers2">
                    <h4 className="rsb-title">{rsbTitle}</h4>
                    <p className="rsb-text">{rsbText}</p>
                </div>
           </div>
          
       </div>
    )
}

export default RightSideBottom;