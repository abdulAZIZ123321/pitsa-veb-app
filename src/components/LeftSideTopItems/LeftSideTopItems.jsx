import './LeftSideTopItems.scss'

const LeftSideTopItems = ({ id }) => {
    return (
        
       <div className="top-items-wrapper">
        <div className="top-inner">
                <h4 className="title-top">
               Orders <span className="order-id">{id}</span>
            </h4>
        
        <div className="top-btn-wrapper">
                <button className="top-btn">Dine In</button>
                <button className="top-btn">To Go</button>
                <button className="top-btn">Delivery</button>
        </div>

        <div className="top-subtitles-wrapper">
            <h5 className="top-subtitles">Item</h5>
           <div className="lefter">
                <h5 className="top-subtitles">Qty</h5>
            <h5 className="top-subtitles">Price</h5>
           </div>
        </div>

            <hr/>
        </div>
       </div>

    )
}

export default LeftSideTopItems