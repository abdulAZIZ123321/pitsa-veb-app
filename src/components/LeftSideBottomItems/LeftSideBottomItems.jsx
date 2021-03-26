import './LeftSideBottomItems.scss'

import chelak from '../../assests/images/icons/Vector.svg'

const LeftSideBottomItems = ({id, img, title, subtitle, price }) => {
    return (
       <div className="bottom-items-wrapper">
           <div className="items-left">
                <div className="left-top">
                    <div className="top-little-block">
                        <img src={img} alt="" className="image"/>
                        <div className="brothers">
                            <h6 className="little-title">{title}</h6>
                        <p className="little-text">{subtitle}</p>
                        </div>
                    </div>

                   <div className="numer">
                        <input type="number" className="num" placeholder="5"/>
                   </div>
                </div>

                <div className="left-bottom">
                    <input type="text" className="typer" placeholder="Please, just a little bit spicy only." />
                </div>
           </div>

           <div className="items-rigth">
                <p className="rigth-text">{price}</p>
                <button className="btn-rigth">
                    <img src={chelak} alt=""/>
                </button>
           </div>
       </div>
    )
}

export default LeftSideBottomItems;