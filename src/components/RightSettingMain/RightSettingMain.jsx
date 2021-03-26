import './RightSettingMain.scss';

import SettingAdder from '../SettingAdder';

import SettingCards from '../SettingCards';

import ovqat1 from '../../assests/images/ovqat1.jpg';
import kosa1 from '../../assests/images/kosa1.jpg';
import kosa3 from '../../assests/images/kosa3.jpg';
import kosa4 from '../../assests/images/kosa4.jpg'


let stMainArr = [
    {
        stCardsImg: ovqat1,
        stCardsTitle: 'Spicy seasoned seafood noodles',
        stCardsTexts: '$ 2.29 * 20 Bowls'
    },

    {
        stCardsImg: kosa1,
        stCardsTitle: 'Salted Pasta with mushroom sauce',
        stCardsTexts: '$ 2.69 * 30 Bowls'
    },

    {
        stCardsImg: kosa3,
        stCardsTitle: 'Spicy seasoned seafood noodles',
        stCardsTexts: '$ 2.29 * 20 Bowls'
    },

    {
        stCardsImg: kosa4,
        stCardsTitle: 'Salted Pasta with mushroom sauce',
        stCardsTexts: '$ 2.69 * 30 Bowls'
    },

    {
        stCardsImg: kosa3 ,
        stCardsTitle: 'Spicy seasoned seafood noodles',
        stCardsTexts: '$ 2.29 * 20 Bowls'
    },

    {
        stCardsImg: kosa1,
        stCardsTitle: 'Salted Pasta with mushroom sauce',
        stCardsTexts: '$ 2.69 * 30 Bowls'
    },

    {
        stCardsImg: ovqat1,
        stCardsTitle: 'Spicy seasoned seafood noodles',
        stCardsTexts: '$ 2.29 * 20 Bowls'
    },


    {
        stCardsImg: kosa1,
        stCardsTitle: 'Spicy seasoned seafood noodles',
        stCardsTexts: '$ 2.29 * 20 Bowls'
    }
]

const RightSettingMain = () => {
    return (
        <div className="st-main-wrapper">

            <SettingAdder/>

            {
                stMainArr.map((item) => (
                    <SettingCards
                    stCardsImg={item.stCardsImg}
                    stCardsTitle={item.stCardsTitle}
                    stCardsTexts={item.stCardsTexts}
                    
                    />
                ))
            }

        </div>
    )
}

export default RightSettingMain;