import './SettingAdder.scss';

import plus from '../../assests/images/icons/plus.svg'

const SettingAdder = () => {
    return (
        <div className="adder-wrapper">
            <button className="adder-btn">
                <img src={plus} alt="" className="adder-img"/>
                Add new dish
            </button>
        </div>
    )
}

export default SettingAdder;