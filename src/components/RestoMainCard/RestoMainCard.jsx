import './RestoMainCard.scss'

const RestoMainCard = ({id, img, cardTitle, cardPrice, cardInfo}) => {
    return (
        <label htmlFor="pitsa-checker" className="card-wrapper">
           <div className="card-inner">

             <div className="two-bro">
                    <img src={img} alt="" className="card-img"/>
            <h5 className="card-title">{cardTitle}</h5>
             </div>
            <p className="card-price">{cardPrice}</p>
            <p className="card-info">{cardInfo}</p>

            <input type="checkbox" name="" id="pitsa-checker" className="pit-checker"/>
           </div>
        </label>
    )
}


export default RestoMainCard;