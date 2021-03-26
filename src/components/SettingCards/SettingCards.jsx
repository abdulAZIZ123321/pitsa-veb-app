import './SettingCards.scss'

import qalam from '../../assests/images/icons/qalam.svg'


const SettingCards = ({stCardsImg, stCardsTitle, stCardsText}) => {
    return (
        <div className="settings-cards">
            <img src={stCardsImg} alt="" className="st-cards-img"/>

            <div className="st-cards-texts">
                <h4 className="st-cards-title">{stCardsTitle}</h4>
                <p className="st-cards-text">{stCardsText}</p>
            </div>

            <button className="st-cards-btn">
                <img src={qalam} alt="" className="editor-img"/>

                Edit dish
            </button>
        </div>
    )
}

export default SettingCards;