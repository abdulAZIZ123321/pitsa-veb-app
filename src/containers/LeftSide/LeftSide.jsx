import '../LeftSide/LeftSide.scss'

import LeftSideTopItems from '../../components/LeftSideTopItems'

import LeftSideBottomItems from '../../components/LeftSideBottomItems'

import LeftBottomer from '../LeftBottomer'

import kosa1 from '../../assests/images/kosa1.jpg'
import kosa2 from '../../assests/images/kosa2.jpg'
import kosa3 from '../../assests/images/kosa3.jpg'
import kosa4 from '../../assests/images/kosa4.jpg'
import kosa5 from '../../assests/images/kosa5.jpg'

let infoArr = [
    {
        id: 1,
        img: kosa1,
        title: 'Spicy seasoned sea...',
        subtitle: '$' + 2.29,
        price: '$ 4,58',

    },

     {
        id: 2,
        img: kosa2,
        title: 'Salted pasta with mu...',
        subtitle: '$' + 2.69,
        price: '$ 2.69',

    },

     {
        id: 3,
        img: kosa3,
        title: 'Spicy instant noodle...',
        subtitle: '$' + 3.49,
        price: '$ 10,47',

    },

     {
        id: 4,
        img: kosa4,
        title: 'Healthy noodle with ...',
        subtitle: '$' + 3.29,
        price: '$3.29',

    },

     {
        id: 5,
        img: kosa5,
        title: 'Spicy seasoned sea...',
        subtitle: '$' + 2.29,
        price: '$ 4,58',

    },

     {
        id: 6,
        img: kosa4,
        title: 'Spicy seasoned sea...',
        subtitle: '$' + 2.29,
        price: '$ 4,58',

    },

     {
        id: 7,
        img: kosa1,
        title: 'Spicy seasoned sea...',
        subtitle: '$' + 2.29,
        price: '$ 4,58',

    },

     { 
        id: 8,
        img: kosa1,
        title: 'Spicy seasoned sea...',
        subtitle: '$' + 2.29,
        price: '$ 4,58',

    }

]


const LeftSide = () => {
    return (
      <div className="leftSide-wrapper">
          <div className="leftSide-inner">
                <LeftSideTopItems id="#34562"/>

                <div className="forBottom">
                    {
                    infoArr.map((item) => (
                        <LeftSideBottomItems
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                        
                        
                        />
                    ))
                }
                </div>

                <LeftBottomer/>

          </div>
      </div>
    )
}

export default LeftSide;