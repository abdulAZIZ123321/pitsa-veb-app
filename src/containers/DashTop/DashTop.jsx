import './DashTop.scss';

import DashTopItems from '../../components/DashTopItems';

import dollar from '../../assests/images/icons/dollar.svg';
import strelTepa from '../../assests/images/icons/strTepaga.svg';
import strelPastga from '../../assests/images/icons/strPastga.svg';
import birnima from '../../assests/images/icons/birnima.svg';
import odamlar from '../../assests/images/icons/odamIcon.svg';

let dashArr = [
    {
        img: dollar,
        img2: strelTepa,
        persentage: '+32.40%',
        dollar:'$10,243.00',
        result: 'Total Revenue'
    },
    {
        img: birnima,
        img2: strelPastga,
        persentage: '-12.40%',
        dollar: '23,456',
        result: 'Total Dish Ordered'
    },
    {
        img: odamlar,
        img2: strelTepa,
        persentage: '+2.40%',
        dollar: '1,234',
        result: 'Total Customer'
    }
   
  
]


const DashTop = () => {
    return (
       <div className="dashTop-wrapper">



           <div className="topItems">
                {
                dashArr.map((item) => (
                     <DashTopItems
                     
                     img={item.img}
                     img2={item.img2}
                     persentage={item.persentage}
                     dollar={item.dollar}
                     result={item.result}
                     
                     
                     
                     />
                ))
            }
           </div>
          
       </div>
    )
}


export default DashTop;