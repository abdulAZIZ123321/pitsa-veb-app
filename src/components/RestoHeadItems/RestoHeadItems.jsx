import './RestoHeadItems.scss';


const RestoHeadItems = ({ data }) => {
    return (
        <div className="resto-items-wrapper">
            <div className="head-texts">
                <h1 className="head-title">Jaegar Resto</h1>
                <h4 className="resto-subtitle">{data}</h4>
            </div>

           <label htmlFor="searcher" className="searcher-wrap">
                <input type="search" name="" id="searcher" className="searcher" placeholder="Search for food, coffe, etc.."/>
           </label>
        </div>
    )
}

export default RestoHeadItems;