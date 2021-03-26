import '../RestoMiddle/RestoMiddle.scss'

import RestoMiddleItems from '../../components/RestoMiddleItems'

const RestoMiddle = () => {
    return (
       <div className="mid-wrapper">
           <RestoMiddleItems title="Hot Dishes"/>
           <RestoMiddleItems title="Cold Dishes"/>
           <RestoMiddleItems title="Soup"/>
           <RestoMiddleItems title="Grill"/>
           <RestoMiddleItems title="Appetizer"/>
           <RestoMiddleItems title="Dessert"/>

       

       </div>
          
    )
}

export default RestoMiddle;