import './RightList.scss';

import RightSideTop from '../../components/RightSideTop';
import RightSideBottom from '../../components/RightSideBottom';

import dish1 from '../../assests/images/kosa1.jpg';
import dish2 from '../../assests/images/kosa2.jpg';
import dish3 from '../../assests/images/kosa3.jpg';


let rsArr = [
  {
    rsbImg: dish2,
    rsbTitle: 'Spicy seasoned seafood noodles',
    rsbText: '200 dishes ordered'
  },
  {
    rsbImg: dish1,
    rsbTitle: 'Salted pasta with mushroom sauce',
    rsbText: '120 dishes ordered'
  },
  {
    rsbImg: dish3,
    rsbTitle: 'Beef dumpling in hot and sour soup',
    rsbText: '80 dishes ordered'
  }
]


const RightList = () => {
    return (
      <div className="right-list-wrapper">
        <div className="right-list-inner">
            <RightSideTop/>

          <hr/>
          {
            rsArr.map((item) => (
              <RightSideBottom
                rsbImg={item.rsbImg}
                rsbTitle={item.rsbTitle}
                rsbText={item.rsbText}
              
              />
            ))
          }

           <div className="rs-btn-wrapper">
             <button className="rsb-btn">
               View All
           </button>
           </div>
        </div>
      </div>
    )
}

export default RightList;