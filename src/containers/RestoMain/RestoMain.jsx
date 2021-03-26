import RestoMainItems from '../../components/RestoMainItems'

import RestoMainCard from '../../components/RestoMainCard'

import './RestoMain.scss'
import kosa1 from '../../assests/images/kosa1.jpg'
import kosa2 from '../../assests/images/kosa2.jpg'
import kosa3 from '../../assests/images/kosa3.jpg'
import kosa4 from '../../assests/images/kosa4.jpg'
import kosa5 from '../../assests/images/kosa5.jpg'

let mainInfo = [
    {
        id: 1,
        img: kosa1,
        cardTitle: 'Spicy seasoned seafood noodles',
        cardPrice: '$' + 2.29,
        cardInfo: 20 + 'Bowls available'
        
    },

    {
        id: 2,
        img: kosa2,
        cardTitle: 'Salted Pasta with mushroom sauce',
        cardPrice: '$' + 2.69,
        cardInfo: 11 + 'Bowls available'
        
    },

    {
        id: 3,
        img: kosa3,
        cardTitle: 'Beef dumpling in hot and sour soup',
        cardPrice: '$' + 2.99,
        cardInfo: 16 + 'Bowls available'
        
    },

    {
        id: 4,
        img: kosa4,
        cardTitle: 'Healthy noodle with spinach leaf',
        cardPrice: '$' + 3.29,
        cardInfo: 22 + 'Bowls available'
        
    },

    {
        id: 5,
        img: kosa5,
        cardTitle: 'Hot spicy fried rice with omelet',
        cardPrice: '$' + 3.49,
        cardInfo: 13 + 'Bowls available'
        
    },

    {
        id: 6,
        img: kosa5,
        cardTitle: 'Spicy instant noodle with special omelette',
        cardPrice: '$' + 3.59,
        cardInfo: 17 + 'Bowls available'
        
    },

    {
        id: 7,
        img: kosa5,
        cardTitle: 'Hot spicy fried rice with omelet',
        cardPrice: '$' + 3.49,
        cardInfo: 13 + 'Bowls available'
        
    },

    {
        id: 8,
        img: kosa5,
        cardTitle: 'Spicy instant noodle with special omelette',
        cardPrice: '$' + 3.59,
        cardInfo: 17 + 'Bowls available'
        
    },

    {
        id: 9,
        img: kosa5,
        cardTitle: 'Hot spicy fried rice with omelet',
        cardPrice: '$' + 3.49,
        cardInfo: 13 + 'Bowls available'
        
    },

    {
        id: 10,
        img: kosa5,
        cardTitle: 'Spicy instant noodle with special omelette',
        cardPrice: '$' + 3.59,
        cardInfo: 17 + 'Bowls available'
        
    },

    {
        id: 11,
        img: kosa5,
        cardTitle: 'Hot spicy fried rice with omelet',
        cardPrice: '$' + 3.49,
        cardInfo: 13 + 'Bowls available'
        
    },

    {
        id: 12,
        img: kosa5,
        cardTitle: 'Spicy instant noodle with special omelette',
        cardPrice: '$' + 3.59,
        cardInfo: 17 + 'Bowls available'
        
    }
]



const RestoMain = () => {
    return (
        <div className="mainer-wrapper">
            <RestoMainItems/>

       
       
       
       
            <div className="card-main">
                 {
                 mainInfo.map((item) => (
                      <RestoMainCard
                        id={item.id}
                        img={item.img}
                        cardTitle={item.cardTitle}
                        cardPrice={item.cardPrice}
                        cardInfo={item.cardInfo}
                      
                      
                      
                      />
                 ))
        }
            </div>
          

        </div>
    )
}

export default RestoMain;