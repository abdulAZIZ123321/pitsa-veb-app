import './RightBar.scss'

import BarTop from '../../components/BarTop';

import BarBottom from '../../components/BarBottom';
import roziviy from '../../assests/images/icons/roziviy.svg';
import orange from '../../assests/images/icons/orange.svg';
import havorang from '../../assests/images/icons/havorang.svg';
import bar from '../../assests/images/icons/Circle.svg';

let barArr = [
    {
        barImg: roziviy,
        barTitle: 'Dine In',
        barSubtitle: '200 customers'
    },
    {
        barImg: orange,
        barTitle: 'To Go',
        barSubtitle: '122 customers'
    },
    {
        barImg: havorang,
        barTitle: 'Delivery',
        barSubtitle: '264 customers'
    }
]

const RightBar = () => {
    return (
        <div className="rb-wrapper">
            <BarTop/>



            <div className="br-bt-wrapper">
                <div className="bar-img-left">
                    <img src={bar} alt="" className="bar-big-img"/>
                </div>

                <div className="br-bt-wrapper2">
                    
                {
                barArr.map((item) => (
                    <BarBottom

                    barImg={item.barImg}
                    barTitle={item.barTitle}
                    barSubtitle={item.barSubtitle}
                
                
                    />
                ))
                 }
                </div>
            </div>
        </div>
    )
}

export default RightBar;